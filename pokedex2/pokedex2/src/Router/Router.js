import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailPage from "../Pages/DetailPage/DetailPage";
import HomePage from "../Pages/HomePage/HomePage";
import Pokedex from "../Pages/Pokedex/Pokedex";



export default function Router(){
    return(
        <BrowserRouter>
        

            <Routes>

                <Route index element={<HomePage/>}  />

                <Route path="/pokedex" element={<Pokedex/>} />

                <Route path="/details/:id" element={<DetailPage/>} />

            

            </Routes>

        
        </BrowserRouter>
    )
}