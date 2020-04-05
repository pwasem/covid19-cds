const init = require('./grunt/init')
const data = require('./grunt/data')

module.exports = grunt => {
  grunt.registerTask('init', init(grunt))
  grunt.registerTask('data', data(grunt))
  grunt.registerTask('default', [
    'init',
    'data'
  ])
}
