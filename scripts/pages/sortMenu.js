import MediaConstructor from "../factories/mediaConstructor.js";
import AddLike from "./addLikes.js";
import TotalLikes from "./likes.js";
export default class DropDownMenu {
  dropDown(photographerMedias) {
    photographerMedias;
    let dopdownMenu = document.getElementById("dropdownMenu");

    dopdownMenu.addEventListener("change", function () {
      let dopdownMenuValue = dopdownMenu.value;
      let photographerMediasSorted = [];
      if (dopdownMenuValue === "date") {
        photographerMediasSorted = photographerMedias.sort((a, b) =>
          sortDate(a, b)
        );
      } else if (dopdownMenuValue === "popularité") {
        photographerMediasSorted = photographerMedias.sort((a, b) =>
          sortPop(a, b)
        );
      } else if (dopdownMenuValue === "titre") {
        photographerMediasSorted = photographerMedias.sort((a, b) =>
          sortTitle(a, b)
        );
      }

      new displaySortMedias(photographerMediasSorted);
    });

    function sortDate(a, b) {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    }

    function sortPop(a, b) {
      if (a.likes > b.likes) return -1;
      if (a.likes < b.likes) return 1;
      return 0;
    }

    function sortTitle(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }

    function displaySortMedias(photographerMediasSorted) {
      document.getElementById("gallerie").innerHTML = "";
      new MediaConstructor().displayMedia(photographerMediasSorted);
      AddLike.BtnAdd();
    }
  }
}
