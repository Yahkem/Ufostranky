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
});