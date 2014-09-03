$(document).ready(function () {

    // begin squareMenu
    var ufoShuffle,
        __slice = [].slice;

    ufoShuffle = function () {
        var arr, code, ends, item, iter, _i, _len,
            elId,
            objCSux;

        arr = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        code = '';
        ends = '';
        for (_i = 0, _len = arr.length; _i < _len; _i++) {
            item = arr[_i];

            elId = '\'#' + ("" + item[0] + '\'');
            objCSux = JSON.stringify(item[1]);
            code += '$(' + elId + ').animate(' + objCSux + ', 200, "linear", function(){'; // change
            ends += '});';
        }
        var result = code.replace('{"', '{').replace('":', ':') + ends;
        return eval(result);
    };

    $('#linkSq').mouseenter(function () {
         
        var a = '1.625em',
            s = '3.25em',
            d = '4.875em';

        $(this).siblings().resume();
        
        ufoShuffle(
            ['s1', { left: 0 }],
            ['s5', { top: 0 }],
            ['s6', { left: a }],
            ['s2', { top: a}],
            ['s3', { left: s }],
            ['s7', { top: 0 }],
            ['s11', { top: a }],
            ['s15', { top: s }],
            ['s14', { left: d }],
            ['s13', { left: s }],
            ['s12', { left: a }],
            ['s8', { top: d }],
            ['s9', { left: 0 }],
            ['s10', {left: a}],
            ['s15', {left: s}],
            ['s14', {top: s}]
        )
    }).mouseleave(function () { $(this).siblings().pause(); });
    // end squareMenu

    // begin Morse
    function getKeyByValue(obj, value) {
        for (var prop in obj) {
                if (obj[prop] === value)
                    return prop;
            }
    }

    var codes = {
        'A': '&middot;-', 'B': '-&middot;&middot;&middot;', 'C': '-&middot;-&middot;', 'D': '-&middot;&middot;', 'E': '&middot;',
        'F': '&middot;&middot;-&middot;', 'G': '--&middot;', 'H': '&middot;&middot;&middot;&middot;', 'I': '&middot;&middot;', 'J': '&middot;---',
        'K': '-&middot;-', 'L': '&middot;-&middot;&middot;', 'M': '--', 'N': '-&middot;', 'O': '---', 'P': '&middot;--&middot;', 'Q': '--&middot;-',
        'R': '&middot;-&middot;', 'S': '&middot;&middot;&middot;', 'T': '-', 'U': '&middot;&middot;-', 'V': '&middot;&middot;&middot;-', 'W': '&middot;--',
        'X': '-&middot;&middot;-', 'Y': '-&middot;--', 'Z': '--&middot;&middot;'
    };

    var on = false;

    $('#morseDiv').on('mouseenter', function () {
        on = true;
        setTimeout(function () {
            if (on) {
                var letter = $('#morse').text();
                $('#morse').html(codes[letter]);
            }
        }, 1000);
    });
    
    $('#morseDiv').on('mouseleave', function () {
        on = false;
        setTimeout(function () {
            if (!on) {
                var code = $('#morse').text().replace(/·/g, '&middot;');
                var position = getKeyByValue(codes, code).charCodeAt(0);
                position = (position == 90) ? 65 : ++position;
                $('#morse').text(String.fromCharCode(position));
            }
        }, 1000);
    });
    // end Morse
});