import {createApi} from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/store/api/axiosBaseQuery.js";

const playersApi = createApi({
    reducerPath: 'players',
    baseQuery: axiosBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints: (build) => {
        return {
            fetchPlayers: build.query({
                query: () => {
                    return {
                        url: '/player/all',
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const {useFetchPlayersQuery} = playersApi;
export {playersApi}