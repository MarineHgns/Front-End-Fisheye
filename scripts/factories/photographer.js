export function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/Photographers ID Photos/${portrait}`;

  function getUserCardDOM() {
    let article = document.createElement("article");
    let a = document.createElement("a");
    const img = document.createElement("img");
    let h2 = document.createTextNode(name);
    a.appendChild(img);
    img.setAttribute("src", picture);
    img.alt = "Photo profil de " + `${name}`;
    a.title = name;
    a.href = "photographer.html" + "?id=$" + `${id}`;
    article.appendChild(a);
    a.appendChild(h2);
    const h3 = document.createElement("h3");
    h3.textContent = city + ", " + country;
    article.appendChild(h3);
    const h4 = document.createElement("h4");
    h4.textContent = tagline;
    article.appendChild(h4);
    const h5 = document.createElement("h5");
    h5.textContent = price + "€/jour";
    article.appendChild(h5);

    return article;
  }
  return { name, picture, city, country, tagline, price, getUserCardDOM };
}
