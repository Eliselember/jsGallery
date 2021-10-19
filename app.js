const currentImage = document.querySelector("#image");

const images = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg"]

function changeImage() {
    let randomNumber = Math.floor(Math.random() * images.length);
    console.log(randomNumber);
    currentImages.src = images[randomnumber];
}