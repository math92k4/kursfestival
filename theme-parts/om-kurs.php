<?php 
$params = array(
    'orderby' => 'post_date',
    'limit' => -1, 
);
$menu_pods = pods('om_kurs', $params); ?>

<div class="header_margin"></div>

<main>
    <section>
        <nav>
            <ul>
            <?php while ($menu_pods->fetch()) { ?>
                <li >
                    <a href=" <?php echo $menu_pods->field('permalink') ?> "> <?php echo $menu_pods->field('title') ?> </a>
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

            <picture>
                <source srcset=" <?php echo $imgUrl ?>" type="image/webp">
                <img src=" <?php echo $fallbackUrl ?> " alt="">
            </picture>

            <?php } ?>


            <article>
                <?php echo $post->field('tekst') ?>
            </article>

        </section>
    </main>

<?php }

