<?php get_header();?>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?> <!--if there are posts in the database, advance-->

        <h1><?php the_title(); ?> </h1>
        <?php the_content();?>

    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p> <!--if no posts, end if with an echo and say no posts found->
    <?php endif; ?>

<?php get_footer();?>