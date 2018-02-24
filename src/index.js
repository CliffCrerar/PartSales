/*------------------------*/
/*       HOME PAGE        */
/*----------------------- */

/* App root file */
// Lodash
import _ from 'lodash';

/* START CSS */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/landing.css';
import './css/font.css';
// Font Awesome
import 'font-awesome-webpack';
/* SLICK CAROUSEL API */
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick.js';
import '../node_modules/slick-carousel/slick/slick-theme.css';

/* GET PARTS DATA FROM WEB SERVER */
//import './js/00_getParts.js';

/*------------------------*/
/*  LOAD HOME PAGE HTML   */
/*----------------------- */

/* START */
import './css/bg.css'; // defin backgrouns
import './js/01_start.js'; // adjust user view

/* LOAD NAVIATION BAR  */
import './css/navT.css'; // CSS
import './js/02_navbar.js'; // JS
const loadNav = (screenw) => {
    if (screenw <= 414) {
        return require('./html/navBarTopM.html');
    } else {
        return require('./html/navBarTopD.html');
    }
};
$('body').append(loadNav(vpw));
$('body').append('<div id="pageCont" style="position:relative" class="pageCont"></div>')
$('#pageCont').append('<div id="P_0" class="lp"></div>');

/* IMPLEMENT NAV BAR OPERATION */
$('#navTop').on('click', (ev) => {
    console.log(ev);
    var navop = require('./js/02_navbar');
    console.log(navop);
    var navclick;
    if (vph <= 414) {
        navop.navBarOperationM(ev.currentTarget, ev.target);
    } else {
        navop.navBarOperationD(ev.currentTarget, ev.target);
    }
});

/* LOAD MAIN CAROUSEL  */
import './css/carousel.css'; // CSS
import './js/03_carousel.js'; // JS
const loadCarousel = function(screenw) {
    if (screenw >= 414) {
        return require('./html/carousel.html');
    }
};
$('#P_0').append(loadCarousel(vpw));

/* LOAD ADDS RAIL */
import './css/adds.css'; // CSS
import './js/04_adds.js'; // Load images and set carousel options
$('#P_0').append(require('./html/adds.html'));

/*  NAV BOTTOM  */
import './css/navB.css'; // CSS
$('body').append(require('./html/navBarBottom.html'));
if (vpw <= 414) { $('.social').remove(); }

/* LOAD LAODING SCREEN  */
window.onload = () => {
    setTimeout(() => {
        $('.se-pre-con').fadeOut();
    }, 2000);
};
console.log('Index.loaded');