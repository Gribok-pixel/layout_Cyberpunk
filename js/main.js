const bgHeader = document.querySelector('.header');


function go() {
    setInterval((bgHeader.style.backgroundImage = `url(../img/bg-2.jpg)`), 2000)
    setInterval((bgHeader.style.backgroundImage = 'url(../img/bg-3.jpg)'), 2000)
    setInterval((bgHeader.style.backgroundImage = 'url(../img/bg-1.jpg)'), 2000)

}

let index = 0;
let max = 4;

function bgSlider() {
    index++
    if (index === max) {
        index = 1;
    }
    let cur = index
    bgHeader.style.backgroundImage = `url(../img/bg-${cur}.jpg)`
}


window.setInterval(bgSlider, 4500)