import { Button, Container, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ConatinerImg, ContainerButton, ContainerPai, Header, Main } from "./styled"
import { BASE_URL } from "../../constants/baseurl";
import { useEffect } from "react";

export default function HomePage(){

    const [pokeName, setPokeName] = useState([])
    const [pokePhoto, setPokePhoto] = useState([])
    const [url, setUrl] = useState("")


    const getPokemon = () =>{
        axios.get(`${BASE_URL}/pokemon/?offset=20&limit=20`)
        .then((res)=>{
            console.log(res.data.results.url)
            setPokePhoto(res.data.sprites.versions['generation-v'] ['black-white'].animated.front_default)
            setPokeName(res.data.results)
            setUrl(res.data.results.url)
            
        })
        .catch((err)=>{
           
        })
    }

    useEffect(()=>{
        getPokemon()
    },[])


    const arrayListPokemon = pokeName.map((list)=>{
        return(
            <p>{list.name}</p>
            
        )
    })
  
    return(
        <div>
        <ContainerPai>


            
            <Header>
            <ContainerButton>
              <Link to={'/pokedex'}>
               <Button variant={'contained'} size="small">pokedex</Button> 
               </Link>
            </ContainerButton>    
            
            <ConatinerImg>
               <h1>pokemon</h1>  
            </ConatinerImg>
            </Header>
           
           <Main>
               <img src="https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png"/>
           </Main>

        </ContainerPai>
        </div>


//         <ContainerPai>
            
         
//         <Typography variant="h1" gutterBottom> Pokemon</Typography>
        
//          <ContainerButton>
// {/* 
//         <Link to={'/detail/page'}>
//         <Button variant={'outlined'} color={'secondary'}>Página de detalhes</Button>
//          </Link>    */}
        
//              <img src={pokePhoto}  />
//              {arrayListPokemon}
       
//             <Link to={'/pokedex'}>
//             <Button variant={'contained'} color={'primary'}>Pokedex</Button>
//              </Link>
//             </ContainerButton> 
         
//         </ContainerPai>
    )
}