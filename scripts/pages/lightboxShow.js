// export default function lightboxShow() {

//   let boxLightbox = document.getElementsByClassName("modal_carousel");
//   const imageSelected = document.querySelectorAll(".medias_all");

//   for (let i = 0; i < imageSelected.length; i++) {
//     imageSelected[i].addEventListener("click", () => {
//       boxLightbox.style.display = "block";
//       currentSlide(i + 1);
//     });
//   }

//   //controls lightbox prev/next
//   const linkPrevLightBox = document.querySelector(".controls-right");

//   linkPrevLightBox.addEventListener("click", () => {
//     plusSlides(-1);
//   });
//   const linkNextLightBox = document.querySelector(".controls-left");

//   linkNextLightBox.addEventListener("click", () => {
//     plusSlides(1);
//   });
//   // // animation of lightbox
//   let slideIndex = 1;
//   showSlides(slideIndex);
//   function plusSlides(n) {
//     showSlides((slideIndex += n));
//   }
//   function currentSlide(n) {
//     showSlides((slideIndex = n));
//   }
//   function showSlides(n) {
//     let i;

//     let slides = document.getElementsByClassName("media_link");
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//       slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
//   }
// }

// lightboxShow();
