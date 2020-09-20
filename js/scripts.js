// Variables
var exp = document.querySelectorAll(".exp");


// Home Page Images
for(var i = 0; i < exp.length; i++){
    exp[i].addEventListener("mouseover", function(){
        this.classList.add("animate__pulse");
    })
    exp[i].addEventListener("mouseout", function(){
        this.classList.remove("animate__pulse");
    });
}

// Slider for Couture
var slides = {
    one: {
        color: "red",
        h3: "Fashion something",
        small: "author name"
    }
}
function slide(){
    var quote = document.querySelector(".quote");
    quote.style.color = "red";
}
setInterval(() => {
    slide();
}, 1000);