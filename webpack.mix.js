// webpack.mix.js

let mix = require("laravel-mix");

mix.js("src/front.js", "js").js("src/page.js", "js").sass("src/app.scss", "css").setPublicPath("dist");
