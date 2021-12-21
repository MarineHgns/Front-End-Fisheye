import ApiFisheye from "./api/apiPhotographers.js";
import PhotographerFactory from "./homepage/homepage.js";
import ProfilPhotographer from "./pages/profilPhotographer.js";
import TotalLikes from "./pages/likes.js";
import addLikes from "./pages/likes.js";

function dispatch() {
  new ApiFisheye().getData().then((data) => {
    if (
      window.location.pathname.includes("/photographer.html") ||
      window.location.pathname.includes(
        "marinehgns.github.io/Huygensmarine_6_25112021-Front-End-Fisheye/photographer.html"
      )
    ) {
      ProfilPhotographer.displayProfilPhotographer(data);
      TotalLikes.BoxLikesPrices(data);
      new addLikes(data);
      return;
    }
    PhotographerFactory.getUserCardDOM(data);
  });
}

dispatch();
