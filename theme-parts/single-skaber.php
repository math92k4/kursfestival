<div class="header_margin"></div>

<section class="sngl_wrapper">

    <?php 
    $params = array(
        'limit' => -1,
    );

    $pods = pods('program', $params);
    $id = get_the_id();

    $pods->fetch($id);

    $image = $pods->field('billede');
    $fallback = $pods->field('billede_fallback');
    $size = ''; 
    $default = -1; 
    $force = false; 
    $imgUrl = pods_image_url($image, $size, $default, $force);
    $fallbackUrl = pods_image_url($fallback, $size, $default, $force);
    
    ?>
    <div>
        <h1><?php echo $pods->field('program_navn') ?></h1>
        <p><?php echo $pods->field('beskrivelse')?></p>
    </div>

    <picture data-image="<?php echo $imgUrl?>"  data-fallback="<?php echo $fallbackUrl ?>">
        <source srcset="//:0" type="image/webp">
        <img src="//:0" alt="" loading="lazy">
     </picture>

</section>

