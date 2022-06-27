<?php get_header();?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?> <!--if there are posts in the database, advance-->
   
    <h1><?php the_title();?></h1>
    <?php $songs=get_field('songs_to_playlists');?>

    <pre>
        <?php print_r($songs);?>
    </pre>

    <?php foreach($songs as $song_id) { ?>
        <?php 
            $title=get_the_title($song_id); //'the' functions have built in print, 'get' allows storage in variable
            $permalink=get_the_permalink($song_id);
        ?>
        <h3><?php print $title; ?></h3>
        <a href="<?php print $permalink?>">View Song</a>

        <?php }  //foreach loop end?>

    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no songs matched your criteria.' ); ?></p> <!--if no posts, end if with an echo and ao-->
    <?php endif; ?>


<?php get_footer();?>