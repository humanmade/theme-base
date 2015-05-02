module.exports = {
	dev: {
		options: {
			style: 'expanded'
		},
		files: {
			'assets/css/mytheme.dev.css': 'assets/css/scss/mytheme.scss',
			'assets/css/ie.dev.css': 'assets/css/scss/ie.scss'
		}
	},
	dist: {
		options: {
			style: 'compressed'
		},
		files: {
			'assets/css/mytheme.min.css': 'assets/css/scss/mytheme.scss',
			'assets/css/ie.min.css': 'assets/css/scss/ie.scss'
		}
	}
};
