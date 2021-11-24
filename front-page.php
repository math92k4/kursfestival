<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./wp-content/themes/kursfestival/dist/css/app.css">
    <link rel="icon" href="./wp-content/themes/kursfestival/imgs/ellipse_55.png" type="image/x-icon"/>
    <title>Kurs Festival</title>
</head>
<body class="front_page">
<?php get_template_part("/theme-parts/header") ?>
    <main>
        <section id="splash">
            <p class="date">20-23 AUGUST 2022 <span>UNGDOMSØEN</span></p>
            <div id="splash_logo">
                <img src="./wp-content/themes/kursfestival/imgs/logostroke.svg" alt="">
                <h1>KURS <span>FESTIVAL</span></h1>
            </div>
            
            <ul id="word_anim">
                <li>
                    <span>PERFOMATIVITET</span>
                    <span>DEMOKRATI</span>
                </li>
                <li>
                    <span>SCIENCE</span>
                    <span>KULTUR</span>
                </li>
                <li>
                    <span>NATUR</span>
                    <span>TECH</span>
                </li>
                <li>
                    <span>ORD</span>
                    <span>KØN</span>
                </li>
            </ul>

            <div id="ticket_cont">
                <button>KØB BILLET</button>
                <div class="circles">
                    <span data-delay="70" style="background-image: url('./wp-content/themes/kursfestival/imgs/circle.png');"></span>
                    <span data-delay="60" style="background-image: url('./wp-content/themes/kursfestival/imgs/circle.png');"></span>
                    <span data-delay="50" style="background-image: url('./wp-content/themes/kursfestival/imgs/circle.png');"></span>
                    <span data-delay="40" style="background-image: url('./wp-content/themes/kursfestival/imgs/circle.png');"></span>
                    <span data-delay="30" style="background-image: url('./wp-content/themes/kursfestival/imgs/circle.png');"></span>
                    <span data-delay="20" style="background-image: url('./wp-content/themes/kursfestival/imgs/circle.png');"></span>
                    <span data-delay="10" style="background-image: url('./wp-content/themes/kursfestival/imgs/circle.png');"></span>
                </div>
            </div>
        </section>
        
        <?php get_template_part("/theme-parts/fp-content") ?>
    </main>

    <?php get_template_part('/theme-parts/footer'); ?>
<script type="module" src="./wp-content/themes/kursfestival/dist/js/front.js"></script>
</body>
</html>