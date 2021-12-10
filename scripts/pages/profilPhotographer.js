import MediaConstructor from "./mediaConstructor.js";
import Modal from "./modal.js";
import Form from "./form.js";
export default class ProfilPhotographer {
  static displayProfilPhotographer(data) {
    let photographersData = data.photographers;

    const id = window.location.search.split("id=")[1];
    const photographers = !id
      ? photographersData
      : photographersData.filter((photographer) => photographer.id == id);
    const sectionPhotographerProfil = document.getElementsByClassName(
      "photographer_section_header"
    );
    const picture = `assets/Photographers ID Photos/${photographers[0].portrait}`;
    let article = document.createElement("article");
    article.classList.add("header-photographer-profile");
    const templatePhotographerProfil = `
                <div class='ph-infos'>
                    <h2 class="photographe-name">${photographers[0].name}</h2>
                      <p class="localisation">${photographers[0].city}, ${photographers[0].country}</p>
                        <p class="citation">${photographers[0].tagline}</p>
                </div>
                <button class="contact_button ph-profile-btn" type="button" 
                aria-haspopup="dialog"
                aria-controls="dialog" title="Contactez-moi">Contactez-moi</button>
                <img src="${picture}" alt="${photographers[0].name}">
            `;

    sectionPhotographerProfil[0].appendChild(article);
    article.innerHTML = templatePhotographerProfil;

    const medias = data.media;
    const photographerMedias = id
      ? medias.filter((media) => media.photographerId == id)
      : [];
    new MediaConstructor().displayMedia(photographerMedias);

    const modal = data.photographers;
    const photographerModal = id
      ? modal.filter((photographer) => photographer.id == id)
      : [];
    new Modal().displayModal(photographerModal);
    new Form().displayForm();
  }
}
