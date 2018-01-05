/* App root file */
console.log('Loading files');

$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">');
$('body').append('<div class="se-pre-con"></div>');

import _ from 'lodash';

//Load CSS
import './css/landing.css';
import './css/nav.css';
import './css/font.css';
import './css/carousel.css';
import './css/adds.css';
import './css/socialMake.css';
import './css/bg.css';

//Custom JS
import './js/landing.js';
import './js/nav.js';
import './js/dispTextLoader.js';
import './js/carousel.js';
import './js/adds.js';
import './js/socialMake.js';

//Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

//Font Awesome
import 'font-awesome-webpack';

//Slick.carousel
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick.js';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import { setTimeout } from 'timers';

//Load HTML into application
var navTop = require('./HTML/navBarTop.html');
var land = require('./HTML/landing.html');

//Insert landing page HTML
$('body').addClass('container-fluid');
$('body').append(navTop);
$('body').append(land);



//Finish Window loading
window.onload = () => {
    setTimeout(() => {
        $('.se-pre-con').fadeOut();
    }, 500);
};

console.log('Index.loaded');