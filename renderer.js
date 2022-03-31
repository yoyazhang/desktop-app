let dino = document.getElementsByClassName("goose")[0];
setInterval(function f() {
        if (dino.getAttribute("id") === "left"){
            dino.setAttribute("id", "right");
        }else{
            dino.setAttribute("id", "left");
        }
    }, 50000);

