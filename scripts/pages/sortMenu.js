export default class DropDownMenu {
  dropDown(photographerMedias) {
    photographerMedias;
    let popBtn = document.querySelector(".pop");
    let dateBtn = document.querySelector(".date");
    let titleBtn = document.querySelector(".title");
    console.log(popBtn);

    function sortDate(a, b) {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
    }

    function sortPop(a, b) {
      if (a.likes > b.likes) return -1;
      if (a.likes < b.likes) return 1;
      alert("ok pop");
      return 0;
    }

    function sortTitle(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      alert("ok titre");
      return 0;
    }

    popBtn.addEventListener("click", sortPop);
    dateBtn.addEventListener("click", sortDate);
    titleBtn.addEventListener("click", sortTitle);

    photographerMedias.sort(sortDate);
    // console.log(photographerMedias);
  }
}
