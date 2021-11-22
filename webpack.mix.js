// webpack.mix.js

let mix = require("laravel-mix");

mix.js("src/front.js", "js").js("src/page.js", "js").setPublicPath("dist");

mix.sass("src/app.scss", "dist/css", {
  processUrls: false,
});
