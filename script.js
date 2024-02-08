function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill out all fields.");
        return false;
    }

    return true;
}






document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-track");
    let currentIndex = 0;
    const slideWidth = carousel.offsetWidth / 3;

    function moveToNextSlide() {
        if (currentIndex < 2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function updateCarousel() {
        const translateX = -currentIndex * slideWidth;
        carousel.style.transform = `translateX(${translateX}px)`;
    }

    setInterval(moveToNextSlide, 3000);
});



