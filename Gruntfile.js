/*global module:false*/
module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig( {
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: [ 'app/**/*.js', ]
      }
    },
    qunit: {
      files: [ 'test/**/*.html' ]
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: [ 'jshint:gruntfile' ]
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: [ 'jshint:lib_test', 'qunit' ]
      }
    },
    ngtemplates: {
      hbApp: {
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: false,
          removeAttributeQuotes: true,
          removeComments: true, // Only if you don't use comment directives!
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        options: {
          prefix: '/'
        },
        cwd: "public",
        src: '**/*.html',
        dest: 'public/templatesCache.js'
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
  grunt.registerTask( 'default', [ 'jshint', 'ngtemplates' ] );

};
