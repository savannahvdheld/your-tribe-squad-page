// Grab the big image slot and all the thumbnails
let bigImage = document.querySelector(".big img");
let thumbs = document.querySelectorAll(".thumb");

// This function will run whenever any thumbnail is clicked
function swapImage(event) {
  // "event" is the click. event.target is the exact thing clicked (the thumbnail image)
  let clickedThumb = event.target;

  // Read which big image this thumbnail points to
  let targetNumber = clickedThumb.dataset.target;

  // Build the filename for the matching big image
  bigImage.src = "big" + targetNumber + ".jpg";
}

// Attach the function to every thumbnail
thumbs.forEach(function (thumb) {
  thumb.addEventListener("click", swapImage);
});
