<section class="content">
    <ul class="gitter_list">
        <?php
        $params = array(
            //order by date - asc
            'orderby' => 'post_date',
            //no max-limit (take all)
            'limit' => -1,
        );
        $pods = pods('fp_content', $params);

        while ($pods->fetch()) { 

            if ($pods->field('grafik')) { ?>

            <li class="graphic <?php echo $pods->field('farve') ?>">
                <div class="gitter">
                    <div class="row top">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div class="row">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div class="row">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div class="row">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div class="row bottom">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="graphic_fill"></div>
                <?php 
                if ($pods->field('farve') == "purple") {
                    get_template_part("/theme-parts/mailchimp");

                } else { 
                ?>
                
                <a href=" <?php echo $pods->field('link') ?> ">
                    <p><?php echo $pods->field('tekst') ?></p>
                </a>

                <?php } ?>
            </li>

            <?php } else { 

                // Settings for both img and fallback-img
                $image = $pods->field('billede');
                $fallback = $pods->field('billede_fallback');
                $size = ''; 
                $default = -1; 
                $force = false; 
                $imgUrl = pods_image_url($image, $size, $default, $force);
                $fallbackUrl = pods_image_url($fallback, $size, $default, $force);

                ?>
                
                <li class="image">
                <div class="gitter">
                    <div class="row top">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div class="row">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div class="row">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div class="row">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>

                    <div class="row bottom">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                    <a href=" <?php echo $pods->field('link') ?> ">

                        <picture data-image="<?php echo $imgUrl?>"  data-fallback="<?php echo $fallbackUrl ?>">
                            <source srcset="//:0" type="image/webp">
                            <img src="//:0" alt="" loading="lazy">
                        </picture>

                        <p><?php echo $pods->field('tekst') ?></p>
                    </a>
                </li>

            <?php } ?>
        <?php } ?>
    </ul>
</section>