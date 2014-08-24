$(document).ready(function () {

    // fns
    var getCoords,
        addClickable,
        removeClickable,
        changeEmpty,
        gameWon;

    var moving = false;

    getCoords = function (jQueryObject) {
        var coords = jQueryObject.attr('id').split("-");

        return [parseInt(coords[1]), parseInt(coords[2])];
    };

    addClickable = function() {
        var emptyCoords = getCoords($('.empty')),
            cls,
            fixedCoord;
        
        // nahore od stavajiciho
        if (emptyCoords[0] !== 1) {
            fixedCoord = emptyCoords[0] - 1;
            cls = ".f-" + fixedCoord + '-' + emptyCoords[1];
            $(cls).addClass('clickable').data({direction: 'down'});
        }
        // vlevo od stavajiciho
        if (emptyCoords[1] !== 1) {
            fixedCoord = emptyCoords[1] - 1;
            cls = ".f-" + emptyCoords[0] + '-' + fixedCoord;
            $(cls).addClass('clickable').data({ direction: 'right' });
        }
        // dole od stavajiciho
        if (emptyCoords[0] !== 4) {
            fixedCoord = emptyCoords[0] + 1;
            cls = ".f-" + fixedCoord + '-' + emptyCoords[1];
            $(cls).addClass('clickable').data({ direction: 'up' });
        }
        // vpravo od stavajiciho
        if (emptyCoords[1] !== 4) {
            fixedCoord = emptyCoords[1] + 1;
            cls = ".f-" + emptyCoords[0] + '-' + fixedCoord;
            $(cls).addClass('clickable').data({ direction: 'left' });
        }
    };

    removeClickable = function () {
        $('.clickable').removeClass('clickable');
    };

    changeEmpty = function (row, col) {
        $('.empty').removeClass('empty');
        var cellId = '#c-' + row + '-' + col;
        $(cellId).addClass('empty');
    };

    gameWon = function () {
        if (($('.f-1-1').text() == 1 && $('.f-1-2').text() == 2 && $('.f-1-3').text() == 3 && $('.f-1-4').text() == 4 &&
            $('.f-2-1').text() == 5 && $('.f-2-2').text() == 6 && $('.f-2-3').text() == 7 && $('.f-2-4').text() == 8 &&
            $('.f-3-1').text() == 9 && $('.f-3-2').text() == 10 && $('.f-3-3').text() == 11 && $('.f-3-4').text() == 12 &&
            $('.f-4-1').text() == 13 && $('.f-4-2').text() == 14 && $('.f-4-3').text() == 15)
            ||
            ($('.f-1-2').text() == 1 && $('.f-1-3').text() == 2 && $('.f-1-4').text() == 3 &&
            $('.f-2-1').text() == 4 && $('.f-2-2').text() == 5 && $('.f-2-3').text() == 6 && $('.f-2-4').text() == 7 &&
            $('.f-3-1').text() == 8 && $('.f-3-2').text() == 9 && $('.f-3-3').text() == 10 && $('.f-3-4').text() == 11 &&
            $('.f-4-1').text() == 12 && $('.f-4-2').text() == 13 && $('.f-4-3').text() == 14 && $('.f-4-4').text() == 15))
        {
            alert('Na co čumíš? To chceš čokoládu? Jdi radši zametat, odporný slizoune!');
        }
    };

    // main ufo
    $('#mainSquareShit').on('click', '.clickable', function () {
        if (!moving)
        {
            var t = $(this),
                data = t.data('field'),
                pos = data.split('-'),
                x,
                row,
                col,
                direction;

            moving = true;

            switch (t.data('direction')) {
                case 'up':
                    x = parseInt(t.css('top').replace('px', '')); 

                    row = parseInt(pos[1]) - 1;
                    col = pos[2];

                    direction = { 'top': x - 200 };
                    break;

                case 'right':
                    x = parseInt(t.css('left').replace('px', ''));

                    row = pos[1];
                    col = parseInt(pos[2]) + 1;

                    direction = { 'left': x + 200 };
                    break;

                case 'down':
                    x = parseInt(t.css('top').replace('px', ''));

                    row = parseInt(pos[1]) + 1;
                    col = pos[2];

                    direction = { 'top': x + 200 };
                    break;

                case 'left':
                    x = parseInt(t.css('left').replace('px', ''));

                    row = pos[1],
                    col = parseInt(pos[2]) - 1;

                    direction = { 'left': x - 200 };
                    break;
            }

            
            t.animate(direction, 250, 'linear', function () {
                var dataClass = 'f-' + row.toString() + '-' + col.toString();
                t.removeClass(data);
                t.addClass(dataClass);
                t.data({ field: dataClass });
                removeClickable();
                changeEmpty(pos[1], pos[2]);
                addClickable();
                moving = false;
                gameWon();
            });
        }
    });

    addClickable();
});