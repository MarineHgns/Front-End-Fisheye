export default class ImageBuilder {
  displayImage(image) {
    let imageGallery = `assets/photographers/${image.photographerId}`;
    const sectionMedias = document.getElementById("gallerie");
    let articleMedias = document.createElement("article");
    let divMedias = document.createElement("div");
    let divInfo = document.createElement("div");
    articleMedias.className = "article-media";

    divMedias.innerHTML = `<img class="itemMedia" tabindex="1" aria-label="${image.alt}" src="../${imageGallery}/${image.image}"/>`;

    divInfo.innerHTML = `
      <div class="paragraph-gallery">
        <h3 class="card-title" tabindex="1">${image.title}</h3>
          <div class="number-likes">
              <span class="like-number" tabindex="1">${image.likes}</span>
              <i class="add-likes like-${image.id} far fa-heart" aria-label="cliquez pour liker" tabindex="1" aria-label="likes" roles="button" aria-hidden="true"></i>
          </div>
          </div>
      </div>  `;

    articleMedias.appendChild(divMedias);
    articleMedias.appendChild(divInfo);
    sectionMedias.appendChild(articleMedias);

    // console.log(divMedias);

    return divMedias;
  }
}
