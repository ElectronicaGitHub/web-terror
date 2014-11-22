module.exports = function (grunt) {

  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          'public/stylesheets/build/glitch.css': 'public/stylesheets/glitch.scss'
        }
      }
    }
  });

  // Load NPM Tasks
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default Task Validates Less and Builds CSS for dist
  grunt.registerTask("default", ['sass']);
};
