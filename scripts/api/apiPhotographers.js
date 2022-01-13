// fetch des données du fichier "data/photographers.json"
export default class ApiFisheye {
  async getData() {
    let url = "data/photographers.json";
    let response = await fetch(url);
    let data = await response.json();

    const dataPhotographers = [...data.photographers];
    const dataMedias = [...data.media];

    // avertissement en cas d'erreur lors de l'import
    if (!response.ok) {
      throw Error(`Erreur lors de l'import: ${response}`);
    }
    // retour des deux array (les deux parties du fichier json)
    return {
      photographers: dataPhotographers,
      media: dataMedias,
    };
  }
}
