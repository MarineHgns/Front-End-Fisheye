export default class VideoBuilder {
  displayVideo(video) {
    let imageGallery = `assets/photographers/${video.photographerId}`;
    const sectionMedias = document.getElementById("gallerie");
    let articleMedias = document.createElement("article");
    let divMedias = document.createElement("div");
    let divInfo = document.createElement("div");
    articleMedias.className = "article-media";

    divMedias.innerHTML = `
                            <video controls class="itemMedia" source src="../${imageGallery}/${video.video}" type="video/mp4"></video>`;

    divInfo.innerHTML = `
        <div class="paragraph-gallery">
          <h3 class="card-title">${video.title}</h3>
            <div class="number-likes">
                <span class="like-number">${video.likes}</span>
                <i class="add-likes like-${video.id} far fa-heart " aria-label="likes" roles="button" aria-hidden="true"></i>
            </div>
        </div>  `;

    articleMedias.appendChild(divMedias);
    articleMedias.appendChild(divInfo);
    sectionMedias.appendChild(articleMedias);

    return divMedias;
  }
}
