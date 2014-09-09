$(document).ready(function () {

    function getKeyByValue(obj, value) {    
        if (value == '')
            return ' ';
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (obj[prop] === value)
                    return prop;
            }
        }
    }

    // zmen barvu textarea ktera je zrovna readonly
    function setReadOnlyBackground () {
        var morseInput = $('#morseInput');
        var color = 'lightgrey';

        if (morseInput.prop('readonly')) {
            morseInput.css({ 'background-color': color, 'color': 'blue' });
            $('#textInput').css({ 'background-color': 'initial', 'color': 'initial' });
        } else {
            morseInput.css({ 'background-color': 'initial', 'color': 'initial' });
            $('#textInput').css({ 'background-color': color, 'color': 'red' });
        }
    }

    setReadOnlyBackground();

    var codes = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
        ' ': '/', '\n': '\n'
    };

    // TEXT
    $('#content').on('keyup', '#textInput', function () {
        if (!$(this).prop('readonly')) {
            var txt = $(this).val(),
                result = '';

            for (var i = 0; i < txt.length; ++i) {
                if (txt[i] == '\n') {
                    result += '\n';
                } else {
                    var letter = codes[txt[i].toUpperCase()];
                    result += (typeof letter === "undefined") ? '[?]' : (letter == '/')? letter : letter + '/';
                }
            }

            $('#morseInput').val(result);
        }
    });
    
    // MORSE
    $('#content').on('keyup', '#morseInput', function () {
        if (!$(this).prop('readonly')) {
            var morseTxt = $(this).val(),
                words = morseTxt.replace(/\n/g, ' \n ').split('/'),
                result = '';

            //  if kvuli jebani placeholderu pri vymazani
            if (!(words.length === 1 && words[0] == '')) {
                for (var i = 0; i < words.length; ++i) {
                    var key;

                    key = getKeyByValue(codes, words[i]);
                    result += (typeof key == "undefined") ? '[?]' : key;
                }    
            }

            $('#textInput').val(result);
        }
    });

    function switchAreas (before, after, ref) {
        before.insertBefore(ref);
        before.prop('readonly', false);
        after.insertAfter(ref);
        after.prop('readonly', true);
    }

    $('#changeInputs').on('click', function () {
        var m = $('#morseInput').detach(),
            t = $('#textInput').detach(),
            ths = $(this);

        if (ths.val() === "toM") {
            ths.val("toT");
            ths.text('..-. => F');
            $('#changeInputs').css({
                'border': '1px solid red',
                'box-shadow': '0 0 5px red'
            });

            switchAreas(m, t, ths);
        } else {
            ths.val("toM");
            ths.text('F => ..-.');
            $('#changeInputs').css({
                'border': '1px solid blue',
                'box-shadow': '0 0 5px blue'
            });

            switchAreas(t, m, ths);
        }

        setReadOnlyBackground();
    });
});
