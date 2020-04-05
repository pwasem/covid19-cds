const path = require('path')
const fs = require('fs-extra')

module.exports = (grunt) => async function () {
  const done = this.async()
  try {
    const dirpath = path.join(process.cwd(), 'persistent')
    await fs.ensureDir(dirpath)
    done()
  } catch (error) {
    grunt.log.error(error.stack)
    done(error)
  }
}
