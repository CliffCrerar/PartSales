module.exports = function(event) {

    const filterByMake = require('./00_filteringPartsData');
    //$('#selectInd').html('MAKE: ' + event.target.id);
    $('#left').append(require('../html/partFilControls.html'));
    $('.defFilter').html('<div class="p2">' + event.target.id + '</div><div class="filterIcon ml-auto p-2 fa fa-filter"></div>');
    let parts = filterByMake(event);
    let categories = require('../json/categories.json');
    console.log(categories);
    let filterList = [];
    var evalElement = '';
    for (var key in parts) {
        //console.log(parts[key].cat);
        evalElement = parts[key].cat;
        if (!filterList.includes(evalElement)) {
            filterList.push(evalElement);
        }
    }
    //console.log(filterList);
    var arrLen = filterList.length;
    var btnCaption = '';
    for (var i = 0; i < arrLen; i++) {
        btnCaption = filterList[i];
        for (var key2 in categories) {
            if (btnCaption == key2) {
                btnCaption = categories[key2];
            }
        }
        $('#btnCont').append('<button id = "' + filterList[i] + '" type="button" class="btn btn-block btn-outline-success">' + btnCaption + '</button>');
    }

    return $('.defFilter').on('click', () => {
        //console.log('click');
        //console.log($('#filterOptions').hasClass('disp'));
        if ($('#filterOptions').hasClass('show')) {
            $('#filterOptions').slideUp('2000').removeClass('show');
        } else {
            $('#filterOptions').slideDown('2000').addClass('show');
        }
    });

};

/* FILTER EVENTS */