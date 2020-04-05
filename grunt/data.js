const path = require('path')
const fs = require('fs-extra')
const stream = require('stream')
const util = require('util')
const finished = util.promisify(stream.finished)
const changeCase = require('change-case')
const { Dataset } = require('data.js')

// @see https://datahub.io/core/covid-19#javascript
const endpoint = 'https://datahub.io/core/covid-19/datapackage.json'
const names = ['countries-aggregated']

module.exports = (grunt) => async function () {
  const done = this.async()
  try {
    // ensure csv dir
    const dirpath = path.join(process.cwd(), 'db', 'data')
    await fs.emptyDir(dirpath)
    // load dataset
    const dataset = await Dataset.load(endpoint)
    // get all tabular data (if exists any)
    for (const id in dataset.resources) {
      const resource = dataset.resources[id]
      const { name, format } = resource._descriptor
      // filter resources
      if (format === 'csv' && names.includes(name)) {
        const readable = await resource.stream()
        const filepath = path.join(dirpath, `covid19-${changeCase.pascalCase(name)}.csv`)
        const writable = fs.createWriteStream(filepath)
        readable.pipe(writable)
        await finished(writable)
      }
    }
    done()
  } catch (error) {
    grunt.log.error(error.stack)
    done(error)
  }
}
