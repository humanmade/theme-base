Theme base
=======

Theme boilerplate

Quick Start
-----------

You will need a few tools to be able to work on the theme.

- [Bourbon and Neat] (http://bourbon.io), follow link for installation instructions.
- [Grunt](http://gruntjs.com/getting-started), follow link for installation instructions.

Once you've installed these utilities, you're ready to rock & roll.

Run `npm install`, this will install the grunt task modules that will allow you to build the theme.

Commands:

- `grunt`: default task which will compile SCSS to CSS and autoprefix any properties that require vendor prefixes. Also minifies the CSS and JS as well as optimizing any image assets.

- `grunt dowatch` - starts BrowserSync and watches any changes to SCSS files in order to compile it to CSS. Live preview in any browser including mobile devices.

- `grunt build`: in addition to doing what the default task does, it creates a release build of the theme ready to upload to svn.