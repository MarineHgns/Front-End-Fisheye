export default class ImageBuilder {
  displayImage(image) {
    let imageGallery = `assets/photographers/${image.photographerId}`;
    const sectionMedias = document.getElementById("gallerie");
    let articleMedias = document.createElement("article");
    let divMedias = document.createElement("div");
    let divInfo = document.createElement("div");
    articleMedias.className = "article-media";

    divMedias.innerHTML = `
                            <img class="itemMedia" tabindex="5" alt="${image.alt}" aria-label="${image.alt}" 
                            src="../${imageGallery}/${image.image}"/>
                          `;

    divInfo.innerHTML = `
                          <div class="paragraph-gallery">
                            <h3 class="card-title" tabindex="5">${image.title}
                            </h3>
                            <div class="number-likes">
                              <span class="like-number" tabindex="5">${image.likes}
                              </span>
                              <i class="add-likes like-${image.id} far fa-heart" aria-label="cliquez pour aimer"
                               tabindex="5" roles="button" aria-hidden="true">
                              </i>
                            </div>
                          </div>
                        </div>  
                        `;

    articleMedias.appendChild(divMedias);
    articleMedias.appendChild(divInfo);
    sectionMedias.appendChild(articleMedias);

    return divMedias;
  }
}
