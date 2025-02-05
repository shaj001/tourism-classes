// document.addEventListener("DOMContentLoaded", function () {
//     const carousel = document.querySelector(".carousel-container");
//     let index = 0;

//     function slide() {
//         index++;
//         if (index >= carousel.children.length) {
//             index = 0;
//         }
//         carousel.style.transform = `translateX(-${index * 100}%)`;
//     }

//     setInterval(slide, 3000); // Change slide every 3 seconds
// });


const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});