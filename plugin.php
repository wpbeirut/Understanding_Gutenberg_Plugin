<?php
/**
 * Plugin Name: WpBeirut-alert — A Bootstrap alert picker
 * Plugin URI: https://github.com/wpbeirut
 * Description: WpBeirut-alert — A plugin to learn Gutenburg Development.
 * Author: Wordpress Beirut Community
 * Author URI: https://www.facebook.com/wpbeirut/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package wpbeirut
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
