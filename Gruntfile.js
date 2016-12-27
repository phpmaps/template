//http://airdragondesign.com/blog/learn-to-use-grunt-with-sass-and-bootstrap
//http://blog.elenakolevska.com/using-grunt-with-laravel-and-bootstrap/
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
	      options: {
	        separator: ';',
	      },
	      development: {
	        src: [
	          './src/assets/js/loader.js',
              './src/assets/js/app.js'
	        ],
	        dest: './src/public/js/vendor.js',
	      }
	    },
        sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                './src/public/css/main.css': './src/assets/scss/main.scss'
	            }
	        }
	    },
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: ['./src/assets/**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['./src/assets/**/*.js'],
                tasks: ['concat']
            }
        }
    });
    // Load externally defined tasks.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Establish tasks we can run from the terminal.
    grunt.registerTask('build', ['sass', 'concat']);
    grunt.registerTask('default', ['build', 'watch']);
}