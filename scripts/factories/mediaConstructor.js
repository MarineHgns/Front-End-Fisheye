import ImageBuilder from "../factories/image.js";
import VideoBuilder from "../factories/video.js";
import Lightbox from "../pages/lightbox.js";
export default class MediaConstructor {
  displayMedia(photographerMedias) {
    photographerMedias.map((media) => {
      if (media.image) {
        new ImageBuilder().displayImage(media);

        new Lightbox().displayLightbox(media);
        return;
      }
      if (media.video) {
        new VideoBuilder().displayVideo(media);
        new Lightbox().displayLightbox(photographerMedias);
        return;
      }
    });
  }
}
