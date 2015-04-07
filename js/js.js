var frontlayer = $('.frontlayer');
var bglayer = $('.bglayer');
var overlay = $('.overlay, .overlay h1');


// Move front layer a bit more than the bg layer.
frontlayer.animate({
    textIndent: 0
}, {
    step: function(now, fx) {
        overlay.mousemove(function(e) {
            var amountMovedX = (e.pageX * -1 / 6);
            var amountMovedY = (e.pageY * -1 / 25);
            frontlayer.css({
                '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
            });
        });
    },
    duration: 1000
}, 'easeOutCubic');


//bg animate layer a bit slower also seen on amountMovedX.

bglayer.animate({
    textIndent: 0
}, {
    step: function(now, fx) {
        overlay.mousemove(function(e) {
            var amountMovedX = (e.pageX * -1 / 12);
            var amountMovedY = (e.pageY * -1 / 25);
            bglayer.css({
                '-webkit-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                '-moz-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                '-ms-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                '-o-transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
            });
        });
    },
    duration: 5000
}, 'easeOutCubic');