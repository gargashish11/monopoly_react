import axios from "axios";

const playersApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const getPlayers = async () => {
    const response = await playersApi.get("/player/all")
    return (await response).data;
}