export default class Modal {
  displayModal(data) {
    let modalBtn = document.querySelector(".ph-profile-btn");
    let closeBtn = document.querySelector(".close_btn");
    let modalbg = document.getElementById("contact_modal");

    function launchModal() {
      modalbg.style.display = "block";
      formPhotographerName(data);
    }

    modalBtn.addEventListener("click", launchModal);

    closeBtn.addEventListener("click", closeModal);

    function closeModal() {
      modalbg.style.display = "none";
      modalbg.setAttribute("aria-hidden", false);
    }

    window.onclick = function (event) {
      if (event.target == modalbg) {
        modalbg.style.display = "none";
      }
    };

    function formPhotographerName(data) {
      let id = window.location.search.split("id=")[1];
      let photographers = !id
        ? data
        : data.filter((photographer) => photographer.id == id);
      let photographerName = document.getElementById("photo-name");
      let photographerNameTemplate = `${photographers[0].name}`;
      photographerName.innerHTML = photographerNameTemplate;
    }
  }
}
