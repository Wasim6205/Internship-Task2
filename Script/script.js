$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });



  document.addEventListener("DOMContentLoaded", function() {
    // const dott = document.getElementsByClassName("dotsst")
    const dots = document.querySelectorAll(".dots-nav");
    // const mainImage = document.getElementById("main-image");
    const leftColor =document.getElementById("left")
    const rightColor =document.getElementById("right")

    dots.forEach(dot => {
        dot.addEventListener("click", function() {
            // const newImage = this.getAttribute("data-image");
            const newColor1 = this.getAttribute("data-color-1");
            const newColor2 = this.getAttribute("data-color-2");

            // mainImage.style.opacity = 0;

            setTimeout(() => {
                // mainImage.src = newImage;
                leftColor.style.backgroundColor = newColor1;
                rightColor.style.backgroundColor = newColor2;
                // mainImage.style.opacity = 1;
                // dott.style.opacity = 0;
            }, 500);
        });
    });
});