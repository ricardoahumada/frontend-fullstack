module.exports = function(grunt) { 
	// CONFIGURAR GRUNT
	grunt.initConfig({ 
		pkg: grunt.file.readJSON('package.json'), 
		jshint: { 
			// Utiliza jshint-stylish para que nuestros errores aparezcan y se lean bien
			options: { reporter: require('jshint-stylish') },
			build: ['Gruntfile.js', 'src/**/*.js'] 
		},
		uglify: { 
			options: { banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n' },
			build: { files: { 'dist/js/app.min.js': ['src/js/modules/my_module.js', 'src/js/*.js'] } } 
		} ,
		less: { build: { files: { 'dist/css/style.css': 'src/css/*.less' } } },
		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'dist/css/style.min.css': 'dist/css/*.css'
				}
			}
		},
		watch: {
			stylesheets: {
				files: ['src/**/*.css', 'src/**/*.less'],
				tasks: ['less', 'cssmin']
			},
			scripts: {
				files: 'src/**/*.js',
				tasks: ['jshint', 'uglify']
			}
		}

	});

	//Carga de pluggins GRUNT
	grunt.loadNpmTasks('grunt-contrib-jshint'); 
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-less'); 
	grunt.loadNpmTasks('grunt-contrib-cssmin'); 
	grunt.loadNpmTasks('grunt-contrib-watch'); 

	//Tareas por defecto
	grunt.registerTask('default', ['jshint', 'uglify', 'less', 'cssmin']); 

	// Desarrollo
	grunt.registerTask('dev', ['jshint:dev', 'uglify:dev', 'cssmin:dev', 'less:dev']);
	// Produccion
	grunt.registerTask('production', ['jshint:production', 'uglify:production', 'cssmin:production', 'less:production']);


};
