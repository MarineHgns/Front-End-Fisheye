import ImageBuilder from "../factories/image.js";
import VideoBuilder from "../factories/video.js";
import Lightbox from "./lightbox.js";

export default class MediaConstructor {
  displayMedia(photographerMedias) {
    photographerMedias.map((media) => {
      if (media.image) {
        new Lightbox().displayLightbox(media);
        new ImageBuilder().displayImage(media);
        return;
      }
      if (media.video) {
        new Lightbox().displayLightbox(media);
        new VideoBuilder().displayVideo(media);
        return;
      }
    });
  }
}
