export default class VideoBuilder {
  displayVideo(video) {
    let videoGallery = `assets/photographers/${video.photographerId}`;
    const sectionMedias = document.getElementById("gallerie");
    let articleMedias = document.createElement("article");
    articleMedias.className = "article-media";

    const templateMedia = `
            <div class="card">
                <div class="card-photo">
                  <video controls="controls" class="photo-card-video" <source src="../${videoGallery}/${video.video}" type="video/mp4 </video>
                </div>
                <div class="paragraph-gallery">
                  <h3 class="card-title">${video.video}</h3>
                    <div class="number-likes">
                      <span class="like-number">${video.likes}</span>
                      <i class="likes like-${video.id}fas fa-heart likes" aria-label="likes" roles="button" aria-hidden="true"></i>
                    </div>
                </div>
            </div> 
            `;
    sectionMedias.appendChild(articleMedias);
    articleMedias.innerHTML = templateMedia;
  }
}
