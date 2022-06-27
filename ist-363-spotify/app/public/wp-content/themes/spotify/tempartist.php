<?php get_header();?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?> <!--if there are posts in the database, advance-->
    <?php $albums = get_field('artists_to_albums')?>
    <pre>
		<?php print_r($albums);?> <!--print_r is print record of input-->
	</pre>
        <?php the_post_thumbnail('large', array(
                'class' => 'responsive-img'
            ));?>
        <h1><?php the_title(); ?> </h1>
        <?php foreach($albums as $album) { ?>
			<h2>Album <?php print get_the_title($album);?></h2>
		<?php } ?>
        <?php the_content();?>

    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no artists matched your criteria.' ); ?></p> <!--if no posts, end if with an echo and ao-->
    <?php endif; ?>

<?php get_footer();?>