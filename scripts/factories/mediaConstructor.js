import ImageBuilder from "../factories/image.js";
import VideoBuilder from "../factories/video.js";
import Lightbox from "../pages/lightbox.js";

export default class MediaConstructor {
  displayMedia(photographerMedias) {
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
      });
    });
  }
}
