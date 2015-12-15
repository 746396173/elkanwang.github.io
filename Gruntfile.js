// Gruntfile.js
module.exports = function(grunt) {

	var autoprefixer = require('autoprefixer-core');

	grunt.initConfig({
		watch: {
            options: {
            dateFormat: function(time) {
                grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                grunt.log.writeln('Waiting for more changes...');
                },
            },
			styles: {
				files: "sass/**/*.scss",
				tasks: ['sass','postcss']
			}
		},

		sass: {
			dev: {
				files: {
					"css/main.css" : "sass/main.scss"
				}
			}
		},

		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						"css/main.css",
						"index.html"
					]
				}
			},

			options: {
				watchTask: true,
				server: {
					baseDir: "./"
				}
			}
		},

		postcss: {
	        options: {
	            processors: [
	              autoprefixer({ browsers: ['last 2 version'] }).postcss
	            ]
	        },
	        dist: { src: 'css/main.css' }
    	},

    	cssmin: {
		  my_target: {
		      src: ['css/*.css'],
		      dest: 'css/main.min.css'
		  }
		},
        jekyll: {                             // Task
            options: {                          // Universal options
                bundleExec: true,
            },
            serve: {                            // Another target
                options: {
                    dest: '.jekyll',
                    drafts: true
                }
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-jekyll');

	grunt.registerTask('default', ['postcss', 'cssmin']);
	grunt.registerTask('watchStyle', ['watch:styles']);
    grunt.registerTask('deploy', ['sass:dev', 'postcss', 'cssmin', 'jekyll']);
};
