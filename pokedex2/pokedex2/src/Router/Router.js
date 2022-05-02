import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailPage from "../Pages/DetailPage/DetailPage";
import HomePage from "../Pages/HomePage/HomePage";
import Pokedex from "../Pages/Pokedex/Pokedex";
import styled from "@emotion/styled";

const GlobalContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
`

export default function Router(){
    return(
        <BrowserRouter>
        <GlobalContainer>

        <Routes>

            <Route index element={<HomePage/>}  />

            <Route path="/pokedex" element={<Pokedex/>} />

            <Route path="/detail/page" element={<DetailPage/>} />

          

        </Routes>

        </GlobalContainer>
        </BrowserRouter>
    )
}