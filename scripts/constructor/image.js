export default class ImageBuilder {
  displayImage(image) {
    // Chemin pour récupérer les images de chaque photographe = ../assets/photographers/..""
    let imageGallery = `assets/photographers/${image.photographerId}`;
    // Création de la carte du média via template
    const sectionMedias = document.getElementById("gallerie");
    let articleMedias = document.createElement("article");
    let divMedias = document.createElement("div");
    let divInfo = document.createElement("div");
    articleMedias.className = "article-media";
    // Partie chemin média
    divMedias.innerHTML = `
                            <img class="itemMedia" tabindex="5" alt="${image.alt}" aria-label="${image.alt}" 
                            src="../${imageGallery}/${image.image}"/>
                          `;
    // Partie info titre et likes
    divInfo.innerHTML = `
                          <div class="paragraph-gallery">
                            <h3 class="card-title" tabindex="5">${image.title}
                            </h3>
                            <div class="number-likes">
                              <span class="like-number" tabindex="5">${image.likes}
                              </span>
                              <i class="add-likes like-${image.id} far fa-heart" 
                               tabindex="5" roles="button">
                              </i>
                            </div>
                          </div>
                        </div>  
                        `;
    // Assemblage de la template
    articleMedias.appendChild(divMedias);
    articleMedias.appendChild(divInfo);
    sectionMedias.appendChild(articleMedias);
    // Retour du média
    return divMedias;
  }
}
