export default class Lightbox {
  displayLightbox(media) {
    // let mediaImage = [media.image];
    let video = [media.video];
    video = [video.video];
    let videoTitle = video.video;
    // let medias = mediaImage.concat(video);
    // let videoGallery = `assets/photographers/${video.photographerId}`;
    let mediaId = media.id;

    let currentMedia = document.querySelectorAll("." + "media-" + mediaId);
    let currentMediaName = [media.title];
    let boxLightbox = document.getElementById("box-lightbox");

    // console.log(mediaId);
    currentMedia[0].addEventListener("click", launchLightbox);
    function launchLightbox() {
      boxLightbox.style.display = "block";

      let templateBoxLightbox = `<article id="lightbox" class= "lightbox" role='dialog'>
                                  <span class="fas fa-times close-lightbox-icon" role="button" title="Close dialog"></span>
                                  <span class="fas fa-chevron-left left-arrow-lightbox arrow" id="prev" role="button" title="Previous media"></span>
                                  <div id="lightbox-media">
                                  <img class="photo-card-img-lightbox" src="../assets/photographers/${media.photographerId}/${media.image}"></>
                                  <span class="fas fa-chevron-right right-arrow-lightbox arrow" id="next" role="button" title="Next media"></span>
                                  <div id="lightbox-name">${currentMediaName}</div>
                                  </div>
                                  </article>`;

      boxLightbox.innerHTML = templateBoxLightbox;

      if (!media.image) {
        let templateBoxLightbox = `<article id="lightbox" class= "lightbox" role='dialog'>
                                  <span class="fas fa-times close-lightbox-icon" role="button" title="Close dialog"></span>
                                  <span class="fas fa-chevron-left left-arrow-lightbox arrow" id="prev" role="button" title="Previous media"></span>
                                  <div id="lightbox-media">
                                  <video controls="controls" class="photo-card-img-lightbox" src="../assets/photographers/${media.photographerId}/${media.video}"></video>
                                  <span class="fas fa-chevron-right right-arrow-lightbox arrow" id="next" role="button" title="Next media"></span>
                                  <div id="lightbox-name">${currentMediaName}</div>
                                  </div>
                                  </article>`;

        boxLightbox.innerHTML = templateBoxLightbox;
      }

      let closeBtn = document.querySelector(".close-lightbox-icon");
      closeBtn.addEventListener("click", closeLightbox);

      function closeLightbox() {
        boxLightbox.style.display = "none";
      }

      let slides = currentMedia;
      console.log(slides);

      let slideIndex = slides.length;
      showSlides(slideIndex);

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        let i;
        let mediaImage = media.image;
        slideIndex += n;
        let slides = currentMedia;
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
      }

      let linkPrevLightBox = document.querySelector(".left-arrow-lightbox");
      linkPrevLightBox.addEventListener("click", showSlides(1));

      let linkNextLightBox = document.querySelector(".right-arrow-lightbox");
      linkNextLightBox.addEventListener("click", showSlides(-1));
    }
  }
}
