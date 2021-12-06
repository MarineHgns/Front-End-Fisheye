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
    const picture = `assets/Photographers ID Photos/${photographersData[0].portrait}`;
    let article = document.createElement("article");
    article.classList.add("header-photographer-profile");
    const templatePhotographerProfil = `
                <div class='ph-infos'>
                    <h2 class="photographe-name">${photographers[0].name}</h2>
                    <p class="localisation">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="citation">${photographers[0].tagline}</p>
                </div>
                <button class="contact_button ph-profile-btn" title="Contactez-moi">Contactez-moi</button>
                <img src="${picture}" alt="${photographers[0].name}">
            `;

    sectionPhotographerProfil[0].appendChild(article);
    article.innerHTML = templatePhotographerProfil;
  }
}
