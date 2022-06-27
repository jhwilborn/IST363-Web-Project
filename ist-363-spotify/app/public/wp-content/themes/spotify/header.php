<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IST 363 Spotify</title>
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/style.css">
    <!--Searches in the theme folder instead of the WP site top level directory. Returns the file path of styles.css-->
    <?php wp_head(); ?>
</head>

<body>
    <?php /*get_search_form();*/ ?>
    <div class="overlay" id="mobileMenu">
        Mobile Nav Goes Here
        <button class="btn-ui closeMenuBtn" id="closeMenuBtn">
            <img src="<?php bloginfo('template_directory'); ?>/images/xmark-solid.svg" alt="close icon">
        </button>
    </div><!-- mobile menu -->
    <header>
        <div class="container">
            <div class="row justify-content-space-between align-items-center">
                <a href="http://ist-363-spotify.local/"><img class="logo" src="<?php bloginfo('template_directory'); ?>/images/spotify-logo-white.svg" alt="Spotify logo" class="logo"></a>

                <nav class="nav nav-primary">
                    <ul>
                        <li><a href="/account">Account</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <button class="btn-ui" id="menuBtn"><img src="<?php bloginfo('template_directory') ?>/images/broom-ball-solid.svg" alt="svg image menu icon"></button>
            </div>
        </div> <!-- row -->
        <!--container-->
        <?php /* get_search_form();  */ ?>
    </header>
    <main>