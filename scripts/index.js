import ApiFisheye from "./api/apiPhotographers.js";
import PhotographerFactory from "./homepage/homepage.js";
import ProfilPhotographer from "./pages/profilPhotographer.js";
import MediaConstructor from "./pages/mediaConstructor.js";
import Modal from "./pages/modal.js";

function dispatch() {
  new ApiFisheye().getData().then((data) => {
    if (window.location.pathname.includes("/photographer.html")) {
      ProfilPhotographer.displayProfilPhotographer(data);
      MediaConstructor.displayMedia(data);
      Modal().displayModal(data);
      return;
    }
    PhotographerFactory.getUserCardDOM(data);
  });
}

dispatch();
