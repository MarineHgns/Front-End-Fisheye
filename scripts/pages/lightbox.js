export default class Lightbox {
  displayLightbox(media) {
    // let mediaImage = [media.image];
    // let mediaVideo = [media.video];
    // let medias = mediaImage.concat(mediaVideo);
    // console.log(medias);
    let currentMedia = document.querySelectorAll(".card");
    let currentMediaName = [media.title];
    let boxLightbox = document.getElementById("box-lightbox");

    function launchLightbox() {
      boxLightbox.style.display = "block";
      let templateBoxLightbox = `<article id="lightbox" role='dialog'>
                                <span class="fas fa-times close-lightbox-icon" role="button" title="Close dialog"></span>
                                <iframe class="photo-card-img" src="../assets/photographers/${media.photographerId}/${media.image}"></iframe>
                                <span class="fas fa-chevron-left left-arrow-lightbox" role="button" title="Previous media"></span>
                                <span class="fas fa-chevron-right right-arrow-lightbox" role="button" title="Next media"></span>
                                <div id="lightbox-media"></div>
                                <div id="lightbox-name">${currentMediaName}</div>
                                </article>`;

      boxLightbox.innerHTML = templateBoxLightbox;
    }
    currentMedia[0].addEventListener("click", launchLightbox);
  }
}
