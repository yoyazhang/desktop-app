let win = require('electron').remote.getCurrentWindow();
let el = document.getElementById('clickThroughElement');
el.addEventListener('mouseenter', () => {
    win.setIgnoreMouseEvents(true, { forward: true })
});
el.addEventListener('mouseleave', () => {
    win.setIgnoreMouseEvents(false)
});

let dino = document.getElementsByClassName("goose")[0];
let drag = require('electron-drag');
console.log(drag);
if (drag.supported){
    alert("ssss");
    drag(dino);
}
setInterval(function () {
        if (dino.getAttribute("id") === "left"){
            dino.setAttribute("id", "right");
        }else{
            dino.setAttribute("id", "left");
        }
    }, 50000);
setInterval(function () {

});

