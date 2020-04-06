const cfenv = require('cfenv')
const express = require('express')
const { decorateApp } = require('@awaitjs/express');
const log = require('cf-nodejs-logging-support')
const cds = require('@sap/cds')
const proxy = require('@sap/cds-odata-v2-adapter-proxy')

const main = async () => {
  try {
    // init app env
    const { bind, port, url } = cfenv.getAppEnv({
      vcap: { // provide env for running locally
        application: {
          bind: '0.0.0.0',
          port: 4004
        }
      }
    })

    // init log
    log.setLoggingLevel('info')
    if (process.env.NODE_ENV !== 'production') {
      log.setSinkFunction((level, output) => console[level](`[${level}] ${JSON.parse(output).msg}`))
    }

    // create new app
    const app = decorateApp(express())

    // log requests
    if (process.env.NODE_ENV === 'production') {
      app.use(log.logNetwork)
    }

    // serve odata v4
    await cds
      .connect('db') // ensure db is connected
      .serve('all')
      .to('fiori')
      .in(app)

    // serve odata v2
    process.env.XS_APP_LOG_LEVEL = 'none' // suppress logs
    app.use(proxy({
      // app
      path: 'v2',
      // target
      port: port
    }))

    // start service
    await app.listen(port, bind)
    log.info(`Service is listening at ${url}`)
  } catch (error) {
    log.error(error)
  }
}

main()
