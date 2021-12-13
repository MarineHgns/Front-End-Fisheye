export default class ImageBuilder {
  displayImage(image) {
    let imageGallery = `assets/photographers/${image.photographerId}`;
    const sectionMedias = document.getElementById("gallerie");
    let articleMedias = document.createElement("article");
    articleMedias.className = "article-media";
    const templateMedia = `
          <div class="card">
          
           <img class="photo-card-img" src="../${imageGallery}/${image.image}" >
          
              <div class="paragraph-gallery">
                <h3 class="card-title">${image.title}</h3>
                  <div class="number-likes">
                     <span class="like-number">${image.likes}</span>
                     <i class="likes like-${image.id} far fa-heart " aria-label="likes" roles="button" aria-hidden="true"></i>
                  </div>
              </div>
          </div>
          `;
    sectionMedias.appendChild(articleMedias);
    articleMedias.innerHTML = templateMedia;
  }
}
