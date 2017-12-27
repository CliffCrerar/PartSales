/* The function below created the part descriptions using the data from the parts files
    It is called for each file that must be loaded and handles one part at at time.*/

var displayParts = function(partsObject, divId, badgeType) {
    //Variables used in the operation of this function
    var partsData = partsObject;
    var objLen = partsData.length;
    var modelCount = '';
    var badgeUrl;
    var badgeSwitch = false;
    var partPriceUF = 0;
    var partPrice = 0;
    var partNum = '';
    var partIdentifier = '';

    //Assignes the badge image URL to appropriate variables depending
    switch (badgeType) {
        case 'bmw':
            badgeUrl = '/css/images/badge_BMW.png';
            break;
        case 'ktm':
            badgeUrl = '/css/images/badge_KTM.png';
            break;
        case 'LandRover':
            badgeUrl = '/css/images/badge_LR.png';
            break;
        case 'HND':
            badgeUrl = '/css/images/badge_HND.png';
            break;
        case 'AT':
            badgeUrl = '/css/images/badge_TA.png';
            break;
        case 'TRI':
            badgeUrl = '/css/images/badge_TR.png';
            break;
        default:
            badgeUrl = '/css/images/badge_DEF.jpeg';
            badgeSwitch = true;
            break;
    }

    for (i = 0; i < objLen; i++) {
        partNum = partsData[i].partNum;
        partIdentifier = partCategory(partNum, partsData[i].cat) + '_' + partNum;
        if (badgeSwitch) {
            switch (partsData[i].make) {
                case 'BMW':
                    badgeUrl = '/css/images/badge_BMW.png';
                    break;
                case 'KTM':
                    badgeUrl = '/css/images/badge_KTM.png';
                    break;
                case 'YAM':
                    badgeUrl = '/css/images/badge_YAM.png';
                    break;
                case 'HND':
                    badgeUrl = '/css/images/badge_HND.png';
                    break;
                default:
                    badgeUrl = '/css/images/badge_HND.png';
                    break;
            }
        }

        //format guarantee
        grnt(partsData[i].grnt);

        //format installation time display
        installTime(partsData[i].instTime);
        partPriceUF = Math.ceil(partsData[i].price * (1 - 0.09) / 10) * 10;
        partPrice = new Intl.NumberFormat('en-ZA').format(partPriceUF);

        $('#' + divId).append('<div class="well" id="' + partIdentifier + '"></div>');

        $('#' + partIdentifier).append('<div class="partNameDiv"></div>');
        $('#' + partIdentifier).append('<div class="row"></div>');
        $('#' + partIdentifier + '>.partNameDiv').append('<img class="menuBadge" src="' + badgeUrl + '" alt="badge">');
        $('#' + partIdentifier + '>.partNameDiv').append('<span class="partName">' + partsData[i].partName + '</span>');

        $('#' + partIdentifier + '>.row').append('<div class="col-sm-9"></div>', '<div class="col-sm-3"></div>');

        $('#' + partIdentifier + '>.row>.col-sm-9').append(
            '<blockquote><p>' + partsData[i].partDesc + '</p></blockquote>',
            '<div class="row">' +
            '<div class="col-sm-5" id="' +
            partIdentifier +
            'Models"></div>' +
            '<div class="col-sm-7" id="' +
            partIdentifier +
            'Meta"></div>' +
            '</div>'
        );

        $('#' + partIdentifier + 'Models').append('<h4>Fits:</h4>');
        modelCount = partsData[i].models.length;
        for (l = 0; l < modelCount; l++) {
            $('#' + partIdentifier + 'Models').append('<li>' + partsData[i].models[l] + '</li>');
        }

        $('#' + partIdentifier + 'Meta').append(
            '<div class="table">' +
            '<table>' +
            '<tr>' +
            '<td class="dataType">Price:</td>' +
            '<td> R ' +
            partPrice +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="dataType">Guarantee:</td>' +
            '<td>' +
            grnt() +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="dataType">Installation Time:</td>' +
            '<td>' +
            installTime() +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="dataType">Part Number:</td>' +
            '<td>' +
            partIdentifier +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>'
        );

        $('#' + partIdentifier + '>.row>.col-sm-3').append(
            '<img class="imgCont partImage img-responsive" src="' + partsData[i].imgLink + '">'
        );
    }
};

//Minor Functions used in main function

//format guarantee
function grnt(grnt) {
    if (grnt == '0') {
        return 'Not Guaranteed';
    } else {
        return grnt;
    }
}
//Check part category
function partCategory(partnum, partCat) {
    partnum = '';
    if (partCat == null) {
        return (partnum = 'NO-CATEGORY');
    } else {
        return (partnum = partCat);
    }
}
//format installation time display
function installTime(instTime) {
    if (instTime == 0) {
        return 'Not Required';
    } else if (instTime >= 60) {
        return instTime / 60 + ' Hour(s)';
    } else {
        return instTime + ' Minutes';
    }
}