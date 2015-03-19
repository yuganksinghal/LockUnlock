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

    var xconst = 0;
    var yconst = 0;

    var score = 0;

    jQuery.fn.rotate = function (degrees) {
        $(this).css({
            'transform': 'rotate(' + (3 * degrees) + 'deg)',
            '-webkit-transform': 'rotate(' + (3 * degrees) + 'deg)',
            '-moz-transform': 'rotate(' + (3 * degrees) + 'deg)',
            '-o-transform': 'rotate(' + (3 * degrees) + 'deg)'
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
        rotationanswer = Math.floor((Math.random() * 60) - 30);
        xanswer = Math.floor(Math.random() * totalcolumns);
        yanswer = Math.floor(Math.random() * totalrows);
    };

    jQuery.fn.finddifference = function() {
        r = 255 - Math.abs(xconst*(x-xanswer));
        g = 255 - Math.abs(yconst*(y-yanswer));
        b = 255 - Math.abs(Math.floor((255/60)) * (rotation-rotationanswer));
        $('.changeable').changecolor();
    };

    jQuery.fn.generatelock = function () {
        rotation = Math.floor((Math.random() * 60) - 30);
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

        totalcolumns = (Math.floor($(window).width()/50) - 1);
        totalrows = (Math.floor($(window).height()/50) - 1);
        xconst = (Math.floor(255 / totalcolumns));
        yconst = (Math.floor(255/ totalrows));
        score = 0;

        $('#start').click(function () {

            console.log('click');
            $(document).generateanswer();
            $(document).generatelock();
            $('.startup').hide('fast');
            $('.changeable').show('fast');
        });
});

        $(document).keypress(function (event) {
            if ((event.which == 101) && (rotation <= 30)) {             
                $('#lockslot').rotate(++rotation);
                console.log('E');
            } else if ((event.which == 113) && (rotation >= -30)) {
                $('#lockslot').rotate(--rotation);
                console.log('Q');
            } else if ((event.which == 119) && ((y-1) >= 0)) {
                $('#lock').shifty(--y);
                console.log('W');
            } else if ((event.which == 115) && ((y+1) <= totalrows)) {
                $('#lock').shifty(++y);
                console.log('S');
            } else if (event.which == 97 && ((x-1) >= 0)) {
                $('#lock').shiftx(--x);
                console.log('A');
            } else if (event.which == 100 && ((x+1) <= totalcolumns)) {
                $('#lock').shiftx(++x);
                console.log('D');
            } /*else if (event.which == )*/
            $('.changeable').finddifference();

            if ((Math.abs(x-xanswer) == 0) && (Math.abs(y-yanswer) == 0) && (Math.abs(rotation-rotationanswer) <= 10)) {
                ++score;
                $('#score').html(score);
                $(document).generateanswer();
                $(document).generatelock();
            }
        });
