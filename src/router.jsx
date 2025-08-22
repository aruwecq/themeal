import { createBrowserRouter } from "react-router-dom"
import React from 'react'
import Home from "./pages/Home"
import Layout from "./components/Layout/Layout"
import About from "./pages/About"
import Search from "./pages/Search"
import MealDeteail from "./pages/MealDeteail"
import CountryFood from "./pages/CountryFood"
import Alphabet from "./pages/Alphabet"

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            }, {
                path: "about",
                element: < About />
            },
            {
                path: "search/:title",
                element: < Search />
            }, {
                path: "mealdeteail/:id",
                element: < MealDeteail />
            },
            {
                path: "food/:area",
                element: <CountryFood />
            },
            
            {
                path: "alphabet/:letter",
                element: <Alphabet />
            },



        ]

    },

])
export default myRouter 