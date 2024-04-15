import axios from "axios";

const gamesApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const getGames = async ({signal}) => {
    const response = gamesApi.get("/game/all", signal)
    return (await response).data
}

export const getSingleGame = async ({signal, id}) => {
    const response = gamesApi.get(`/game/${id}`, signal)
    return (await response).data
}

export const addGame = async (gameData) => {
    return await gamesApi.post("/game/new", gameData)
}

export const saveGame = async (gameData) => {
    return await gamesApi.put("/game/save", gameData)
}