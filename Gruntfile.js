/*global module:false*/
module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig( {
    ngtemplates: {
      hbApp: {
        htmlmin: {
          collapseWhitespace: false
        },
        options: {
          prefix: '/'
        },
        cwd: "public",
        src: '**/*.html',
        dest: 'app/assets/javascripts/hbAppCache.js'
      }
    },
    concat: {
      hbApp: {
        src: [ '**.js', '<%= ngtemplates.hbApp.dest %>' ],
        dest: 'app.js'
      }
    }
  } );

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks( 'grunt-contrib-qunit' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );

  // Pre-Compile Templates
  grunt.loadNpmTasks( 'grunt-angular-templates' );

  // Default task.
  grunt.registerTask( 'default', [ 'ngtemplates' ] );

};
