export default class AddLike {
  static BtnAdd() {
    const clickLikes = document.querySelectorAll(".add-likes");
    let counterLikesCard = document.querySelector(".like-number");

    for (const clickHeart of clickLikes) {
      clickHeart.addEventListener("click", (e) => {
        let classListTarget =
          typeof e.target.classList === "undefined"
            ? []
            : e.target.classList.value.split(" ");
        let hasClassBtn = -1 != classListTarget.indexOf("add-likes");
        if (hasClassBtn) {
          let totalLikes = parseInt(
            document.getElementsByClassName("like-number").innerHTML
          );

          let counterLike = document.querySelector(".total_likes_counter");
          let likeValue = parseInt(counterLike.innerHTML);
          let isLiked = -1 != classListTarget.indexOf("isLiked");

          clickLikes.innerHTML = isLiked ? --totalLikes : ++totalLikes;
          counterLike.innerHTML = isLiked ? --likeValue : ++likeValue;

          if (isLiked) {
            e.target.classList.remove("isLiked");
            e.target.classList.replace("fas", "far");
            counterLikesCard.innerHTML =
              parseInt(counterLikesCard.innerHTML) - 1;
          } else {
            e.target.classList.add("isLiked");
            e.target.classList.replace("far", "fas");
            counterLikesCard.innerHTML =
              parseInt(counterLikesCard.innerHTML) + 1;
          }
        }
      });
    }
  }
}
