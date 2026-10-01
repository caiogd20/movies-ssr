import "server-only";
import axios from "axios"

const apiToken = process.env.TMDB_API_READ_ACCESS_TOKEN;

if (!apiToken) {
    throw new Error("Missing TMDB_API_READ_ACCESS_TOKEN environment variable");
}

export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        Authorization: `Bearer ${apiToken}`
    }
})