import ApiFisheye from "./api/apiPhotographers.js";
import PhotographerFactory from "./homepage/homepage.js";
import ProfilPhotographer from "./pages/profilPhotographer.js";
import TotalLikes from "./pages/likes.js";
import { IsLiked } from "./pages/likes.js";

function dispatch() {
  new ApiFisheye().getData().then((data) => {
    if (window.location.pathname.includes("/photographer.html")) {
      ProfilPhotographer.displayProfilPhotographer(data);
      TotalLikes.BoxLikesPrices(data);
      IsLiked.AddLike(data);
      return;
    }
    PhotographerFactory.getUserCardDOM(data);
  });
}

dispatch();
