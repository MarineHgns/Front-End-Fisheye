export default class Lightbox {
  displayLightbox(media) {
    let myMediaId = document.getElementById(media.id);

    let imageGallery = `assets/photographers/${media.photographerId}`;
    let boxLightbox = document.querySelector(".lightbox_modal");

    if (myMediaId) myMediaId.addEventListener("click", launchLightbox);

    function launchLightbox() {
      boxLightbox.style.display = "block";

      let templateBoxLightbox = `<article id="lightbox" class= "lightbox" role='dialog'>
                                  <span class="fas fa-times close-lightbox-icon" role="button" title="Close dialog"></span>
                                  <span class="fas fa-chevron-left left-arrow-lightbox arrow" id="prev" role="button" title="Previous media"></span>
                                  <div class="lightbox-media">
                                    <div class="media_link" data-mediaid="${media.id}" role="button" aria-label="${media.alt}">
                                      <img class="photo-card-img-lightbox medias_all" src="../${imageGallery}/${media.image}"/>
                                      <span class="card-title-lightbox">${media.title}</span>
                                    </div>
                                  </div>
                                  <span class="fas fa-chevron-right right-arrow-lightbox arrow" id="next" role="button" title="Next media"></span>
                                </article>`;
      boxLightbox.innerHTML = templateBoxLightbox;
      let closeBtn = document.querySelector(".close-lightbox-icon");
      closeBtn.addEventListener("click", closeLightbox);
      new lightboxShow();

      function closeLightbox() {
        boxLightbox.style.display = "none";
      }
    }

    // /////////////////////

    function lightboxShow() {
      // let boxLightbox = document.getElementsByClassName("medias_link");
      let boxLightbox = document.querySelector(".lightbox_modal");
      let slides = document.querySelectorAll(".media_link");
      //let imageSelected = document.getElementsByClassName("medias_all");
      // let mediaLink = slides;
      // boxLightbox.innerHTML = `<article id="lightbox" class= "lightbox" role='dialog'>
      // <span class="fas fa-times close-lightbox-icon" role="button" title="Close dialog"></span>
      // <span class="fas fa-chevron-left left-arrow-lightbox arrow" id="prev" role="button" title="Previous media"></span>
      // <div class="lightbox-media">
      // ${mediaLink}
      // </div>
      // <span class="fas fa-chevron-right right-arrow-lightbox arrow" id="next" role="button" title="Next media"></span>
      // </article>`;

      for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener("click", () => {
          boxLightbox.style.display = "block";
          currentSlide(i + 1);
        });
      }

      //controls lightbox prev/next
      const linkPrevLightBox = document.querySelector(".right-arrow-lightbox");

      linkPrevLightBox.addEventListener("click", () => {
        plusSlides(-1);
      });
      const linkNextLightBox = document.querySelector(".left-arrow-lightbox");

      linkNextLightBox.addEventListener("click", () => {
        plusSlides(1);
      });
      // // animation of lightbox
      let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }
      function currentSlide(n) {
        showSlides((slideIndex = n));
      }
      function showSlides(n) {
        let i;

        console.log(slides);
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }

        // Récupérer la zone à modifier
        let mediaLightbox = document.querySelectorAll(".lightbox-media")[0];
        //Puis on modifie avec le nouveau media
        //mediaLightbox.innerHTML = slides[slideIndex];

        console.log(slides[slideIndex]);

        /*
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";*/
      }
    }
  }
}
