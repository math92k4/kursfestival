<?php 
$params = array(
    //order by date - asc
    'orderby' => 'post_date',
    //no max-limit (take all)
    'limit' => -1,
);
$events = pods('events', $params);
?>

<section class="events">

    <?php 
    while ($events->fetch()) {
    ?>

    <h1>her er et event</h1>

    <?php
    }
    ?>

</section>