<?php get_header();?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?> <!--if there are posts in the database, advance-->
   
    <?php the_post_thumbnail('medium', array(
        'class' => 'responsive-img'
    ));?>
    <h1><?php the_title();?></h1>
    <?php the_content();?>

    <?php $albums=get_field('artists_to_albums');?>
    <!--
    <pre>
        <?php print_r($albums);?>
    </pre>
    -->

    <?php foreach($albums as $album_id) { ?>
        <?php 
            $title=get_the_title($album_id);
            $featuredImage = get_the_post_thumbnail($album_id, 'thumbnail');
            $permalink=get_the_permalink($album_id);
        ?>
        <h3><?php print $title; ?></h3>
        <a href="<?php print $permalink?>"><?php print $featuredImage;?></a> <!--fix this-->
        <a href="<?php print $permalink?>">View Album</a>

        <?php }  //foreach loop end?>

    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no albums matched your criteria.' ); ?></p> <!--if no posts, end if with an echo and ao-->
    <?php endif; ?>


<?php get_footer();?>