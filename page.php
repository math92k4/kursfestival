<!-- Get page name width fallback for subfolder wp-setup -->
<?php 
$page_name = pods_v(0, 'url');

if ($page_name == 'kursfestival') {
    $page_name = pods_v(1, 'url');
}

// Get SEO meta fields from page
$pageID = get_the_ID();
$metaDesc = get_post_meta( $pageID, 'meta_tekst', true );
$metaKeywords = get_post_meta( $pageID, 'meta_keywords', true );

// Is media fields set?
$imagetSet = "false";
$videoSet = false;

// urls default to null
$imgUrl = null;
$fallbackUrl = null;
$videUrl = null;

if (get_post_meta( $pageID, 'billede', true )) {
    // Pods media settings
    $size = ''; 
    $default = -1; 
    $force = false; 

    // Get image urls and imageSet = true
    $image = get_post_meta( $pageID, 'billede', true );
    $fallback = get_post_meta( $pageID, 'billede_fallback', true );
    $imgUrl = pods_image_url($image, $size, $default, $force);
    $fallbackUrl = pods_image_url($fallback, $size, $default, $force);
    $imagetSet = true;

    // Get video urls and videoSet = true
    if (get_post_meta( $pageID, 'video', true )) {
        $video = get_post_meta( $pageID, 'video', true );
        $videUrl = pods_image_url($video, $size, $default, $force);
        $videoSet = true;
    }
}

?>
<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo $metaDesc ?>">
    <meta name="keywords" content="<?php echo $metaKeywords ?>">
    <link rel="stylesheet" href="../../wp-content/themes/kursfestival/dist/css/app.css">
    <link rel="icon" href="../../wp-content/themes/kursfestival/imgs/ellipse_55.png" type="image/x-icon"/>
    <title><?php echo get_the_title(); ?></title>
</head>
<body class="page <?php echo $page_name; ?>">
<?php get_template_part("/theme-parts/mode-popup") ?>
<!-- Load header -->
<?php get_template_part("/theme-parts/header") ?>

<div class="header_margin"></div>
    <section>
        <h1><?php echo get_the_title(); ?></h1>
        <div class="page_content">
            <?php echo the_content(); ?>

            <?php if ($videoSet) {
            ?>
                <video data-image="<?php echo $fallbackUrl ?>" data-vsrc="<?php echo $videUrl ?>" src=""></video>
                
            <?php
            } else if ($imagetSet) { ?>

                <picture data-image="<?php echo $imgUrl?>"  data-fallback="<?php echo $fallbackUrl ?>">
                    <source srcset="//:0" type="image/webp">
                    <img src="//:0" alt="" loading="lazy">
                </picture>

            <?php } ?>
        </div>
    </section>
   

    <!-- Get pods content, sorted by page title -->
    <?php 
    if ($page_name == 'program') {
        get_template_part('/theme-parts/program');
    } if ($page_name == 'frivillig') {
        get_template_part('/theme-parts/frivillig');
    } if ($page_name == 'faq'){
        get_template_part('/theme-parts/faq');
    } if ($page_name == 'events') {
        get_template_part('theme-parts/events');
    } if ($page_name == 'skabere') {
        get_template_part("/theme-parts/skabere");
    }
    ?>
    
    <?php get_template_part('/theme-parts/footer'); ?>
    <script type="module" src="../../wp-content/themes/kursfestival/dist/js/page.js"></script>
</body>
</html>