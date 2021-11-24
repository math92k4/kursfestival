<?php 
$params = array(
    'limit' => -1,
);

// image settings
$size = ''; 
$default = -1; 
$force = false; 
?>

<section class="skaber_container">
    <article class="kunst">
        <h2>Kunst</h2>
        <ul>
            <?php
            $pods = pods('program', $params);
            while ($pods->fetch()) {
                if($pods->field('program_type') == "kunst") {

                    $image = $pods->field('billede');
                    $fallback = $pods->field('billede_fallback');
                    $imgUrl = pods_image_url($image, $size, $default, $force);
                    $fallbackUrl = pods_image_url($fallback, $size, $default, $force);
                ?>

                <li>
                    <?php get_template_part('/theme-parts/small-gitter'); ?>
                    <a href="<?php echo $pods->field('permalink') ?>">
                        <picture>
                            <source srcset=" <?php echo $imgUrl ?>" type="image/webp">
                            <img src=" <?php echo $fallbackUrl ?> " alt="">
                        </picture>
                        <p><?php echo $pods->field('program_navn')?></p>
                    </a>
                </li>

                <?php
                }
            }
            ?>
        </ul>
    </article>

    <article class="musik">
        <h2>Musik</h2>
        <ul>
            <?php
            $pods = pods('program', $params);
            while ($pods->fetch()) {
                if($pods->field('program_type') == "musik") {

                    $image = $pods->field('billede');
                    $fallback = $pods->field('billede_fallback');
                    $imgUrl = pods_image_url($image, $size, $default, $force);
                    $fallbackUrl = pods_image_url($fallback, $size, $default, $force);
                ?>

                <li>
                <?php get_template_part('/theme-parts/small-gitter'); ?>
                    <a href="<?php echo $pods->field('permalink') ?>">
                        <picture>
                            <source srcset=" <?php echo $imgUrl ?>" type="image/webp">
                            <img src=" <?php echo $fallbackUrl ?> " alt="">
                        </picture>
                        <p><?php echo $pods->field('program_navn')?></p>
                    </a>
                </li>

                <?php
                }
            }
            ?>
        </ul>
    </article>

    <article class="talks">
        <h2>talks</h2>
        <ul>
            <?php
            $pods = pods('program', $params);
            while ($pods->fetch()) {
                if($pods->field('program_type') == "talk") {

                    $image = $pods->field('billede');
                    $fallback = $pods->field('billede_fallback');
                    $imgUrl = pods_image_url($image, $size, $default, $force);
                    $fallbackUrl = pods_image_url($fallback, $size, $default, $force);
                ?>

                <li>
                <?php get_template_part('/theme-parts/small-gitter'); ?>
                    <a href="<?php echo $pods->field('permalink') ?>">
                        <picture>
                            <source srcset=" <?php echo $imgUrl ?>" type="image/webp">
                            <img src=" <?php echo $fallbackUrl ?> " alt="">
                        </picture>
                        <p><?php echo $pods->field('program_navn')?></p>
                    </a>
                </li>

                <?php
                }
            }
            ?>
        </ul>
    </article>
</section>

