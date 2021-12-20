// import ImageBuilder from "../factories/image.js";
// import MediaConstructor from "./mediaConstructor.js";

// import MediaConstructor from "./mediaConstructor.js";
export default class SortMenu {
  displayResults(photographerMedias) {
    let medias = photographerMedias;
    // console.log(medias[0]);
    let btnDate = document.querySelector(".date");
    let btnPopularity = document.querySelector(".popularity");

    function byDate() {
      medias.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    }

    btnDate.addEventListener("click", byDate);
    // console.log(medias);

    // function byPopularity(x, y) {
    //   return y - x;
    // }
    // likes.sort(byPopularity);
    // btnPopularity.addEventListener("click", byPopularity);
  }
}
