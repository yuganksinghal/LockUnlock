    var rotation = 0;
    var x= 0;
    var y= 0;

    var rotationanswer = 0;
    var xanswer = 0;
    var yanswer = 0;

    var r = 0;
    var g = 0;
    var b = 0;

    var totalcolumns = 0;
    var totalrows = 0;



jQuery.fn.rotate = function (degrees) {
    $(this).css({
        'transform': 'rotate(' + degrees + 'deg)',
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-o-transform': 'rotate(' + degrees + 'deg)'
    });
};

jQuery.fn.shiftx = function (shift) {
    $(this).css({
        left: shift * 50
    });
};

jQuery.fn.shifty = function (shift) {
    $(this).css({
        top: shift * 50
    });
};

jQuery.fn.generateanswer = function () {
    rotationanswer = Math.floor((Math.random() * 180) - 89);
    xanswer = Math.floor(Math.random() * totalcolumns);
    yanswer = Math.floor(Math.random() * totalrows);
};

jQuery.fn.finddifference = function() {
    r = 255 - Math.abs(50*(x-xanswer));
    g = 255 - Math.abs(50*(y-yanswer));
    b = 255 - Math.abs((rotation-rotationanswer));
    $('.changeable').changecolor();
};

jQuery.fn.generatelock = function () {
    rotation = Math.floor((Math.random() * 180) - 89);
    x = Math.floor(Math.random() * totalcolumns);
    y = Math.floor(Math.random() * totalrows);

    $('#lockslot').rotate(rotation);
    $('#lock').shiftx(x);
    $('#lock').shifty(y);
    $('.changeable').finddifference();
};

jQuery.fn.changecolor = function() {
    $(this).css({'border-color': 'rgb('+ r + ',' + g + ',' + b + ')'});
};

$(document).ready(function () {

    totalcolumns = Math.floor($(window).width()/50);
    totalrows = Math.floor($(window).height()/50);

    $(this).generateanswer();
    $(this).generatelock();
});

$(document).keypress(function () {
    if ((event.which == 101) && (rotation <= 90)) {             
        $('#lockslot').rotate(rotation++);
        console.log('E');
    } else if ((event.which == 113) && (rotation >= -90)) {
        $('#lockslot').rotate(rotation--);
        console.log('Q');
    } else if ((event.which == 119) && ((y) >= 0)) {
        $('#lock').shifty(y--);
        console.log('W');
    } else if ((event.which == 115) && ((y) <= totalrows)) {
        $('#lock').shifty(y++);
        console.log('S');
    } else if (event.which == 97 && ((x) >= 0)) {
        $('#lock').shiftx(x--);
        console.log('A');
    } else if (event.which == 100 && ((x) <= totalcolumns)) {
        $('#lock').shiftx(x++);
        console.log('D');
    }
    $('.changeable').finddifference();
});
