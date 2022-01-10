import ImageBuilder from "../constructor/image.js";
import VideoBuilder from "../constructor/video.js";

export default class Lightbox {
  constructor(medias, index) {
    this.medias = medias;
    this.index = index;
    this.boxLightbox = document.getElementById("lightbox_modal");
    this.displayLightbox();
  }

  displayLightbox() {
    this.boxLightbox.style.display = "block";

    let templateBoxLightbox = `
                <article id="lightbox" class= "lightbox" role="dialog" aria-modal="true" aria-labelledby="dialog-form" 
                    aria-describedby="dialog-desc" aria-label="lightbox ouverte" tabindex="1">
                  <span class="fas fa-times close-lightbox-icon" role="button" aria-label="fermer la lightbox">
                  </span>
                  <span class="fas fa-chevron-left left-arrow-lightbox arrow" id="prev" role="button" aria-label="image précédente">
                  </span>    
                  <div id="containMediaLightBox">
                  </div>                                      
                  <span class="fas fa-chevron-right right-arrow-lightbox arrow" id="next" role="button"aria-label="image suivante">
                  </span>
                  <div id="lightbox-name">
                  </div>
                  </article>
                  `;

    this.boxLightbox.innerHTML = templateBoxLightbox;

    this.displayCurrentMedia();

    let closeBtn = document.querySelector(".close-lightbox-icon");
    let imgPrevLightBox = document.querySelector(".left-arrow-lightbox");
    let imgNextLightBox = document.querySelector(".right-arrow-lightbox");

    closeBtn.addEventListener("click", () => this.closeLightbox());

    imgPrevLightBox.addEventListener("click", () => {
      this.showSlides(-1);
    });

    imgNextLightBox.addEventListener("click", () => {
      this.showSlides(1);
    });

    // navigation with <>
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" || e.key === "Comma") {
        this.showSlides(-1);
      } else if (e.code === "ArrowRight" || e.code === "Period") {
        this.showSlides(1);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        window.location.reload(true);
        this.closeLightbox();
      }
    });
  }

  displayCurrentMedia() {
    let mediaCurrent = this.medias[this.index];
    let divMedia = mediaCurrent.image
      ? new ImageBuilder().displayImage(mediaCurrent)
      : new VideoBuilder().displayVideo(mediaCurrent);
    let title;
    title = mediaCurrent.title;
    document.querySelector("#containMediaLightBox").innerHTML = "";
    document.querySelector("#containMediaLightBox").appendChild(divMedia);
    document.querySelector("#lightbox-name").innerHTML = title;
    this.imgLightbox();
  }

  closeLightbox() {
    this.boxLightbox.style.display = "none";
    window.location.reload(true);
  }

  showSlides(n) {
    this.index += n;
    if (this.index >= this.medias.length) {
      this.index = 1;
    }
    if (this.index < 1) {
      this.index = this.medias.length - 1;
    }

    this.displayCurrentMedia();
  }

  //modifie les attributs class pour l'affichage dans la lightbox
  imgLightbox() {
    let imageLightbox = document.querySelector(".itemMedia");
    imageLightbox.classList.toggle("itemMedia", false);
    imageLightbox.classList.toggle("photo-card-img-lightbox", true);
  }
}
