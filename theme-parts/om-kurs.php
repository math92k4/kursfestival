<body class="om_kurs">
    

<?php 
$params = array(
    'orderby' => 'post_date',
    'limit' => -1, 
);

echo get_the_title();

$menu_pods = pods('om_kurs', $params); ?>
<nav>
<ul>
<?php while ($menu_pods->fetch()) { ?>


<li >
    <a href=" <?php echo $menu_pods->field('permalink') ?> "> <?php echo $menu_pods->field('title') ?> </a>
</li>

<?php } ?>
</ul>
</nav> 

<?php
$id = get_the_ID();
$post = pods('om-kurs', $params);

?> 
</body>