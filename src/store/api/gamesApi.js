import axios from "axios";

const gamesApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const getGames = async () => {
    const response = gamesApi.get("/game/all")
    return (await response).data
}