<!-- Get page name width fallback for subfolder wp-setup -->
<?php 
$page_name = pods_v(0, 'url');

if ($page_name == 'kursfestival') {
    $page_name = pods_v(1, 'url');
}
?>
<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../wp-content/themes/kursfestival/dist/css/app.css">
    <link rel="icon" href="../../wp-content/themes/kursfestival/imgs/ellipse_55.png" type="image/x-icon"/>
    <title><?php echo get_the_title(); ?></title>
</head>
<body class="page <?php echo $page_name; ?>">

<!-- Load header -->
<?php get_template_part("/theme-parts/header") ?>

<div class="header_margin"></div>
    <section>
        <h1><?php echo get_the_title(); ?></h1>
        <div>
            <?php echo the_content(); ?>
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