
/*hier staat de code waarbij je met een klik op de kleine afbeeldingen kan switchen naar andere foto's*/

let bigImage = document.querySelector(".big-img");
let thumbs = document.querySelectorAll(".thumb");
let locatieNaam = document.querySelector(".locatie-naam");
let locatieBeschrijving = document.querySelector(".locatie-beschrijving");

function swapImage(event) {
    let targetFile = event.target.dataset.target;
    let nieuweNaam = event.target.dataset.naam;
    let nieuweBeschrijving = event.target.dataset.beschrijving;

    bigImage.src = "assets/" + targetFile;
    locatieNaam.textContent = nieuweNaam;
    locatieBeschrijving.textContent = nieuweBeschrijving;
}

thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", swapImage);
});

const locatiesKnop = document.querySelector(".locaties-knop");
const popup = document.querySelector(".popup");

locatiesKnop.addEventListener("click", function () {
    popup.classList.add("open");
});

const kruis = document.querySelector(".popup .kruis");

kruis.addEventListener("click", function () {
    popup.classList.remove("open");
});