import {configureStore} from "@reduxjs/toolkit";
import {gamesApi} from "@/store/api/gamesApi.js";
import {setupListeners} from "@reduxjs/toolkit/query";
import {playersApi} from "@/store/api/playersApi.js";

export const store = configureStore({
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer,
        [playersApi.reducerPath]: playersApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat([gamesApi.middleware, playersApi.middleware])
    }
})

setupListeners(store.dispatch)
export {useFetchGamesQuery, useNewGameMutation} from './api/gamesApi'
export {useFetchPlayersQuery} from './api/playersApi'