export default class Lightbox {
  displayLightbox(media) {
    let medias = document.querySelector(".item-media");
    // let mediaId = media.id;

    let boxLightbox = document.getElementById("lightbox_modal");
    let templateMedias = document.querySelector(".medias_all");

    const imageSelected = document.querySelectorAll(".media_link");
    medias.addEventListener("click", launchLightbox);

    function launchLightbox() {
      boxLightbox.style.display = "block";

      let templateBoxLightbox = `<article id="lightbox" class= "lightbox" role='dialog'>
                                <span class="fas fa-times close-lightbox-icon" role="button" title="Close dialog"></span>
                                <span class="fas fa-chevron-left left-arrow-lightbox arrow" id="prev" role="button" title="Previous media"></span>
                                <div class="lightbox-media">
                                </div>
                                <span class="fas fa-chevron-right right-arrow-lightbox arrow" id="next" role="button" title="Next media"></span>
                                </article>`;
      boxLightbox.innerHTML = templateBoxLightbox;

      let lightboxMedia = document.querySelector(".lightbox-media");
      templateMedias.appendChild(lightboxMedia);
      console.log(templateMedias);

      // let closeBtn = document.querySelector(".close-lightbox-icon");
      // closeBtn.addEventListener("click", closeLightbox);

      // function closeLightbox() {
      //   boxLightbox.style.display = "none";
      // }
      // ////////

      // let linkPrevLightBox = document.querySelector(".left-arrow-lightbox");
      // linkPrevLightBox.addEventListener("click", (event) => {
      //   event.preventDefault();
      //   plusSlides(-1);
      // });

      // let linkNextLightBox = document.querySelector(".right-arrow-lightbox");
      // linkNextLightBox.addEventListener("click", (event) => {
      //   event.preventDefault();
      //   plusSlides(1);
      // });

      // let slideIndex = 1;
      // showSlides(slideIndex);

      // function plusSlides(n) {
      //   showSlides((slideIndex += n));
      // }

      // function currentSlide(n) {
      //   showSlides((slideIndex = n));
      // }

      // function showSlides(n) {
      //   let i;
      //   let slides = templateMedias;
      //   console.log(slides);
      //   if (n > slides.length) {
      //     slideIndex = 1;
      //   }
      //   if (n < 1) {
      //     slideIndex = slides.length;
      //   }
      //   for (i = 0; i < slides.length; i++) {
      //     slides[i].style.display = "none";
      //   }

      //   slides[slideIndex - 1].style.display = "block";
      // }
    }
  }
}
