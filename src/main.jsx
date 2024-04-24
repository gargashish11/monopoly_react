import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Error, Game, HomeLayout, Landing, NewGame, RecentGames, SinglePageError} from "@/pages/index.js";
import {Providers} from "@/components/index.js";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";
import {store} from "@/store/index.js";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing/>,
                errorElement: <SinglePageError/>
            },
            {
                path: '/game/all',
                element: <RecentGames/>,
                errorElement: <SinglePageError/>
            },
            {
                path: '/game/new',
                element: <NewGame/>,
                errorElement: <SinglePageError/>
            },
            {
                path: '/game/:id',
                element: <Game/>,
                errorElement: <SinglePageError/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Providers>
                    <RouterProvider router={router}>
                        <App/>
                    </RouterProvider>
                </Providers>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
)
