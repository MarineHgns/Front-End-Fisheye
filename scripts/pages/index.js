import { photographerFactory } from "../factories/photographer.js";

async function getPhotographers() {
  let url = "./data/photographers.json";
  let response = await fetch(url);
  let data = await response.json();

  const dataPhotographers = [...data.photographers];
  const dataMedias = [...data.media];

  return {
    photographers: dataPhotographers,
    media: dataMedias,
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
