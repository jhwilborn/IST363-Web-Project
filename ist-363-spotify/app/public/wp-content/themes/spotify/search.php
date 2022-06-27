<?php get_header();?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?> <!--if there are posts in the database, advance-->
    <article class="teaser">
        <?php the_post_thumbnail('thumbnail', array(
            'class' => 'responsive-img'
        ));?>
        <h2><?php the_title();?></h2>
        <h3>Written by <?php the_author();?></h3>
        <?php the_excerpt();?>
        <p><a href="<?php the_permalink(); ?>">Read more</a></p>
    </article>

    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no posts matched your search criteria.' ); ?></p> <!--if no posts, end if with an echo and ao-->
    <?php endif; ?>

<?php get_footer();?>