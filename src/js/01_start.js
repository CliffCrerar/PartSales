//function that corrects dimensions for elements to fit accordingly
window.vph = window.innerHeight;
window.vphM = screen.availHeight;
window.vpw = screen.width;
//console.log("SCR_W: ", vph, "SCR_H: ", vpw);
let correctDimension = function(vph, vpw, vphM) {
    //Correction of image viewhight   
    //console.log('VPH:', vph, 'VPW:', vpw);
    $(document).ready(() => {
        var newHeight;
        //$('body').css('background-Size', vphM + 'px auto');
        if (vpw <= 414) {
            $('body').height('auto')
            var subract = $('#navTop').height();
            $('.c1.carousel-inner').css('border-radius', '100%');
            newHeight = (vphM * 0.80);
            $('.pageCont').css('height', '100%');
            $('#P-0').css('height', newHeight);
            $('#addsRailID').css('min-height', newHeight);
            $('.subRails').css('min-height', newHeight);
            $('.addContainer').css('height', newHeight / 3);
            $('.add').css('height', $('.addContainer').height());
            $('.addImg').css('height', $('.addContainer').height());
            $('.navbar-brand').css('width', '100%').addClass('text-center');
            $('#navBottom').remove();
        } else {
            $('body').css('height', vph);
            var navH = ($('#navTop').height());
            var navM = parseInt($('#navTop').css('margin-top'));
            newHeight = vph - navH - navM;
            //$('#P_0').css('height', newHeight);
            addHeight = $('.addsRail').height();
            $('.add').css('height', addHeight);
        }
    });
};
correctDimension(vph, vpw, vphM);
//console.log('VPH:', vph, 'VPW:', vpw);
$(document).ready(() => {
    $(window).resize(() => { correctDimension(window.vph, window.vpw); });
    //Load badge sources into images from badge object
    var badge = require('./05_badges.js');
    $.each(badge, (name, link) => {
        $('.makes>[alt="' + name + '"]').attr('src', link);
    });
    //adjust height for navbottom
        var navBottomHeight = $('#navBottom').height();
    if (vpw <= 414) {
        $('.navBadge').height(navBottomHeight - 5);
    } else {
        $('.navBadge').height(navBottomHeight);
    }
});
//console.log('01_start.loaded');