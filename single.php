<?php $pods_name = pods_v( 0, 'url'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="../../wp-content/themes/kursfestival/dist/css/app.css">
    <link rel="icon" href="../../wp-content/themes/kursfestival/imgs/ellipse_55.png" type="image/x-icon"/>
   <title><?php echo get_the_title(); ?></title>
</head>
<body>


<body class=" <?php echo $pods_name ?> ">

<?php
if ($pods_name == 'om-kurs') {
   get_template_part('/theme-parts/om-kurs');
} else if ($pods_name == 'program') {
   get_template_part('/theme-parts/program');
} else if ($pods_name == 'frivillighed') {
   get_template_part('/theme-parts/program');
} else if ($pods_name == 'faq') {
   get_template_part('/theme-parts/faq');
} else if ($pods_name == 'events') {
   get_template_part('/theme-parts/events');
} 
?>

</body>
</html>