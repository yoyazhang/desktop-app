function dragPicture(moveObj) {
    moveObj.on('mousedown', event => {
        let imgTop = parseFloat(moveObj.css('top'));
        let imgLeft = parseFloat(moveObj.css('left'));
        let lastPointX = event.clientX;
        let lastPointY = event.clientY;
        $(document).on('mousemove', e => {
            e.preventDefault();
            let changeX = e.clientX - lastPointX;
            let changeY = e.clientY - lastPointY;
            let disX = imgLeft + changeX;
            let disY = imgTop + changeY;
            moveObj.css({
                left: disX + "px",
                top: disY + "px"
            })
        })
    });
    $(document).on('mouseup', () => {
        $(document).off('mousemove');
    })
}

$(document).ready(function () {
    let child = $('div.goose:first');
    dragPicture(child);
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
