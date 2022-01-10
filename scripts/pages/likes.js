// Création de la box des likes
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
      let templateBoxLikesPrices = `
                                  <div class="total_likes"> 
                                    <h3 class="total_likes_counter" tabindex="5" aria-label="${allLikes} likes">${allLikes}
                                    </h3>
                                      <i class="fas fa-heart">
                                      </i>
                                  </div>
                                  <div class="price">
                                    <p tabindex="5" aria-label="${photographers.price}euro">${photographers.price}&euro; / jour
                                    </p>
                                  </div>
                                  `;
      box.innerHTML = templateBoxLikesPrices;
    });
  }
}
