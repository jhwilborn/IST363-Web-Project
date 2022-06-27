<?php get_header();?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?> <!--if there are posts in the database, advance-->
   
    <h1><?php the_title();?></h1>
    <?php $albums=get_field('songs_to_albums');?>


    <pre>
        <?php print_r($albums);?>
        <?php print_r($artists);?>
    </pre>

    <?php foreach($albums as $album_id) { ?>
        <?php 
            $title=get_the_title($album_id); //'the' functions have built in print, 'get' allows storage in variable
            $featuredImage = get_the_post_thumbnail($album_id, 'thumbnail');
            $permalink=get_the_permalink($album_id);
        ?>
        <h3><?php print $title; ?></h3>
        <a href="<?php print $permalink?>"><?php print $featuredImage;?></a> <br>
        <a href="<?php print $permalink?>">View Album</a>

        <?php }  //foreach loop end?>

    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no albums matched your criteria.' ); ?></p> <!--if no posts, end if with an echo and ao-->
    <?php endif; ?>
    
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?> <!--if there are posts in the database, advance-->
        <?php $artists=get_field('songs_to_artists');?>
        <?php foreach($artists as $artist_id) { ?>
        <?php 
            $title=get_the_title($artist_id); //'the' functions have built in print, 'get' allows storage in variable
            $featuredImage = get_the_post_thumbnail($artist_id, 'thumbnail');
            $permalink=get_the_permalink($artist_id);
        ?>
        <h3><?php print $title; ?></h3>
        <a href="<?php print $permalink?>"><?php print $featuredImage;?></a> <br>
        <a href="<?php print $permalink?>">View Artist</a>

        <?php }  //foreach loop end?>


    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no artists matched your criteria.' ); ?></p> <!--if no posts, end if with an echo and ao-->
    <?php endif; ?>
    


<?php get_footer();?>