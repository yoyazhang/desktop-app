let dino = document.getElementsByClassName("goose")[0];

const remote = require('@electron/remote');
let win = remote.getCurrentWindow();
win.setIgnoreMouseEvents(true, { forward: true });
window.addEventListener("mousemove", event => {
    let flag = event.target === document.documentElement;
    if (flag){
        win.setIgnoreMouseEvents(true, { forward: true });
    }
    else {
        win.setIgnoreMouseEvents(false);
    }
});

setInterval(function () {
        if (dino.getAttribute("id") === "left"){
            dino.setAttribute("id", "right");
        }else{
            dino.setAttribute("id", "left");
        }
    }, 50000);
setInterval(function () {

});

