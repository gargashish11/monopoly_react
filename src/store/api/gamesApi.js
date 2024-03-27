import {createApi} from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/store/api/axiosBaseQuery.js";

const gamesApi = createApi({
    reducerPath: 'games',
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints(build) {
        return {
            fetchGames: build.query({
                query: () => {
                    return {
                        url: '/game/all',
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const {useFetchGamesQuery} = gamesApi;
export {gamesApi}