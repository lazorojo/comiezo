const images = [
  "1000006433.jpg",
  "1000006434.jpg",
  "1000006435.jpg",
  "1000006436.jpg"
];

let index = 0;

function showImage() {
    const slider = document.getElementById("slider");
    slider.src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

window.onload = showImage;
