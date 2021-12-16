<?php $pods_name = pods_v( 0, 'url');
// "/kursfestival/" sub-directory fallback
if ($page_name == 'kursfestival') {
   $page_name = pods_v(1, 'url');
} else if ($page_name == 'kursfestival1') {
   $page_name = pods_v(1, 'url');
}

// Get SEO meta fields from page
$pageID = get_the_ID();
$metaDesc = get_post_meta( get_the_ID(), 'meta_tekst', true );
$metaKeywords = get_post_meta( get_the_ID(), 'meta_keywords', true );
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta name="description" content="<?php echo $metaDesc ?>">
   <meta name="keywords" content="<?php echo $metaKeywords ?>">
   <link rel="stylesheet" href="../../wp-content/themes/kursfestival/dist/css/app.css">
   <link rel="icon" href="../../wp-content/themes/kursfestival/imgs/fav.png" type="image/x-icon"/>
   <title><?php echo get_the_title(); ?></title>
</head>
<body class="single <?php echo $pods_name?> ">
<?php get_template_part("/theme-parts/mode-popup") ?>
<?php get_template_part("/theme-parts/header") ?>

<?php
// if, for alle pods
if ($pods_name == 'om-kurs') {
   get_template_part('/theme-parts/om-kurs');
} 
if ($pods_name == 'program') {
   get_template_part('/theme-parts/single-skaber');
}
?>

<?php get_template_part('/theme-parts/footer'); ?>
<script type="module" src="../../wp-content/themes/kursfestival/dist/js/page.js"></script>
</body>
</html>