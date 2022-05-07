import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import {goToHomePage} from "../../Router/coordinator"
import LogoPokemon from "../../img/logoPokemon.png"


export default function Pokedex() {

    const navigate = useNavigate();
    return(
        <div className="header" >
        <button className="Button-header" onClick={() => goToHomePage(navigate)}>Voltar para lista de pokemon</button>
        <img className="logo" src={LogoPokemon}/>
      </div>
   
      
    )
}