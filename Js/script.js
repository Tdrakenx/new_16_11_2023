$(document).ready(function(){
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var dots = document.getElementsByClassName("dot");
        var slides = $(".slide");
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        slideIndex++;
        
        if (slideIndex == slides.length) {
            slideIndex = 1;
        }
        
        slides[slideIndex-1].style.display = "block";  

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" dot_active", "");
          }
          dots[slideIndex - 1].className += " dot_active";

        setTimeout(showSlides, 2000); // Change l'image toutes les 2 secondes (ajustable selon vos besoins)
    }
});


