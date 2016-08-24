module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /**
        * Watch Task
        */
        watch:{
            css:{
                files: '**/*.scss',
                task: ['sass']
            }
        },
        /**
        * SASS
        */
        sass:{
            dev:{
                options: {
                    style: 'expanded',
                    sourcemap:'none'
                },
                files: {
                    'style.css':'sass/style.scss'
                }
            }
        },

        /**
        * Grunt Express
        */
        browserSync: {
          bsFiles: {
            src : ['**/*.css', '**/*.html']
          },
          options: {
            watchTask: true,
            server: {
              baseDir: [__dirname]
            }
          }
        },

    });

    // Load grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('start', ['browserSync', 'watch']);
};
