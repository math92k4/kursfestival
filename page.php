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
<body class="page">
<?php get_template_part("/theme-parts/header") ?>
    <section>
        <h1><?php echo get_the_title(); ?></h1>
        <div>
            <?php echo the_content(); ?>
        </div>
    </section>

    <?php 
    if ($page_name == 'program') {
        get_template_part('/theme-parts/program');
    }
    ?>

    <script type="module" src="/wp-content/themes/kursfestival/dist/js/page.js"></script>
</body>
</html>