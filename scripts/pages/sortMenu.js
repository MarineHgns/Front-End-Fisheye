import MediaConstructor from "../constructor/mediaConstructor.js";
import AddLike from "./addLikes.js";
export default class DropDownMenu {
  dropDown(photographerMedias) {
    photographerMedias;
    let dopdownMenu = document.getElementById("dropdownMenu");

    // Tri - au click d'un des filtres (Popularité, Date, Titre) => lance la fonction
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

    // Tri par Date
    function sortDate(a, b) {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    }

    // Tri par nombre de likes
    function sortPop(a, b) {
      if (a.likes > b.likes) return -1;
      if (a.likes < b.likes) return 1;
      return 0;
    }

    // Tri par titre
    function sortTitle(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }

    // Vide la gallerie et incorpore les médias triés à l'aide de la fonction choisie
    function displaySortMedias(photographerMediasSorted) {
      document.getElementById("gallerie").innerHTML = "";
      new MediaConstructor().displayMedia(photographerMediasSorted);
      AddLike.BtnAdd();
    }
  }
}
