<footer>
    <div class="footer_gitter">
        
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