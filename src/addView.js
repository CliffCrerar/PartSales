/*------------------------*/
/*  PARTS CATELOGUE PAGE  */
/*------------------------*/

/* IMPORT CSS */
import './css/partsViewFP.css';
import './css/partsView.css';
import './css/mod_requestQuote.css';
/* BOOSTRAP 4 */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
/* FONT AWESOME FOR WEB PACK */
import '../node_modules/font-awesome/css/font-awesome.css';

/* IMPORT LOGO */
import tqLogo from './image/tglogo.png';

const loadPartsListD = require('./js/06_pvMainLoad_D');
const loadPartListM = require('./js/07_pvMainLoad_M');
const loadButtonsD = require('./js/08_pvMainFilter_D');
const loadButtonsM = require('./js/09_pvMainFilter_M');
const sortFilter = require('./js/00_elFilSort');
const psExpander = require('./js/10_plClick');

$('.addTitle').on('click', (ev) => {
    $('#N-0').removeClass('active');
    //console.log(ev.currentTarget.id);

    let selectedClass = ev.currentTarget.id.split('-')[1]; // get selected class from clicked link
    //console.log(selectedClass);
    $('#P-1').show();
    $('#P-0').hide();
    $('#partsViewFP').hide();

    if (vpw > 414) {
        /* BEGINNING OF PARTS LOADING FOR DESKTOP */
        $('#partsViewContainer').fadeIn('slow').css('height', $('#pageCont').height());

        Promise.resolve(loadPartsListD(ev, 'cat'))
            .then(() => {
                sortFilter.sortItems($('#accordion'));
                $('.partListing').on('click', (ev) => {
                    //console.log(ev.currentTarget.id);
                    Promise.resolve(psExpander.loadCollapsed(ev.currentTarget.id))
                        .then(() => {

                            $('.like').on('click', (event) => {
                                //console.log('like');
                                psExpander.clickLike(event);
                            });
                            $('.quote').on('click', (event) => {
                                //console.log('Quote');
                                psExpander.clickQuote(event);
                            });
                        });
                    //console.log($(ev.target).attr('data-target'));
                    var collapseTarget = $(ev.currentTarget).attr('data-target');
                    //console.log($(collapseTarget).hasClass('show'));
                    if ($(collapseTarget).hasClass('show')) {
                        $(collapseTarget).collapse('hide');
                        $('#' + ev.currentTarget.id).find('.colapseInd').removeClass('fa-minus').addClass('fa-plus');
                    } else {
                        $(collapseTarget).collapse('show');
                        $('#' + ev.currentTarget.id).find('.colapseInd').removeClass('fa-plus').addClass('fa-minus');
                    }
                });
            });
        Promise.resolve(loadButtonsD(ev, 'make'))
            .then(() => {
                sortFilter.sortItems($('#btnCont'));

                $('#backBtn').on('click', () => {
                    $('#accordion').empty();
                    $('#left').empty();
                    $('#partsViewContainer').css('display', 'none');
                    $('#P-0').fadeIn();
                    $('#N-0').addClass('active');
                });
                $('#btnCont').on('click', (ev) => {
                    //console.log(ev.target.id)
                    var filtCriteria = ev.target.id;
                    //console.log(ev.currentTarget);
                    $(ev.currentTarget).children().each(function(i, el) {
                        $(el).removeClass('active');
                    });
                    $(ev.currentTarget).addClass('active');
                    //console.log(filtCriteria);
                    sortFilter.filterMake(filtCriteria, $('#accordion'));
                });
            });
        /* END OF PARTS LOADING FOR DESKTOP */
    } else {
        /* BEGINNING OF PARTS LOADING FOR MOBILE */
        //$('#partsViewContainerM').remove();
        $('#P-1').append('<div id="partsViewContainerM" class="pvContainer"></div>');
        //$('#partsViewFP').fadeOut();
        $('#partsViewContainerM').fadeIn();
        Promise.resolve(loadPartListM(ev, 'cat'))
            .then(() => {
                //console.log('MOB PARTLIST Promise resolved');
                sortFilter.sortItems($('#partsViewContainerM'));
                $('.quoteM').on('click', (event) => {
                    //console.log('Quote');
                    psExpander.clickQuote(event);
                    $('.sendQuoteRequest').on('click', (ev) => {
                        //console.log('send modal click');
                        require('./js/10.1_modalAction')(ev);
                    });
                });
            });
        Promise.resolve(loadButtonsM(ev, 'make'))
            .then(() => {
                //console.log('MOB Promise resolved');
                sortFilter.sortItems($('#filtContListM'));
                $('#filtContListM').on('click', (ev) => {
                    var filtCriteria = ev.target.id;
                    //console.log(filtCriteria);
                    //partsViewContainerM
                    sortFilter.filterMake(filtCriteria, $('#partsViewContainerM'));
                });
            });
        /* END OF PARTS LOADING FOR MOBILE */
    }
});

if (vpw <= 414) {
    var tqLogoHtml = '<div class="card tqLogoDiv">' +
        '<div class="tqTitleLogoImg">' +
        '<h1 class="mobileTitle text-center">Top Quality</h1>' +
        '<img id="tqLogoImg" class="tqLogoImg">' +
        '</div>' +
        '</div>';
    $(tqLogoHtml).insertBefore('#pageCont');
    $('#tqLogoImg').attr('src', tqLogo);
}