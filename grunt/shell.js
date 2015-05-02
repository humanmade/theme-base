module.exports = {
	build: {
		command: 'rsync -avzrR --exclude-from \'bin/excludes\' . releases/svn/<%= package.version %>'
	}
};