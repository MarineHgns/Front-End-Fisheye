export default class VideoBuilder {
  displayVideo(video) {
    let videoTitle = video.video;
    videoTitle = videoTitle.replaceAll("_", " ");
    videoTitle = videoTitle.replace(".mp4", "");
    let videoGallery = `assets/photographers/${video.photographerId}`;
    const sectionMedias = document.getElementById("gallerie");
    let articleMedias = document.createElement("article");
    articleMedias.className = "article-media";

    const templateMedia = `
            <div class="card">
            <div class="item-media" id="test">
                <video controls="controls" class="photo-card-video" src="../${videoGallery}/${video.video}" type="mp4"> </video>
                </div>
                <span class="paragraph-gallery">
                  <h3 class="card-title video-title">${videoTitle}</h3>
                    <div class="number-likes">
                      <span class="like-number like-number-video">${video.likes}
                      <i class="add-likes like-${video.id} far fa-heart likes" aria-label="likes" roles="button" aria-hidden="true"></i></span>
                  </span>
                  </div>
                </div>
            </div> 
            `;
    sectionMedias.appendChild(articleMedias);
    articleMedias.innerHTML = templateMedia;
  }
}
