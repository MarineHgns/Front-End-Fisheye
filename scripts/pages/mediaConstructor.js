import ImageBuilder from "../factories/image.js";
import VideoBuilder from "../factories/video.js";
export default class MediaConstructor {
  displayMedia(photographerMedias) {
    photographerMedias.map((media) => {
      if (media.image) {
        return new ImageBuilder().displayImage(media);
      }
      if (media.video) {
        return new VideoBuilder().displayVideo(media);
      }
    });
  }
}
