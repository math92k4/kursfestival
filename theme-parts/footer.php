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
</footer>