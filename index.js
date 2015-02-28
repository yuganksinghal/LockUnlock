var rotation = 0;
var x = 0;
var y = 0;

var rotationanswer = 0;
var xanswer = 0;
var yanswer = 0;

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
        left: shift
    });
};

jQuery.fn.shifty = function (shift) {
    $(this).css({
        top: shift
    });
};

jQuery.fn.generateanswer = function () {
    rotationanswer = Math.floor((Math.random() * 180) - 89);
    xanswer = Math.floor((Math.random() * (Window.width() - 50)) + 1);
    yanswer = Math.floor((Math.random() * (Window.height() - 50)) + 1);
};

jQuery.fn.generatelock = function () {
    alert("called");
    rotation = Math.floor((Math.random() * 180) - 89);
    x = Math.floor((Math.random() * (Window.width() - 50)) + 1);
    y = Math.floor((Math.random() * (Window.height() - 50)) + 1);

    $('#lockslot').rotate(rotation);
    $('#lock').shiftx(x);
    $('#lock').shifty(y);
};

$(document).load(function () {
    $(this).generatelock();
});

$(document).keyup(function () {
    // alert(event.which);
    if ((event.which == 101) && (rotation <= 90)) {
        $('#lockslot').rotate(rotation++);
        console.log('E');
    } else if (event.which == 113 && (rotation >= -90)) {
        $('#lockslot').rotate(rotation--);
        console.log('Q');
    } else if (event.which == 119) {
        $('#lock').shifty(y--);
        console.log('W');
    } else if (event.which == 115) {
        $('#lock').shifty(y++);
        console.log('S');
    } else if (event.which == 97) {
        $('#lock').shiftx(x--);
        console.log('A');
    } else if (event.which == 100) {
        $('#lock').shiftx(x++);
        console.log('D');
    }
});