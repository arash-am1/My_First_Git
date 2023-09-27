var i = 0;

function demo() {


    if (i < 50) {
        i++;
        $('.percentage-bar').text(i + '%');
        $('.progress-bar').css('width', i + '%');
        setTimeout('demo()', 50);
    }


}

demo();