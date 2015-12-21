var path = require('path');

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        dirs: {
            src: 'src',
            tmp: '.tmp'
        },

        clean: {
            all: ['<%= dirs.dist %>', '<%= dirs.tmp %>'],
            dist: '<%= dirs.dist %>',
            temp: '<%= dirs.tmp %>'
        },
        injector: {
            options: {
                destFile: 'src/index.html'
            },
            app: {
                options: {
                    ignorePath: ['bower_components', '<%= dirs.src %>', '.tmp']
                },
                files: [{
                    expand: true,
                    cwd: '.tmp/css',
                    src: ['**/*.css']
                }, {
                    expand: true,
                    src: ['bower.json']
                }, {
                    expand: true,
                    cwd: '<%= dirs.src %>',
                    src: ['webapp.js','webapp.const.js','**/*.js']
                }]
            }

        },
        watch: {
            express: {
                files: ['bower.json','<%= dirs.src %>/**/*.html','<%= dirs.src %>/**/*.js', '<%= dirs.src %>/styles/**/*.scss'],
                tasks: ['develop'],
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
        }, jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            web: {
                options: {
                    jshintrc: '.jshintrc'
                },
                files: [{
                    expand: true,
                    cwd: '<%= dirs.src %>/',
                    src: ['**/index.js', '**/*.js'],
                    dest: '<%= dirs.src %>/'
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= dirs.src %>/styles',
                cssDir: '<%= dirs.tmp %>/css',
                //generatedImagesDir: '.tmp/images/generated',
                //imagesDir: '<%= dirs.app %>/images',
                //javascriptsDir: '<%= dirs.app %>/scripts',
                fontsDir: '<%= dirs.src %>/styles/fonts',
                importPath: './bower_components',
                //httpImagesPath: '/images',
                //httpGeneratedImagesPath: '/images/generated',
                //httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= dirs.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    sourcemap: true
                }
            }
        }
    });

    grunt.registerTask('develop', ['clean:temp', 'compass:server', 'jshint', 'injector', 'express', 'watch']);
};
