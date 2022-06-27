<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Pb2lqj0D/PHh8H9BL0UbFtlObWpgvBo4iLl9pfoWZp9VlWFsQAWPFRhYPpe0mSp5HoqNQX22Ox+Sj2/Q3d4Zsw==');
define('SECURE_AUTH_KEY',  '9nC4TKu3hyNX88Z45zMkazNckGFPeljsRVwsmptO3D7wAWntgQekxrv3d+PW2fgie6gE2//Om5RtvYH23Frz6w==');
define('LOGGED_IN_KEY',    'zJEhN1ePzdPIjfWbDWD4RRLX3Pp7Uj1w/BCFqyTnDSMe5ihrop2LdevKDgpTXpIKqqFxgDsOUvhoSg/0fe3ymQ==');
define('NONCE_KEY',        'pjDfyyoj8e4WkgPhDlgvj3HetDIKBef2tJGPeckf89VTQH7uMPHtBtgmfyyZtPv9RDj9cKAAG/GOq2rtkDKkvQ==');
define('AUTH_SALT',        'gO0vgXRb9jSI/pLxrz5W2J66yLK5rGeEYz8yscjS1gxVlNtJt4RrDRF4EhDx9CZgMTuT6o8e37V0zEjVshU3Bg==');
define('SECURE_AUTH_SALT', 'pinxuYQ9qxNrFEIt2iDNRk4AE93Rq/JISxgw3om0D94L/IOfUN3SAQoLTdzQ0p2RKup8GuC7OpCaOhmBN/4h+A==');
define('LOGGED_IN_SALT',   'iZamXpkRTKweoV65uMI/fCjl+HjLXM2yBEhJvyGl6Gm9umJdFkJg34YF0wo8UY8O7evDfPKmwzPqlkm62YUVNA==');
define('NONCE_SALT',       'Erpm4wdeitWgLSJUso3A258OLHtb/8e9eYBrmjuHWdwyDJk9Uoair12DvSBf3oi/GTbqiYiC7NaKt/SKmSRNiw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

/* -------------------------------------------------- /
/ CUSTOM SETTINGS FOR WP-CONFIG.PHP /
/ INCREASE PHP MEMORY TO 256 MB /
/ -------------------------------------------------- */
// define( ‘WP_MEMORY_LIMIT’, ‘256M’ );