module.exports = {
	grunt: { files: ['Gruntfile.js'] },

	sass: {
		files: 'assets/scss/**/*.scss',
		tasks: ['sass', 'autoprefixer' ]
	}
};
