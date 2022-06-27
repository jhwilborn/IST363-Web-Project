<?php
function spotify_cpt() {
    register_post_type('artists', //unique slug
        array(
            'labels'      => array(
                'name'          => __('Artists', 'textdomain'), //__ is wp sanitizing function, plural is label for interface
                'singular_name' => __('Artist', 'textdomain'), //label for specific post
            ),
			'public'      => true,
			'show_in_rest' => true, // displays the new content editor
            'supports' => array(
                'title', 
                'editor', 
                'thumbnail', 
                'excerpt', 
                'page-attributes'
            ),
            'show_in_graphql' => true,
            'graphql_single_name' => 'artist',
            'graphql_plural_name' => 'artists',
        )
    );
    register_post_type('albums', //unique slug
        array(
            'labels'      => array(
                'name'          => __('Albums', 'textdomain'), //__ is wp sanitizing function, plural is label for interface
                'singular_name' => __('Album', 'textdomain'), //label for specific post, singular
            ),
			'public'      => true,
			'show_in_rest' => true, // displays the new content editor
            'supports' => array(
                'title', 
                'editor', 
                'thumbnail', 
                'excerpt', 
                'page-attributes'
            ),
            'show_in_graphql' => true,
            'graphql_single_name' => 'album',
            'graphql_plural_name' => 'albums',
        )
    );
    register_post_type('songs', //unique slug
        array(
            'labels'      => array(
                'name'          => __('Songs', 'textdomain'), //__ is wp sanitizing function, plural is label for interface
                'singular_name' => __('Song', 'textdomain'), //label for specific post, singular
            ),
			'public'      => true,
			'show_in_rest' => true, // displays the new content editor
            'supports' => array(
                'title', 
                'editor', 
                'thumbnail', 
                'excerpt', 
                'page-attributes'
            ),
            'show_in_graphql' => true,
            'graphql_single_name' => 'song',
            'graphql_plural_name' => 'songs',
        )
    );
    register_post_type('playlists', //unique slug
        array(
            'labels'      => array(
                'name'          => __('Playlists', 'textdomain'), //__ is wp sanitizing function, plural is label for interface
                'singular_name' => __('Playlist', 'textdomain'), //label for specific post, singular
            ),
			'public'      => true,
			'show_in_rest' => true, // displays the new content editor
            'supports' => array(
                'title', 
                'editor', 
                'thumbnail', 
                'excerpt', 
                'page-attributes'
            ),
            'show_in_graphql' => true,
            'graphql_single_name' => 'playlist',
            'graphql_plural_name' => 'playlists',
        )
    );
}

add_action('init', 'spotify_cpt'); //create or use wordpress hook in wp startup "init"
