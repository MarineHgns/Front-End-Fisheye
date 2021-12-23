export default class VideoBuilder {
  displayVideo(video) {
    let videoGallery = `assets/photographers/${video.photographerId}`;
    const sectionMedias = document.getElementById("gallerie");
    let articleMedias = document.createElement("article");
    articleMedias.className = "article-media";

    const templateMedia = `
            <div class="card">
            <div class="item-media" id="vid${video.id}">
            <a href="#" class="media_link" data-mediaid="${video.id}" role="button" aria-label="${video.alt}">
                <video controls="controls" class="photo-card-video" src="../${videoGallery}/${video.video}" type="mp4"> </video>
                </a>
                </div>
                <span class="paragraph-gallery photograph-catalog-txt">
                  <span class="card-title video-title">${video.title}</span>
                  
                    <span class="number-likes">
                      <span class="like-number  id="number-${video.id}">${video.likes}</span>
                      <i class="add-likes like-${video.id} far fa-heart likes" aria-label="likes" roles="button" aria-hidden="true"></i>
                   </span>
                      </span>
            </div> 
            `;
    sectionMedias.appendChild(articleMedias);
    articleMedias.innerHTML = templateMedia;
  }
}
