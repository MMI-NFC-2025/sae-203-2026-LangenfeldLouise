import PocketBase from "pocketbase";
const pb = new PocketBase('http://127.0.0.1:8090');

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