
/*hier staat de code waarbij je met een klik op de kleine afbeeldingen kan switchen naar andere foto's*/

let bigImage = document.querySelector(".big img");
let thumbs = document.querySelectorAll(".thumb");

function swapImage(event) {
    let targetFile = event.target.dataset.target;
    bigImage.src = "assets/" + targetFile;
}

thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", swapImage);
});
