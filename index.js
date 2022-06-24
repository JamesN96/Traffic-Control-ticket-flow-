var popup = document.getElementById("popup");
var close = document.getElementById("close");
var scg = document.getElementById("popup-scg");
var osmo = document.getElementById("osmo");
var L2 = document.getElementById("L2");



function closePopup() {
    popup.classList.remove("open-popup");

}

function openPopup() {
    popup.classList.add("open-popup");
}

function openScg() {
    scg.classList.add("open-popup");
}

function closeScg() {
    scg.classList.remove("open-popup");
}

function openOsmo() {
    osmo.classList.add("open-popup");
}

function closeOsmo() {
    osmo.classList.remove("open-popup");
}

function openL2() {
    L2.classList.add("open-popup");
}

function closeL2() {
    L2.classList.remove("open-popup");
}

