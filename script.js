var slideIndex = 0;
var slideImages = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg"];

function changeSlide() {
 slideIndex++;
 if (slideIndex >= slideImages.length) {
    slideIndex = 0;
 }

 document.getElementById("myDiv").style.backgroundImage = "url('" + slideImages[slideIndex] + "')";
}


// Call changeSlide function every 3 seconds
setInterval(changeSlide, 3000);

$(document).ready(function () {
   $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
           $('.navbar').addClass('bg-dark');
           $('.navbar').removeClass('bg-transparent');
       } else {
           $('.navbar').removeClass('bg-dark');
           $('.navbar').addClass('bg-transparent');
       }
   });
});


$(document).ready(function() {
    let exploreButton = $('.explore');
    let priceText = $('#price');

    exploreButton.mouseover(function() {
        priceText.css('color', 'red');
    });

    exploreButton.mouseout(function() {
        priceText.css('color', 'black');
    });
});
// document.addEventListener('DOMContentLoaded', function() {
//     var typed = new Typed(".search-car", {
//         strings: ["Corolla 2018...", "Best SUV...", "Hatchbacks for 5..."],
//         typeSpeed: 80,
//         backSpeed: 20,
//         showCursor: true,
//         cursorChar: "|",
//         loop: true,
//         contentType: 'html',
//         pauseOnFocus: true,
//     });
// });