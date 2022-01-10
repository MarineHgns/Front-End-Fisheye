// fetch des données du fichier "data/photographers.json"
export default class ApiFisheye {
  async getData() {
    let url = "data/photographers.json";
    let response = await fetch(url);
    let data = await response.json();

    const dataPhotographers = [...data.photographers];
    const dataMedias = [...data.media];

    if (!response.ok) {
      throw Error(`Erreur lors de l'import: ${response}`);
    }

    return {
      photographers: dataPhotographers,
      media: dataMedias,
    };
  }
}
