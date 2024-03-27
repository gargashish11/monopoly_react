import {configureStore} from "@reduxjs/toolkit";
import {gamesApi} from "@/store/api/gamesApi.js";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(gamesApi.middleware)
    }
})

setupListeners(store.dispatch)
export {useFetchGamesQuery} from './api/gamesApi'