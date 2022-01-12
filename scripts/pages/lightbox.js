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
                  <span class="fas fa-times close-lightbox-icon" role="button" aria-label="fermer la lightbox" tabindex="1">
                  </span>
                  <span class="fas fa-chevron-left left-arrow-lightbox arrow" id="prev" role="button" aria-label="image précédente" tabindex="3">
                  </span>    
                  <div id="containMediaLightBox" tabindex="2">
                  </div>                                      
                  <span class="fas fa-chevron-right right-arrow-lightbox arrow" id="next" role="button" aria-label="image suivante" tabindex="3">
                  </span>
                  <div id="lightbox-name" tabindex="4">
                  </div>
                  </article>
                  `;

    this.boxLightbox.innerHTML = templateBoxLightbox;

    this.displayCurrentMedia();

    let closeBtn = document.querySelector(".close-lightbox-icon");
    let imgPrevLightBox = document.querySelector(".left-arrow-lightbox");
    let imgNextLightBox = document.querySelector(".right-arrow-lightbox");

    // Fermeture lightbox click, echap et enter
    closeBtn.addEventListener("click", () => this.closeLightbox());
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        this.closeLightbox();
        document.body.style.visibility = "visible";
      }
    });

    closeBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.closeLightbox();
      }
    });

    // navigation avec <>
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" || e.key === "Comma") {
        this.showSlides(-1);
      } else if (e.code === "ArrowRight" || e.code === "Period") {
        this.showSlides(1);
      }
    });

    // navigation au click sur <>
    imgPrevLightBox.addEventListener("click", () => {
      this.showSlides(-1);
    });

    imgNextLightBox.addEventListener("click", () => {
      this.showSlides(1);
    });

    // navigation au enter sur <>
    imgNextLightBox.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        this.showSlides(1);
      }
    });

    imgPrevLightBox.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        this.showSlides(-1);
      }
    });
  }

  closeLightbox() {
    window.location.reload(true);
    this.boxLightbox.style.display = "none";
  }

  //gestion de l'index des médias
  showSlides(n) {
    this.index += n;
    if (this.index >= this.medias.length) {
      this.index = 0;
    }

    if (this.index < 0) {
      this.index = this.medias.length - 1;
    }
    this.displayCurrentMedia();
  }

  //insertion du média dans la template de la lightbox
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

  //modifie les attributs class pour l'affichage dans la lightbox
  imgLightbox() {
    let imageLightbox = document.querySelector(".itemMedia");
    imageLightbox.classList.toggle("itemMedia", false);
    imageLightbox.classList.toggle("photo-card-img-lightbox", true);
    imageLightbox.setAttribute("controls", true);
    imageLightbox.setAttribute("tabindex", "2");
  }
}
