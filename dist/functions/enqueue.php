<?php

// Keep SPA route aliases in sync with src/router/index.js page slug mappings.
function get_spa_route_aliases() {
  return array(
    'new-patients' => 'simply-straight',
    'treatments' => 'financial',
  );
}

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown.
remove_action('template_redirect', 'redirect_canonical');
function remove_redirects() {
  add_rewrite_rule('^(.+)?/?$', 'index.php', 'top');
}
add_action('init', 'remove_redirects');

// Map friendly Vue URLs to existing WP page slugs before WP determines 404 state.
function map_spa_route_aliases_to_pages( $query_vars ) {
  if ( is_admin() || wp_doing_ajax() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
    return $query_vars;
  }

  $request_uri = isset( $_SERVER['REQUEST_URI'] ) ? wp_unslash( $_SERVER['REQUEST_URI'] ) : '';
  $request_path = parse_url( $request_uri, PHP_URL_PATH );

  if ( ! is_string( $request_path ) ) {
    return $query_vars;
  }

  $request_path = trim( $request_path, '/' );
  $site_path = trim( (string) parse_url( home_url( '/' ), PHP_URL_PATH ), '/' );

  if ( $site_path !== '' && strpos( $request_path, $site_path . '/' ) === 0 ) {
    $request_path = substr( $request_path, strlen( $site_path ) + 1 );
  }

  $route_aliases = get_spa_route_aliases();
  if ( array_key_exists( $request_path, $route_aliases ) ) {
    $query_vars['pagename'] = $route_aliases[ $request_path ];
    unset( $query_vars['name'] );
  }

  return $query_vars;
}
add_filter( 'request', 'map_spa_route_aliases_to_pages', 1 );

function load_scripts() {
	wp_enqueue_script( 'main-manifest', get_template_directory_uri() . '/static/js/manifest.js', array(), '1.0.0', true );
	wp_enqueue_script( 'main-vendor', get_template_directory_uri() . '/static/js/vendor.js', array(), '1.0.0', true );
	wp_enqueue_script( 'main-scripts', get_template_directory_uri() . '/static/js/app.js', array(), '1.0.0', true );
	wp_enqueue_style('main-styles', get_template_directory_uri() . '/static/css/app.css', array(), '1.0.0', 'all');

	remove_action('wp_head', 'print_emoji_detection_script', 7);
	remove_action('wp_print_styles', 'print_emoji_styles');
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
}
add_action('wp_enqueue_scripts', 'load_scripts');

function get_menu() {
    return wp_get_nav_menu_items('menu');
}

add_action( 'rest_api_init', function () {
        register_rest_route( 'api', '/menu', array(
        'methods' => 'GET',
        'callback' => 'get_menu',
    ) );
} );

function my_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
          background-image: url(/wp-content/themes/dist/static/login-logo.svg);
					height:150px;
					width:320px;
					background-size: 320px 150px;
					background-repeat: no-repeat;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );

function my_login_logo_url() {
    return 'https://roostergrin.com';
}
add_filter( 'login_headerurl', 'my_login_logo_url' );

function my_login_logo_url_title() {
    return 'Build By Rooster Grin Media';
}
add_filter( 'login_headertext', 'my_login_logo_url_title' );
