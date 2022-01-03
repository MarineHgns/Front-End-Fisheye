export default class AddLike {
  static BtnAdd(data) {
    let media = data.media;
    let id = media.map((a) => a.id);
    let mediaGallery = document.getElementById("gallerie");
    let counterLikesCard = document.querySelectorAll(".like-number");
    // console.log(counterLikesCard);

    mediaGallery.addEventListener("click", (e) => {
      // console.log(e.target.dataset.id);
      // console.log(e.target);
      let classListTarget =
        typeof e.target.classList === "undefined"
          ? []
          : e.target.classList.value.split(" ");
      let hasClassBtn = -1 != classListTarget.indexOf("add-likes");

      if (hasClassBtn) {
        let totalLikes = parseInt(counterLikesCard.innerHTML);
        let counterLike = document.querySelector(".total_likes_counter");
        let likeValue = parseInt(counterLike.innerHTML);
        let isLiked = -1 != classListTarget.indexOf("isLiked");

        counterLikesCard.innerHTML = isLiked ? --totalLikes : ++totalLikes;
        counterLike.innerHTML = isLiked ? --likeValue : ++likeValue;

        if (isLiked) {
          e.target.classList.remove("isLiked");
          e.target.classList.replace("fas", "far");
        } else {
          e.target.classList.add("isLiked");
          e.target.classList.replace("far", "fas");
        }
      }
    });
  }
}
