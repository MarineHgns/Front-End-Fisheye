import Lightbox from "../pages/lightbox.js";
export default class MediaConstructor {
  displayMedia(photographerMedias) {
    let alt = photographerMedias;
    photographerMedias.map((media) => {
      const catalog = `./assets/photographers/${media.photographerId}/${media.image}`;
      const $wrapper = document.createElement("div");
      let gallerie = document.querySelector(".gallerie");

      let cardmedias = "";
      cardmedias += `<div class="card">
      <div class="item-media" id="${media.id}">
                     <div href="#" class="media_link" data-mediaid="${media.id}"  aria-label="${media.alt}">
      `;
      if (media.video !== undefined) {
        cardmedias += `<video class="photo-card-video medias_all" aria-label="${media.alt}" controls>
        <source src="./assets/photographers/${media.photographerId}/${media.video}" type="video/mp4">
        </video>`;
      } else {
        cardmedias += `<img class="photo-card-img medias_all" src="${catalog}" alt="${media.alt}">`;
      }
      cardmedias += `
      </div>
      </div>
      <div class="paragraph-gallery photograph-catalog-txt">
         <div class="card-title">
            ${media.title}
         </div>
          <div class="number-likes">
              <span class="like-number" id="media-id" data-id="${media.id}">${media.likes}</span>
              <i class="add-likes like-${media.id} far fa-heart" arial-label="likes" roles="button" aria-hidden="true"></i>
              </div>
         </div>
         </div>
      `;
      gallerie.appendChild($wrapper);
      $wrapper.innerHTML = cardmedias;
      new Lightbox().displayLightbox(media);
    });
  }
}
