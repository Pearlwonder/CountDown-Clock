let timer = 5;
let change = document.getElementById("change");

function liftOff() {
    timer = timer - 1;
    change.innerText = timer;
    if (timer <= 0) {
        change.innerText = "Ready for Fullstack Academy Future Code NYC Boot-Camp!"
    } else {
        change.innerText = timer;
    }
}

setInterval(liftOff, 1000)