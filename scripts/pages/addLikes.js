export default class AddLike {
  static BtnAdd() {
    const clickLikes = document.querySelectorAll(".add-likes");
    // Transforme le coeur et ajoute/soustrait 1 du compteur media et du compteur box
    for (const clicks of clickLikes) {
      let siblingClick = clicks.previousElementSibling;
      let counterLikesCard = siblingClick;
      let totalLikes = parseInt(counterLikesCard.innerHTML);
      let counterLike = document.querySelector(".total_likes_counter");
      let likeValue = parseInt(counterLike.innerHTML);

      //au click sur le coeur
      clicks.addEventListener("click", (e) => {
        let classListTarget =
          typeof e.target.classList === "undefined"
            ? []
            : e.target.classList.value.split(" ");
        let isLiked = -1 != classListTarget.indexOf("isLiked");

        let hasClassBtn = -1 != classListTarget.indexOf("add-likes");
        if (hasClassBtn) {
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

      // au enter sur le coeur
      clicks.addEventListener("keyup", (e) => {
        if (e.code === "Enter") {
          let classListTarget =
            typeof e.target.classList === "undefined"
              ? []
              : e.target.classList.value.split(" ");

          let hasClassBtn = -1 != classListTarget.indexOf("add-likes");
          if (hasClassBtn) {
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
        }
      });
    }
  }
}
