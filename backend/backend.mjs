import PocketBase from "pocketbase";
const pb = new PocketBase('https://fanfacomtoise.louiselangenfeld.fr');
export {pb};

export async function AllArtiste() {
    const records = await pb.collection("artiste").getFullList({
        sort: "date_representation"
    });
    return records;
}

export async function AllSceneNom() {
    const records = await pb.collection("scene").getFullList({
        sort: "nom_scene"
    });
    return records;
}

export async function AlphabArtiste() {
    const records = await pb.collection("artiste").getFullList({
        sort: "nom"
    });
    return records;
}

export async function InfoArtiste(id) {
    const record = await pb.collection("artiste").getOne(id);
    return record;
}

export async function InfoScene(id) {
    const record = await pb.collection("scene").getOne(id);
    return record;
}

export async function ArtisteIdScene(idScene) {
    const records = await pb.collection("artiste").getFullList({
        filter: `scenes ~ "${idScene}"`,
        sort: "date_representation"
    });
    return records;
}

export async function ArtisteNomScene(nomScene) {
    const scenes = await pb.collection("scene").getFullList({
        filter: `nom_scene = "${nomScene}"`
    });
    if (scenes.length === 0) return [];
    const idScene = scenes[0].id;
    const records = await pb.collection("artiste").getFullList({
        filter: `scenes ~ "${idScene}"`,
        sort: "date_representation"
    });
    return records;
}

export async function AjoutModif(collection, data, id = null) {
    if (id) {
        const record = await pb.collection(collection).update(id, data);
        return record;
    } else {
        const record = await pb.collection(collection).create(data);
        return record;
    }
}

/*3. Dev*/
/**
 * Récupère l'URL d'une image depuis PocketBase
 * @param {Object} record - Le record contenant l'image
 * @param {string} imageField - Le champ du record contenant le nom du fichier
 * @returns {string|null} L'URL de l'image ou null si le fichier n'existe pas
 */
export function getImageUrl(record, imageField) {
    if (!record[imageField]) return null;
    return pb.files.getURL(record, record[imageField]);
}

export async function getArtisteById(id) {
    const record = await pb.collection("artiste").getOne(id);
    return record;
}

export function formatSceneDate(dateValue) {
    if (!dateValue) return "Date inconnue";

    const date = new Date(dateValue);

    if (isNaN(date.getTime())) return "Date invalide";

    return date.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
