//OBSOLETE

function moveIn(i) {
    let id = null;
    clearInterval(id);
    setInterval(function() {

        frame()

    }, 2);
    const elem = document.getElementById(i);
    let pos = 0;

    /*function move(){
        const elem = document.getElementById(i);
        clearInterval(null);
        let pos = 100;
        if (pos === 0) {
            clearInterval(null);
        } else {
            pos--;
            elem.style.top = pos + "px";
        }
    }*/

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }


}

function move(i){
    const elem = document.getElementById(i);
    clearInterval(null);
    let pos = 100;
    if (pos === 0) {
        clearInterval(null);
    } else {
        elem.style.top = pos + "px";
        pos--;
    }
}
function fade(i) {
    let trans = 0;
    let timer = 0.00002;
    const elem = document.getElementById(i);
    let id= null;
    clearInterval(id);
    setInterval(fade, 5);
    if (trans === 1) {
        clearInterval(id);
    } else {
        trans += timer;
        timer += .00002;
        elem.style.opacity = trans.toString();
    }
}

function frame(i) {
    let id = null;
    clearInterval(id);
    setInterval(frame, 2);
    const elem = document.getElementById(i);
    let pos = 0;
    if (pos === 350) {
        clearInterval(id);
    } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
}





