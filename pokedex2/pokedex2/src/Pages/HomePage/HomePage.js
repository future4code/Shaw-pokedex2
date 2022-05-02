import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ContainerButton } from "./styled"

export default function HomePage(){
    return(
        <div>
        <Typography variant="h1" align={'center'} gutterBottom>HomePage</Typography>
        
        <ContainerButton>

        <Link to={'/detail/page'}>
        <Button variant={'outlined'} color={'secondary'}>Página de detalhes</Button>
        </Link>  
        
       
        <Link to={'/pokedex'}>
        <Button variant={'contained'} color={'primary'}>Pokedex</Button>
        </Link>
        </ContainerButton>

        </div>
    )
}