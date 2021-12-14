export default class Lightbox {
  displayLightbox(media) {
    // let mediaImage = [media.image];
    // let video = [media.video];
    // video = [video.video];
    // let videoTitle = video.video;
    // let medias = mediaImage.concat(video);
    // let videoGallery = `assets/photographers/${video.photographerId}`;
    let mediaId = media.id;
    let currentMedia = document.querySelectorAll("." + "media-" + mediaId);
    let currentMediaName = [media.title];
    let boxLightbox = document.getElementById("box-lightbox");

    console.log(mediaId);
    currentMedia[0].addEventListener("click", launchLightbox);
    function launchLightbox() {
      boxLightbox.style.display = "block";

      let templateBoxLightbox = `<article id="lightbox" role='dialog'>
                                <span class="fas fa-times close-lightbox-icon" role="button" title="Close dialog"></span>
                                <span class="fas fa-chevron-left left-arrow-lightbox arrow" role="button" title="Previous media"></span>
                                <iframe class="photo-card-img-lightbox" src="../assets/photographers/${media.photographerId}/${media.image}"></iframe>
                                <span class="fas fa-chevron-right right-arrow-lightbox arrow" role="button" title="Next media"></span>
                                <div id="lightbox-media"></div>
                                <div id="lightbox-name">${currentMediaName}</div>
                                </article>`;

      boxLightbox.innerHTML = templateBoxLightbox;

      let closeBtn = document.querySelector(".close-lightbox-icon");
      closeBtn.addEventListener("click", closeLightbox);
    }

    function closeLightbox() {
      boxLightbox.style.display = "none";
    }
  }
}
