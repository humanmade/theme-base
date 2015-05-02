module.exports = {
	dev: {
		bsFiles: {
			src : [
				'style.dev.css',
				'**/*.php'
			]
		},
		options: {
			watchTask: true,
			proxy: 'mysite.dev'
		}
	}
};
