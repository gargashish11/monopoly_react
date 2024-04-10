import {createApi} from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/store/api/axiosBaseQuery.js";

const gamesApi = createApi({
    reducerPath: 'games',
    baseQuery: axiosBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
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
            }),
            newGame: build.mutation({
                query: (values) => {
                    return {
                        url: '/game/new',
                        method: 'POST',
                        data: {
                            ...values
                        },
                    }
                }
            })
        }
    }
})

export const {useFetchGamesQuery, useNewGameMutation} = gamesApi;
export {gamesApi}