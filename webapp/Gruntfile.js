var path = require('path');

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        injector: {
            options: {
                destFile: 'src/index.html'
            },
            app: {
                options: {
                    ignorePath: ['bower_components', 'src']
                },
                files: [{
                    expand: true,
                    cwd: 'webapp',
                    src: ['**/*.css']
                }, {
                    expand: true,
                    src: ['bower.json']
                }, {
                    expand: true,
                    cwd: 'webapp',
                    src: ['**/index.js', '**/*.js']
                }]
            }

        },
        watch: {
            express: {
                files: ['**/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
                }
            }
        },
        express: {
            options: {
                script: 'devServer.js'
            },
            dev: {
                options: {
                    node_env: 'development',
                    debug: true
                }
            }
        }
    });

    grunt.registerTask('develop', ['injector', 'express', 'watch']);
};
