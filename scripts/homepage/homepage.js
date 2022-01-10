//créé une carte de chaque photographe avec ses infos + photo de profil + lien menant à sa page
export default class PhotographerFactory {
  static getUserCardDOM(data) {
    let photographers = data.photographers;
    photographers.map((photographer) => {
      const picture = `assets/Photographers ID Photos/${photographer.portrait}`;
      let photographersSection = document.getElementsByClassName(
        "photographer_section"
      );
      let article = document.createElement("article");
      let photographerTemplate = `
                                  <a href="photographer.html?id=${photographer.id}" title="Lieu ${photographer.city},
                                  ${photographer.country}. Tarif ${photographer.price}euros par jour.">
                                    <img src="${picture}" alt="Profil de ${photographer.name}">
                                      <h2>${photographer.name}
                                      </h2>
                                  </a>
                                  <h3>${photographer.city}, ${photographer.country}
                                  </h3>
                                  <h4>${photographer.tagline}
                                  </h4>
                                  <h5>${photographer.price}€/jour
                                  </h5>
                                `;

      photographersSection[0].appendChild(article);
      article.innerHTML = photographerTemplate;
    });
  }
}
