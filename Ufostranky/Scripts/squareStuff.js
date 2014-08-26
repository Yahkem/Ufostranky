$(document).ready(function () {

    // Game----------------------------------------------------------------------------------
    var getCoords,
        addClickable,
        removeClickable,
        changeEmpty,
        gameWon,
        animationSpeed = 300;

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
            document.getElementById('victorySound').play();
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

            
            t.animate(direction, animationSpeed, 'linear', function () {
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

    // Settings------------------------------------------------------------------------------------

    var rotating = false,
        animationPrefixes = ['-webkit-', '-moz-', '-o-', ''];

    $('#settingsWheel').on('click', function () {
        var t = $(this),
            settings = $('#settings'),
            speed = 500,
            border = '1px solid black';

        if (!rotating) {
            rotating = true;

            if (!t.hasClass('openedWheel')) {
                t.removeClass('closedWheel');
                t.addClass('openedWheel');
                settings.css({ border: 0, 'border-top': border });
                settings.animate({ width: 800 }, speed, 'linear', function () {
                    settings.css({ border: border });
                    settings.animate({ height: 130 }, speed, 'linear', function () {
                        $('.hideable').fadeIn(speed);
                        rotating = false;
                    });
                });
            } else {
                t.removeClass('openedWheel');
                t.addClass('closedWheel');
                $('.hideable').fadeOut(speed);
                settings.animate({ height: 40 }, speed, 'linear', function () {
                    settings.css({ border: 0, 'border-top': border });
                    settings.animate({ width: 0 }, speed, 'linear');

                    rotating = false;
                });
            }

        }
    });

    $('#speedInput').on('focusout', function () {
        var value = $(this).val();

        if (value == '' || value == null || value < 0) {
            alert('Zadej kladné číslo, nebo ti ukopnu hlavu!');
            $(this).focus();
        } else {
            animationSpeed = parseInt(value);
        }
    });

    $('#color').on('change', function () {
        var color = $(this).val(),
            result = '';

        if ($('#colorChange').length == 0) {
            $('<style id="colorChange"></style>').appendTo('body');
        }

        for (var i = 0; i < 4; ++i) {
            result += '@' + animationPrefixes[i] + 'keyframes clickableAnim { 50% { background-color: ' + color + '; box-shadow: 0 0 15px black;}}';
        }

        $('#colorChange').html(result)
    });
});