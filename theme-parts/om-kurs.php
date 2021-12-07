<?php 
$params = array(
    'orderby' => 'post_date',
    'limit' => -1, 
);
$menu_pods = pods('om_kurs', $params); ?>

<div class="header_margin"></div>

<main>
    <h1><?php echo get_the_title(); ?></h1>
    <div class="wrapper">
        <section>
            <nav class="side_menu">
                <ul>
                <?php while ($menu_pods->fetch()) { ?>
                    <li >
                        <?php if (get_the_title() == $menu_pods->field('title')) { ?>
                            <a class="current" href=" <?php echo $menu_pods->field('permalink') ?> "> <?php echo $menu_pods->field('title') ?> </a>
                        <?php } else { 
                            ?>
                            <a href=" <?php echo $menu_pods->field('permalink') ?> "> <?php echo $menu_pods->field('title') ?> </a>
                            <?php
                        }
                        ?>
                        
                    </li>
                <?php } ?>
                </ul>
            </nav> 
        </section>

        <?php
        $id = get_the_ID();
        $post = pods('om_kurs', $params);
        if ($post->fetch($id)) {

            ?>
            <section class="om_container">

                <?php
                // Kun indsæt img, hvis det er indsat i CMS
                if($post->field('billede')){

                $image = $post->field('billede');
                $fallback = $post->field('billede_fallback');
                $size = ''; 
                $default = -1; 
                $force = false; 
                $imgUrl = pods_image_url($image, $size, $default, $force);
                $fallbackUrl = pods_image_url($fallback, $size, $default, $force);
                ?>

                <picture data-image="<?php echo $imgUrl?>"  data-fallback="<?php echo $fallbackUrl ?>">
                    <source srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" type="image/webp">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" loading="lazy">
                </picture>

                <?php } ?>


                <article>
                    <?php echo $post->field('tekst') ?>
                </article>

            </section>
        </div>
    </main>

<?php }

