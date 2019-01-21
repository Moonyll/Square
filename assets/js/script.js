$(document).ready(function () {
    var maxw = $(document).width();
    var maxh = $(document).height();
        $('#text').keydown(function (event) {
        var L = $('#square').position().left;
        var H = $('#square').position().top;
        var key = event.which - 37;
        var mov = [{ left: '-=100' }, { top: '-=100' }, { left: '+=100' }, { top: '+=100' }];
            if (L < maxw && L>0)
            {
                if (H < maxh && H > 0)
                {
                $('#square').animate(mov[key]);
                }
                else
                {
                $('#square').animate(mov[key]).stop(true).css('top', '0');
                }
            }
            else
            {
            $('#square').animate(mov[key]).stop(true).css('left', '0');
            }
        });
});
