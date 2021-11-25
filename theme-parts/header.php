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
                <li id="menu_btn" >MENU</li>
            </ul>
            <div class="header_clr"></div>
            <div class="menu_list">
                <?php get_template_part("/theme-parts/small-gitter") ?>
                <?php 
                wp_nav_menu(
                array(
                    'theme_location' => 'top-menu'
                    )
                )
                ?>
            </div>
            
        </nav>
        
    </header>