<?php get_header();?>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?> <!--if there are posts in the database, advance-->
        <?php the_post_thumbnail('large', array(
                'class' => 'responsive-img'
            ));?>
        <h1><?php the_title(); ?> </h1>
        <h2>Written by <?php the_author(); ?> </h2>
        <h3>Published on <?php the_date(); ?> </h3>
        <?php the_content();?>

    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p> <!--if no posts, end if with an echo and ao-->
    <?php endif; ?>
<?php get_footer();?>