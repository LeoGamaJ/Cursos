window.addEventListener("load", () => {

// Tempo, em segundos
let sec = 180;

const countDiv = document.getElementById("timer");

const secpass = () => {
    
    let min = Math.floor(sec/60);
    let segundosRestantes = sec % 60;

    if (segundosRestantes < 10) {
        min = "0" + min; 
    }

    if (min < 10) {
        min = "0" + min; 
    }

    // Formato 
    countDiv.innerHTML = min + ":" + segundosRestantes;
    
    // Condição Final
    if (sec > 0) { 
        sec = sec - 1
    }
    else {
        countDiv.innerHTML = " Acabou !"
    }
};

const countDown = setInterval(() => secpass(), 1000);

});