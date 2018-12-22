module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      file: ['lib/**/*.js', 'models/**/*.js']
    },
    watch: {
      file: ['lib/**/*.js', 'models/**/*.js'],
      tasks: ['jshint']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
