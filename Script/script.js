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
    const dott = document.querySelector(".dotsfill2")
    const image1 = document.querySelector('.animImage1');
    const image2 = document.querySelector('.animImage2');
    const dots = document.querySelectorAll(".dots-nav");
    const leftColor =document.getElementById("left")
    const rightColor =document.getElementById("right")
    const stroke = document.querySelector(".transrg")
    const svg = this.querySelector("svg")

    dots.forEach(dot => {
        dot.addEventListener("click", function() {
            const newImage1 = this.getAttribute("data-image1");
            const newImage2 = this.getAttribute("data-image2");
            const newColor1 = this.getAttribute("data-color-1");
            const newColor2 = this.getAttribute("data-color-2");

            setTimeout(() => {
              svg.style.backgroundColor = newColor1
                image1.src = newImage1;
                image2.src = newImage2;
                leftColor.style.backgroundColor = newColor1;
                rightColor.style.backgroundColor = newColor2;
                animate()
                dott.style.opacity = 1;
                stroke.style.opacity = 0.8;
            }, 500);
        });
    });
});

