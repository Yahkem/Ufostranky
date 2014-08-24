$(document).ready(function () {
    $('.hidingArrow').click(function () {
        var t = $(this);
        var arrow;

        t.siblings('.hide').slideToggle();
        
        arrow = (t.text() == '▲') ? '▼' : '▲';
        t.text(arrow);
    });
});