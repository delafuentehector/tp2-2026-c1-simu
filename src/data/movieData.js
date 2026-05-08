import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";

// TODO (ejercicio 1): implementar paginación igual que en findAllUsers (ver src/data/userData.js)
// Recibe { page, limit } y retorna el array de películas de esa página
export async function findAllMovies({ page = 1, limit = 20, genre = null } = {}) {
    const db = getDb();
    const skip = (page - 1) * limit;
    let query = {}; 

    if (genre) {
        query.genres = genre;
    }
    const pelis = await db.collection("movies")
        .find(query)
        .skip(skip)
        .limit(limit)
        .toArray();
    return pelis;
}

// TODO (ejercicio 2): buscar una película por su _id usando new ObjectId(id)
// Retornar null si no existe
export async function findMovieById(id) {
    const db = getDb();
    const peli = await db.collection("movies").findOne({_id: new ObjectId(id)});
    return peli;
}

// TODO (ejercicio 4): traer las películas que ganaron al menos 1 premio
// Filtrar por: { "awards.wins": { $gt: 0 } }
// Ordenar por awards.wins de mayor a menor: .sort({ "awards.wins": -1 })
// Limitar a los primeros 10 resultados
export async function findAwardWinners() {

}

// TODO (ejercicio 5): buscar películas cuyo título contenga el texto recibido
// Usar expresión regular: { title: { $regex: query, $options: "i" } }
// El parámetro $options: "i" hace la búsqueda case-insensitive
// Limitar a 20 resultados
export async function findMoviesByTitle(query) {

}
