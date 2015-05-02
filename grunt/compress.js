module.exports = {
	main: {
		options: {
			mode: 'zip',
			archive: './releases/<%= package.name %>-<%= package.version %>.zip'
		},
		expand: true,
		cwd: 'releases/svn/',
		src: ['**/*']
	}
};