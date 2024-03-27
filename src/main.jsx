import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AllGames, Error, HomeLayout, Landing, NewGame, SinglePageError} from "@/pages/index.js";
import {Providers} from "@/components/index.js";
import {Provider} from "react-redux";
import {store} from "@/store/index.js";

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
                element: <AllGames/>,
                errorElement: <SinglePageError/>
            },
            {
                path: '/game/new',
                element: <NewGame/>,
                errorElement: <SinglePageError/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Providers>
                <RouterProvider router={router}>
                    <App/>
                </RouterProvider>
            </Providers>
        </Provider>
    </React.StrictMode>,
)
