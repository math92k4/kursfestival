<footer>
    <div class="footer_gitter">
        <?php 
        get_template_part('/theme-parts/small-gitter');
        get_template_part('/theme-parts/small-gitter');
        get_template_part('/theme-parts/small-gitter');
        ?>
        
        <div class="footer_wrapper">

            <div>
                <p>SOME</p>
                <ul>
                    <li><a href=""></a>FACEBOOK</li>
                    <li><a href=""></a>INSTAGRAM</li>
                    <li><a href=""></a>LINKED-IN</li>
                </ul>
            </div>



            <div>
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
    </div>
</footer>