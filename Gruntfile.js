module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      app: {
        files: {
          'assets/js/jquery.js': 'bower_components/jquery/jquery.js',
          'assets/js/html5shiv.js': 'bower_components/html5shiv/dist/html5shiv-printshiv.js',
          'assets/js/respond.js': 'bower_components/respond/src/respond.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['uglify']);
};
