import ImageBuilder from "./image.js";
import VideoBuilder from "./video.js";
import Lightbox from "../pages/lightbox.js";
export default class MediaConstructor {
  displayMedia(photographerMedias) {
    // let boxLightbox = document.getElementById("lightbox_modal");
    photographerMedias.map((media, index) => {
      let articleMedia;

      if (media.image) {
        articleMedia = new ImageBuilder().displayImage(media);
      }
      if (media.video) {
        articleMedia = new VideoBuilder().displayVideo(media);
      }

      articleMedia.addEventListener("click", () => {
        new Lightbox(photographerMedias, index);
        // boxLightbox.focus();
      });
      articleMedia.addEventListener("keyup", function (event) {
        if (event.code === "Enter") {
          new Lightbox(photographerMedias, index);
        }
      });
    });
  }
}
