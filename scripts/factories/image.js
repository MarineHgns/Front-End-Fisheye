export default class ImageBuilder {
  displayImage(image) {
    let imageGallery = `assets/photographers/${image.photographerId}`;

    const sectionMedias = document.getElementById("gallerie");

    let articleMedias = document.createElement("article");

    articleMedias.className = "article-media";
    const templateMedia = `
          <div class="card">
          <div class="item-media" id="${image.id}">
          <a href="#" class="media_link" data-mediaid="${image.id}" role="button" aria-label="${image.alt}">
           <img class="photo-card-img medias_all" src="../${imageGallery}/${image.image}"/>
           </a>
           </div>
              <span class="paragraph-gallery photograph-catalog-txt">
                <span class="card-title">${image.title}</span>
                
                  <div class="number-likes" id="number-${image.id}">
                     <span class="like-number">${image.likes}</span>
                     <i class="add-likes like-${image.id} far fa-heart " aria-label="likes" roles="button" aria-hidden="true"></i>
                  </span>
                  </span>
              </div>
          `;

    sectionMedias.appendChild(articleMedias);
    articleMedias.innerHTML = templateMedia;
  }
}
