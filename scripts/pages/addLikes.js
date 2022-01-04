export default class AddLike {
  static BtnAdd() {
    const clickLikes = document.querySelectorAll(".add-likes");
    for (const clicks of clickLikes) {
      clicks.addEventListener("click", (e) => {
        let siblingClick = clicks.previousElementSibling;
        let counterLikesCard = siblingClick;
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

          siblingClick.innerHTML = isLiked ? --totalLikes : ++totalLikes;
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
}
