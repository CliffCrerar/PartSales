/*------------------------*/
/*      CONTACT PAGE      */
/*------------------------*/

/* BOOSTRAP 4 */
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import 'bootstrap';
/* IMPORT CSS */
import './css/contactView.css';
$('#pageCont').append(require('./html/contactView.html'));

import ownerPic from './image/TQ-owner.png';
$('#ownerPic').attr('src', ownerPic);