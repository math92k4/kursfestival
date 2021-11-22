<header>
        <nav>
            <ul>
                <li><a href="front-page.php"><img id="logo" src="/wp-content/themes/kursfestival/imgs/temp_splash_logo.png" alt=""></a></li>
                <li id="menu_btn" >M≡NU</li>
            </ul>

            <?php 
            wp_nav_menu(
            array(
                'theme_location' => 'top-menu'
                )
            )
            ?>
        </nav>




    </header>