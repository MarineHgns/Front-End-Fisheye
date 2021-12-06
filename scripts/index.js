import ApiFisheye from "./api/apiPhotographers.js";
import PhotographerFactory from "./homepage/homepage.js";
import ProfilPhotographer from "./pages/profilPhotographer.js";

function dispatch() {
  new ApiFisheye().getData().then((data) => {
    if (window.location.pathname.includes("/photographer.html")) {
      ProfilPhotographer.displayProfilPhotographer(data);
      return;
    }
    PhotographerFactory.getUserCardDOM(data);
  });
}

dispatch();
