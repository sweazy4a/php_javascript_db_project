// webpack.mix.js

let mix = require('laravel-mix');

mix.js('assets/js/main.js', 'dist').setPublicPath('dist');
mix.sass('assets/scss/main.scss', 'dist')
