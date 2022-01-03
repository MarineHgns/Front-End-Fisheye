import ApiFisheye from "./api/apiPhotographers.js";
import PhotographerFactory from "./homepage/homepage.js";
import ProfilPhotographer from "./pages/profilPhotographer.js";
import TotalLikes from "./pages/likes.js";
import AddLikes from "./pages/addLikes.js";
function dispatch() {
  new ApiFisheye().getData().then((data) => {
    if (window.location.pathname.includes("/photographer.html")) {
      ProfilPhotographer.displayProfilPhotographer(data);
      TotalLikes.BoxLikesPrices(data);
      AddLikes.BtnAdd(data);

      return;
    }
    PhotographerFactory.getUserCardDOM(data);
  });
}

dispatch();
