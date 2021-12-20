function counterLikes(media) {
  const { id, photographerId, likes, price } = media;
  console.log(media);
  //list media selon id
  function TotalLikesDOM() {
    const $wrapper = document.getElementById("box-likes-prices");
    console.log($wrapper);
    let cardTotalLikes = "";

    cardTotalLikes += `<div class="total_likes">`;

    cardTotalLikes += `<h3 class="total_likes_txt">${likes}</h3>`;

    cardTotalLikes += `<i class="fas fa-heart"></i>`;

    cardTotalLikes += ` </div>
    <div class="price">
    <p>${price}&euro; / jour</p>
    </div>
    `;

    $wrapper.innerHTML = cardTotalLikes;
    return $wrapper;
  }
  return {
    id,
    photographerId,
    likes,
    price,
    TotalLikesDOM,
  };
}
