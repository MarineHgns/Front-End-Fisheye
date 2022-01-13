import ImageBuilder from "./image.js";
import VideoBuilder from "./video.js";
import Lightbox from "../pages/lightbox.js";
export default class MediaConstructor {
  //en fonction du type (image ou vidéo) déclanche le Builder approprié
  displayMedia(photographerMedias) {
    let boxLightbox = document.getElementById("lightbox_modal");
    photographerMedias.map((media, index) => {
      let articleMedia;

      if (media.image) {
        articleMedia = new ImageBuilder().displayImage(media);
      }
      if (media.video) {
        articleMedia = new VideoBuilder().displayVideo(media);
      }
      // au click/ou enter sur un media -> ouvre la lightbox + focus dessus
      articleMedia.addEventListener("click", () => {
        new Lightbox(photographerMedias, index);
        new focusLightbox();
      });

      articleMedia.addEventListener("keyup", function (event) {
        if (event.code === "Enter") {
          new Lightbox(photographerMedias, index);
          new focusLightbox();
        }
      });
      // gère le focus de la lightbox
      function focusLightbox() {
        document.body.style.visibility = "hidden";
        boxLightbox.style.visibility = "visible";
        boxLightbox.focus();
      }
    });
  }
}
