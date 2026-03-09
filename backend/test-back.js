import { AllArtiste, AllSceneNom, AlphabArtiste, InfoArtiste, InfoScene, ArtisteIdScene, ArtisteNomScene, AjoutModif } from "./backend.mjs";
/*
try {
    const record = await AllArtiste();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/
/*
try {
    const records = await AllSceneNom();
    console.log("AllSceneNom:", JSON.stringify(records, null, 2));
} catch (e) { console.error(e); }
*/
/*
try {
    const records = await AlphabArtiste();
    console.log("AlphabArtiste:", JSON.stringify(records, null, 2));
} catch (e) { console.error(e); }
*/
/*
try {
    const record = await InfoArtiste("sxrtpb2jkawog8l");
    console.log("InfoArtiste:", JSON.stringify(record, null, 2));
} catch (e) { console.error(e); }
*/
/*
try {
    const record = await InfoScene("jaci9kk50hys7xr");
    console.log("InfoScene:", JSON.stringify(record, null, 2));
} catch (e) { console.error(e); }
*/
/*
try {
    const records = await ArtisteIdScene("jaci9kk50hys7xr");
    console.log("ArtisteIdScene:", JSON.stringify(records, null, 2));
} catch (e) { console.error(e); }
*/
/*
try {
    const records = await ArtisteNomScene("Denfert-Rochereau");
    console.log("ArtisteNomScene:", JSON.stringify(records, null, 2));
} catch (e) { console.error(e); }
*/

try {
    const record = await AjoutModif("artiste", {
        nom: "Artiste Test",
        genre_musical: "Pop",
        description: "Un artiste de test"
    });
    console.log("AjoutModif (ajout):", JSON.stringify(record, null, 2));
} catch (e) { console.error(e); }
