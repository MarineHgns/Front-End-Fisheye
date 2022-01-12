export default class Modal {
  displayModal(data) {
    let modalBtn = document.querySelector(".ph-profile-btn");
    let closeBtn = document.querySelector(".close_btn");
    let modalbg = document.getElementById("contact_modal");

    // Ouverture modale + fonction display nom photographe
    function launchModal() {
      modalbg.style.display = "block";
      formPhotographerName(data);
    }

    // Fermeture modale
    function closeModal() {
      modalbg.style.display = "none";
      modalbg.setAttribute("aria-hidden", false);
    }

    // Fermeture de la modale au click, echap et enter
    closeBtn.addEventListener("click", closeModal);

    closeBtn.addEventListener("keyup", function (event) {
      if (event.code === "Enter") {
        closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    });

    //Ouverture modale au click
    modalBtn.addEventListener("click", launchModal);
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
