export default class ImageBuilder {
  displayImage(image) {
    let imageGallery = `assets/photographers/${image.photographerId}`;
    const sectionMedias = document.getElementById("gallerie");
    let articleMedias = document.createElement("article");
    articleMedias.className = "article-media";
    const templateMedia = `
          <div class="card">
          <div class="item-media" id="test">
          <a href="#" class="media_link" data-mediaid="${image.id}" role="button" aria-label="${image.alt}">
           <img class="photo-card-img medias_all" src="../${imageGallery}/${image.image}"/>
           </a>
           </div>
              <span class="paragraph-gallery photograph-catalog-txt">
                <h3 class="card-title">${image.title}</h3>
                </div>
                  <div class="number-likes">
                     <span class="like-number">${image.likes}</span>
                     <i class="add-likes like-${image.id} far fa-heart " aria-label="likes" roles="button" aria-hidden="true"></i>
                  </span>
              </div>
          </div>
          `;
    sectionMedias.appendChild(articleMedias);
    articleMedias.innerHTML = templateMedia;
  }
}
