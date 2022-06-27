<?php get_header();?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?> <!--if there are posts in the database, advance-->
    <?php 
	$year = get_field('year');
	$artists = get_field('artists_to_albums')
	?>
	<pre>
		<?php print_r($artists);?> <!--print_r is print record of input-->
	</pre>
        <?php the_post_thumbnail('medium', array(
                //'class' => 'responsive-img'
            ));?>
        <h1><?php the_title(); ?> (<?php print $year;?>) </h1> <!--php the_field('year');-->


		<?php foreach($artists as $artist) { ?>
            <?php 
                $title=get_the_title($artist_id);
                $featuredImage=get_the_post_thumbnail($artist_id, 'thumbnail');  
                $permalink=get_the_permalink($artist_id);  
            ?>
            <article>
            
            <h3><?php print $title; ?></h3>
            <a href="<?php print $permalink?>"><?php print $featuredImage;?></a>
            <a href="<?php print $permalink?>">View Album</a>
            <?php ?>
            </article>
		<?php } ?>


        <?php the_content();?>
    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no albums matched your criteria.' ); ?></p> <!--if no posts, end if with an echo and ao-->
    <?php endif; ?>

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?> <!--if there are posts in the database, advance-->
        <?php $songs=get_field('songs_to_albums');?>
        <?php foreach($songs as $song_id) { ?>
        <?php 
            $title=get_the_title($song_id); //'the' functions have built in print, 'get' allows storage in variable
            $featuredImage = get_the_post_thumbnail($song_id, 'thumbnail');
            $permalink=get_the_permalink($song_id);
        ?>
        <h3><?php print $title; ?></h3>
        <a href="<?php print $permalink?>">View Song</a>

        <?php }  //foreach loop end?>

    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no songs matched your criteria.' ); ?></p> <!--if no posts, end if with an echo and ao-->
    <?php endif; ?>



<?php get_footer();?>