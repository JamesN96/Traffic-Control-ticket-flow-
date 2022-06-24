var popup = document.getElementById("popup");
var close = document.getElementById("close");
var scg = document.getElementById("popup-scg");

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
