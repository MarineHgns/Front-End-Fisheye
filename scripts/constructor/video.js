export default class VideoBuilder {
  displayVideo(video) {
    // Chemin pour récupérer les vidéos de chaque photographe = ../assets/photographers/..""
    let imageGallery = `assets/photographers/${video.photographerId}`;
    // Création de la carte du média via template
    const sectionMedias = document.getElementById("gallerie");
    let articleMedias = document.createElement("article");
    let divMedias = document.createElement("div");
    let divInfo = document.createElement("div");
    articleMedias.className = "article-media";
    // Partie chemin média
    divMedias.innerHTML = `
                          <video class="itemMedia" tabindex="5" alt="${video.alt}" aria-label="${video.alt}" 
                            source src="../${imageGallery}/${video.video}" type="video/mp4">
                          </video>
                          `;
    // Partie info titre et likes
    divInfo.innerHTML = `
                          <div class="paragraph-gallery">
                            <h3 class="card-title" tabindex="5">${video.title}
                            </h3>
                              <div class="number-likes">
                                <span class="like-number" tabindex="5">${video.likes}
                                </span>
                                  <i class="add-likes like-${video.id} far fa-heart " aria-label="cliquez pour liker" 
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
