module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      src: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.jsx', '**/*.js'],
            dest: 'transpiled',
            ext: '.js'
          }
        ]
      },
      demo: {
        files: [
          {
            expand: true,
            cwd: 'demo',
            src: ['**/*.jsx'],
            dest: 'transpiled',
            ext: '.js'
          }
        ]
      },
      documentation: {
        files: [
          {
            expand: true,
            cwd: 'documentation',
            src: ['**/*.jsx'],
            dest: 'transpiled',
            ext: '.js'
          }
        ]
      },
      test: {
        files: [
          {
            expand: true,
            cwd: 'test',
            src: ['**/*.jsx'],
            dest: 'test-built',
            ext: '.js'
          }
        ]
      }
    },

    clean: {
      transpiled: ['transpiled'],
      test: ['test-built'],
      dist: ['canon-react.js', 'canon-react.min.js', './demo/bundle.js', './dist']
    },

    watch: {
      all: {
        files: [
          'src/**/*.jsx',
          'src/**/*.js',
          'test/**/*.jsx',
          'test/**/*.js',
          'demo/**/*.jsx'
        ],
        tasks: ['build-dev'],
        options: {
          spawn: false
        }
      },
      documentation: {
        files: [
          'src/**/*.jsx',
          'src/**/*.js',
          'documentation/**/*.jsx'
        ],
        tasks: ['documentation-build'],
        options: {
          spawn: false
        }
      }
    },

    browserify: {
      test: {
        files: {
          'test_bundle.js': ['test-built/**/*.js']
        },
        options: {
          verbose: true
        }
      },
      release: {
        files: {
          'canon-react.js': ['transpiled/index.js']
        },
        options: {
          transform: [ 'browserify-shim' ],
          browserifyOptions: {
            standalone: 'canonReact'
          }
        }
      },
      demo: {
        files: {
          'demo/bundle.js': ['transpiled/**/*.js'],
        },
        options: {
          transform: [ 'browserify-shim' ]
        }
      },
      documentation: {
        files: {
          'documentation/bundle.js': ['transpiled/**/*.js']
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! canon-react <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'canon-react.js',
        dest: 'canon-react.min.js'
      }
    },

    eslint: {
      target: ['src/**/*', 'test/**/*.jsx', 'test/jasmine-helpers.js']
    }

  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('build-dev', [
    'clean:test',
    'clean:transpiled',
    'babel:src',
    'babel:test',
    'babel:demo',
    'browserify:test',
    'browserify:demo'
  ]);

  grunt.registerTask('build', [
    'clean:test',
    'clean:transpiled',
    'lint:eslint',
    'babel:src',
    'babel:test',
    'browserify:test',
    'browserify:release',
    'uglify:build'
  ]);

  grunt.registerTask('demo-build', [
    'babel:src',
    'babel:demo',
    'browserify:demo',
    'clean:transpiled'
  ]);

  grunt.registerTask('lint', ['eslint']);

  grunt.registerTask('documentation-build', [
    'babel:src',
    'babel:documentation',
    'browserify:documentation',
    'clean:transpiled'
  ]);

  grunt.registerTask('default', ['build']);

};
