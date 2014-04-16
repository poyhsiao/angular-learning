module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  /* Project configuration */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.descriptiton %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          paths: ['routes', 'libs', '.'],
          outdir: 'docs/doc',
          exclude: 'lib,docs,build',
          themedir: 'docs/themes/yuidoc-bootstrap.theme',
          helpers: ['docs/themes/yuidoc-bootstrap.theme/helpers/helpers.js']
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/conn/*.js'],
        dest: 'src/join/<%= pkg.name %>.join.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
      },
      build: {
        src: 'src/join/<%= pkg.name %>.join.js',
        dest: 'public/js/<%= pkg.name %>.min.js'
      }
    },

    qunit: {  /* seems cannot work correct on MacOSX */
      all: ['test/**/*.html', 'views/**/*.html']
    },

    jshint: {
      files: ['./*.js', 'routes/**/*.js', 'src/**/*.js'],
      options: {
        globals: {
          exports: true
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });
  /* Default task(s) */
  grunt.registerTask('default', ['yuidoc', 'jshint', 'concat', 'uglify', 'watch']);
  // grunt.registerTask('test', ['qunit']);
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('doc', ['yuidoc']);
};
