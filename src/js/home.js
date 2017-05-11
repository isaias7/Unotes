
window.onload = function init() {
    buttonFile = document.getElementById("buttonLib");
    menuLateralLib = document.getElementById("menuLateralLib");
}
function note() {
    document.getElementById("nameNote").focus();
}
function lib() {
    console.log("llamo");
    menuLateralLib = document.getElementById("menuLateralLib");
    var s = menuLateralLib.style.left;
    if (s == "40%") {
        ocultarMenuLibrerias()
    }
    else {
        mostrarMenuLibrerias()
    }
}
function ocultarMenuLibrerias() {
    menuLateralLib = document.getElementById("menuLateralLib");
    menuLateralLib.style.left = -40 + "%";
}

function mostrarMenuLibrerias() {
    menuLateralLib = document.getElementById("menuLateralLib");
    menuLateralLib.style.left = 40 + "%";
}

document.onkeydown = function myFunction(event) {
    if (event.keyCode == 27) {
        ocultarMenuLibrerias()
    }
}