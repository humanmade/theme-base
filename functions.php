<?php

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 640; /* pixels */
}

add_action( 'after_setup_theme', function() {

	/*
 * Make theme available for translation.
 * Translations can be filed in the /languages/ directory.
 */
	load_theme_textdomain( 'mytheme', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption',
	) );

});

add_action( 'wp_enqueue_scripts', function() {

	$version = filemtime( get_stylesheet_directory() . '/style.dev.css' );

	if ( true === WP_DEBUG ) {
		wp_enqueue_style( 'mytheme-dev-style', get_template_directory_uri() . '/style.dev.css', array(), $version, 'screen' );
	} else {
		wp_enqueue_style( 'mytheme-style', get_stylesheet_uri() );
	}
});
