// import allLikes from "../factories/mediaConstructor.js";
export default class TotalLikes {
  static BoxLikesPrices(data) {
    let photographersData = data.photographers;
    let photographerMedias = data.media;

    let allLikes = 0;

    let id = window.location.search.split("id=")[1];
    let photographers = !id
      ? photographersData
      : photographersData.filter((photographer) => photographer.id == id);

    let photographerId = window.location.search.split("id=")[1];
    photographerMedias = !photographerId
      ? photographerMedias
      : photographerMedias.filter(
          (photographer) => photographer.photographerId == photographerId
        );

    photographerMedias.forEach((element) => {
      allLikes += parseInt(element.likes);
    });

    photographers.map((photographer) => {
      photographers = photographer;

      let box = document.querySelector("#box-likes-prices");
      let templateBoxLikesPrices = `<div class="total_likes"> 
                                  <h3 class="total_likes_txt">${allLikes}<i class="fas fa-heart"></i></h3>
                                  </div>
                                  <div class="price">
                                  <p>${photographers.price}&euro; / jour</p>
                                  </div>`;
      box.innerHTML = templateBoxLikesPrices;
    });
  }
}

// export async function addLikes() {
//   let btnLiked = document.getElementsByClassName("like-number");
//   console.log(btnLiked);
//   btnLiked.addEventListener("click", liked);

//   function liked() {
//     btnLiked.target.classList.replace("fas", "far");
//   }
// }

// addLikes();
