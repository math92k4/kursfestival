<?php $pods_name = pods_v( 0, 'url'); ?>

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