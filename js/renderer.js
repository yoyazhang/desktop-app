let child = $('div.goose:first');

function dragPicture() {
    let disX;
    let disY;
    child.on('mousedown', event => {
        child.stop(true);
        let imgTop = parseFloat(child.css('top'));
        let imgLeft = parseFloat(child.css('left'));
        let lastPointX = event.clientX;
        let lastPointY = event.clientY;
        $(document).on('mousemove', e => {
            e.preventDefault();
            let changeX = e.clientX - lastPointX;
            let changeY = e.clientY - lastPointY;
            disX = imgLeft + changeX;
            disY = imgTop + changeY;
            child.css({
                left: disX + "px",
                top: disY + "px"
            });
        })
    });

    $(document).on('mouseup', () => {
        $(document).off('mousemove');
        let disLeft = Math.random() * $(window).width();
        let disTop = Math.random() * $(window).height();
        while (Math.abs(disLeft-disX) < 400){
            disLeft = Math.random() * $(window).width();
        }
        if (disLeft < disX)
            child.attr("id", "right");
        else
            child.attr("id","left");

        child.animate({
            left: disLeft + 'px',
            top:  disTop + 'px'
        },30000);
    })
}


$(document).ready(function () {
    dragPicture();
    setInterval(function () {
        child.stop(true);
        let disLeft = Math.random() * $(window).width();
        let disTop = Math.random() * $(window).height();
        let imgLeft = parseFloat(child.css('left'));
        while (Math.abs(disLeft-imgLeft) < 400){
            disLeft = Math.random() * $(window).width();
        }
        if (disLeft < imgLeft)
            child.attr("id", "right");
        else
            child.attr("id","left");
        child.animate({
            left: disLeft + 'px',
            top:  disTop + 'px'
        },60000);
    }, 40000);
});


const remote = require('@electron/remote');
let win = remote.getCurrentWindow();
window.addEventListener("mousemove", event => {
    let flag = event.target === document.documentElement;
    if (flag){
        win.setIgnoreMouseEvents(true, { forward: true });
    }
    else {
        win.setIgnoreMouseEvents(false);
    }
});
win.setIgnoreMouseEvents(true, { forward: true });

