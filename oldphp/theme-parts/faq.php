<?php 
$params = array(
    //order by date - asc
    'orderby' => 'post_date',
    //no max-limit (take all)
    'limit' => -1,
);
$faq = pods('faq', $params);
?>

<section class="faq_container">
    <?php
    while ($faq->fetch()) {
        ?>
        <details>
            <summary><?php echo $faq->field('question') ?></summary>
            <p><?php echo $faq->field('answer') ?></p>
        </details>
        <?php
    }
    ?>
</section>