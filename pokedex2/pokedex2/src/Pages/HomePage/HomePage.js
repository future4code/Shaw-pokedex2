import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../../constants/baseurl"
import PokemonThumb from "./PokemonThumb";
import "./style.css"
import {goToPokedexPage} from "../../Router/coordinator"
import LogoPokemon from "../../img/logoPokemon.png"

export default function HomePage() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState(`${BASE_URL}?limit=20`)

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
    

    

    function createPokemonObject(result) {
      let pokemonList = []
      result.forEach(async (pokemon) => {
        const res = await fetch(`${BASE_URL}/${pokemon.name}`)
        const data = await res.json()
        pokemonList.push(data) 

      
       setAllPokemons(pokemonList)
      })
      
     
    }
   

   
    createPokemonObject(data.results)
  }
   allPokemons.length > 0 && console.log(allPokemons)
  useEffect(() => { 
  getAllPokemons() 
  },[])

  
 console.log(loadMore)
  

  const navigate = useNavigate();
  return (
    <div className="app-container">
      <div className="header" >
        <button className="Button-header" onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
        <img className="logo" src={LogoPokemon}/>
      </div>
      
      <div  className="pokemon-container">

        <div className="all-containers">
         {allPokemons
          .sort((currentPokemon, nextPokemon) => {
            return currentPokemon.id - nextPokemon.id
          })
          .map((pokemon) =>
            <PokemonThumb
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              // key={pokemon.id}
            />
          )}
        </div>

        <button className="load-more" onClick={() => getAllPokemons()}>carregar Mais</button>
      </div>
    </div>

  )
}