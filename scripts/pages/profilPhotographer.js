export default function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/Photographers ID Photos/${portrait}`;
  function getUserCardDOM() {
    const photographersSection = document.querySelector(
      ".photographer_section"
    );
    let article = document.createElement("article");
    article.className = " articlePh";
    let photographerTemplate = `
              <a href="photographer.html?id=${id}" title="Lieu ${city}, ${country}. Tarif ${price}euros par jour.">
                  <img src="${picture}" alt="Photo du profil de ${name}">
                  <h2>${name}</h2>
              </a>
              <h3>${city}, ${country}</h3>
              <h4>${tagline}</h4>
              <h5>${price}€/jour</h5>`;
    photographersSection.appendChild(article);
    article.innerHTML = photographerTemplate;
    return article;
  }
  return { name, picture, city, country, tagline, price, getUserCardDOM };
}
