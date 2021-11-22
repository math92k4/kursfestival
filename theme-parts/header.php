<header>
        <nav>
            <ul>
                <li>
                    <?php 
                    wp_nav_menu(
                    array(
                        'theme_location' => 'logo'
                        )
                    )
                    ?>
                </li>
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