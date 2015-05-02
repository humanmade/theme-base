module.exports = {
	png: {
		options: {
			optimizationLevel: 7
		},
		files: [
			{
				// Set to true to enable the following options…
				expand: true,
				// cwd is 'current working directory'
				cwd: 'assets/images',
				src: ['*.png'],
				// Could also match cwd line above. i.e. project-directory/img/
				dest: 'assets/images',
				ext: '.png'
			}
		]
	},
	jpg: {
		options: {
			progressive: true
		},
		files: [
			{
				// Set to true to enable the following options…
				expand: true,
				// cwd is 'current working directory'
				cwd: 'assets/images',
				src: ['*.jpg'],
				// Could also match cwd. i.e. project-directory/img/
				dest: 'assets/images',
				ext: '.jpg'
			}
		]
	}
};
