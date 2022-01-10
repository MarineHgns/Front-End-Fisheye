export default class Modal {
  displayModal(data) {
    let modalBtn = document.querySelector(".ph-profile-btn");
    let closeBtn = document.querySelector(".close_btn");
    let modalbg = document.getElementById("contact_modal");

    modalBtn.addEventListener("click", launchModal);

    closeBtn.addEventListener("click", closeModal);

    function launchModal() {
      modalbg.style.display = "block";
      formPhotographerName(data);
    }

    function closeModal() {
      modalbg.style.display = "none";
      modalbg.setAttribute("aria-hidden", false);
    }

    // window.onclick = function (event) {
    //   if (event.target == modalbg) {
    //     modal.style.display = "none";
    //     modalbg.style.display = "none";
    //   }
    // };

    closeBtn.addEventListener("keyup", function (event) {
      if (event.code === "Enter") {
        closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        window.location.reload(true);
        closeModal();
      }
    });

    // Display du nom du photographe en haut du formulaire de contact
    function formPhotographerName(data) {
      let id = window.location.search.split("id=")[1];
      let photographers = !id
        ? data
        : data.filter((photographer) => photographer.id == id);

      let photographerName = document.getElementById("photo-name");
      let photographerNameTemplate = `<span tabindex="1" aria-label="${photographers[0].name}">${photographers[0].name}</span>`;
      photographerName.innerHTML = photographerNameTemplate;
    }
  }
}
