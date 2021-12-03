<footer>
    <div class="footer_wrapper">
        <div>
            <p>SOME</p>
            <ul>
                <li><a href="https://www.facebook.com/kursfestivall">FACEBOOK</a></li>
                <li><a href="https://www.instagram.com/kursfestival/">INSTAGRAM</a></li>
                <li><a href="https://www.linkedin.com/company/kurs-festival/">LINKED-IN</a></li>
            </ul>
        </div>


        <div id="kontakt">
            <p>KONTAKT</p>
            <?php   
            wp_nav_menu(
                array(
                    'theme_location' => 'kontakt'
                    )
                );
            ?>
        </div>

        <div>
            <p>PRAKTISK</p>
            <?php
            wp_nav_menu(
                array(
                    'theme_location' => 'praktisk'
                    )
                );
            ?>
        </div>

        <div>
            <p>OM KURS</p>
            <?php
            wp_nav_menu(
                array(
                    'theme_location' => 'om'
                    )
                );
            ?>
        </div>
    </div>

    <ul class="partnere_wrapper">
        <?php 
        $params = array(
            'limit' => -1,
        );

        $pods = pods('partnere', $params);

        // image settings
        $size = ''; 
        $default = -1; 
        $force = false; 

        while ($pods->fetch()) {

            $image = $pods->field('billede');
            $fallback = $pods->field('billede_fallback');
            $imgUrl = pods_image_url($image, $size, $default, $force);
            $fallbackUrl = pods_image_url($fallback, $size, $default, $force);
            ?>

        <li>
            <a target="_blank" href="<?php echo $pods->field('link') ?>">

                <picture data-image="<?php echo $imgUrl?>"  data-fallback="<?php echo $fallbackUrl ?>">
                    <source srcset="//:0" type="image/webp">
                    <img src="//:0" alt="" loading="lazy">
                </picture>

            </a>
        </li>

        <?php
        }
        ?>
    </ul>
</footer>