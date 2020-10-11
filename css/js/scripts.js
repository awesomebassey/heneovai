// Home Page Images
var exp = document.querySelectorAll(".exp", );
for(var i = 0; i < exp.length; i++){
    exp[i].addEventListener("mouseover", function(){
        this.classList.add("animate__pulse");
    })
    exp[i].addEventListener("mouseout", function(){
        this.classList.remove("animate__pulse");
    });
}

// Slider for Couture
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}