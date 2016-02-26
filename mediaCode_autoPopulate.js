'use strict';

(function() {

    //  This function translates the selected Media Category dropdown to its short
    //  code equivalent e.g. ss, cm, cc, etc.
    function translateMediaCategoryId() {
        var translatedMediaCategoryId = '';
        var selectedMediaCategoryId = $('#field-category_id :selected').text();
        switch (selectedMediaCategoryId) {
            case 'Adult Sunday School':
                translatedMediaCategoryId = 'ss';
                break;
            case 'Church Meetings':
                translatedMediaCategoryId = 'cm';
                break;
            case 'College':
                translatedMediaCategoryId = 'cc';
                break;
            case 'Conferences':
                translatedMediaCategoryId = 'cf';
                break;
            case 'Foundations':
                translatedMediaCategoryId = 'fm';
                break;
            case 'Hearts of Hope':
                translatedMediaCategoryId = 'hh';
                break;
            case 'Men\'s Ministry':
                translatedMediaCategoryId = 'mm';
                break;
            case 'Mid-Week Bible Studies':
                translatedMediaCategoryId = 'mw';
                break;
            case 'Sermons':
                translatedMediaCategoryId = 'se';
                break;
            case 'Special Services':
                translatedMediaCategoryId = 'sp';
                break;
            case 'Women\'s Ministry':
                translatedMediaCategoryId = 'wm';
                break;
            case 'Workshops / Seminars':
                translatedMediaCategoryId = 'ws';
                break;
            case 'Youth':
                translatedMediaCategoryId = 'ym';
                break;

            default:
                break;
        }
        return translatedMediaCategoryId;
    }

    //  This function translates the selected Media Class dropdown to its short
    //  code equivalent e.g. ssgf, ss1s, etc.
    function translateMediaClassId() {
        var translatedMediaClassId = '';
        var selectedMediaClassId = $('#field-class_id :selected').text();

        switch (selectedMediaClassId) {
            case '1st Service':
                translatedMediaClassId = 'ss1s';
                break;
            case '2nd Service':
                translatedMediaClassId = 'ss2s';
                break;
            case 'Bereans Fellowship':
                translatedMediaClassId = 'ssbf';
                break;
            case 'Combined Classes':
                translatedMediaClassId = 'sscc';
                break;
            case 'Crosswords Fellowship':
                translatedMediaClassId = 'sscf';
                break;
            case 'Christian Counseling':
                translatedMediaClassId = 'ssco';
                break;
            case 'Generations Fellowship':
                translatedMediaClassId = 'ssgf';
                break;
            case 'Omega Fellowship':
                translatedMediaClassId = 'ssof';
                break;
            case 'Pilgrim\'s Fellowship':
                translatedMediaClassId = 'sspf';
                break;
            case 'Sojourners Fellowship':
                translatedMediaClassId = 'sssf';
                break;

            default:
                break;
        }
        return translatedMediaClassId;
    }

    //  This function updates the Media Code field with a new value, concatenated
    //  from Message Date, Message Time, Media Code and Sunday School Class
    function updateMediaCode() {
        var mediaDate = moment(new Date($('#field-media_date').val())).format('YYMMDD');
        mediaDate = (mediaDate === 'Invalid date') ? '' : mediaDate;
        var mediaTime = $('#field-media_time :selected').text().toLowerCase().charAt(0);
        var mediaCategory = translateMediaCategoryId();
        var mediaClass = translateMediaClassId();
        var updatedMediaCode = (mediaClass === '') ? mediaCategory + mediaDate + mediaTime : mediaClass + mediaDate + mediaTime;
        $('#field-media_code').val(updatedMediaCode);
    }

    //  Event binding to Message Date, Message Time, 
    //  Media Category and Sunday School Class fields.
    //  We will watch for any changes made to these fields
    //  and update the Media Code category
    $('#field-media_date').on('change', updateMediaCode);
    $('#field-media_time').on('change', updateMediaCode);
    $('#field-category_id').on('change', updateMediaCode);
    $('#field-class_id').on('change', updateMediaCode);

})();