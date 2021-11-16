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
<body>
    <header>
        <nav>
            <ul>
                <li><a href="front-page.php"><img id="logo" src="./wp-content/themes/kursfestival/imgs/temp_splash_logo.png" alt=""></a></li>
                <li>20-23 AUGUST 2022 <span>UNGDOMSØEN</span></li>
                <li id="menu_btn" >M≡NU</li>
            </ul>
            <!-- <ul id="menu">
                <li>
                    <a href="">PAGE1</a>
                </li>
                <li>
                    <a href="">PAGE2</a>
                </li>
                <li>
                    <a href="">PAGE3</a>
                </li>
                <li>
                    <a href="">PAGE4</a>
                </li>
                <li>
                    <a href="">PAGE5</a>
                </li>
                <li>
                    <a href="">PAGE6</a>
                </li>
            </ul> -->
        </nav>
    </header>
    <main>
<section id="splash">
    <div id="splash_logo">
        <img src="./wp-content/themes/kursfestival/imgs/temp_splash_logo.png" alt="">
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
        <button>BILLETTER</button>
        <div class="circles">
          <span data-delay="70"></span>
          <span data-delay="60"></span>
          <span data-delay="50"></span>
          <span data-delay="40"></span>
          <span data-delay="30"></span>
          <span data-delay="20"></span>
          <span data-delay="10"></span>
        </div>
      </div>
</section>

<div id="content"></div>
</main>

<script type="module" src="./wp-content/themes/kursfestival/dist/js/front.js"></script>
</body>
</html>