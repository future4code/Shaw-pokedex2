import React, { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import { Container, CardPhoto, ContainerAttacks, ContainerPowerPoke, ContainerTypePoke } from "./styled";
import api from "../../Services/api";

const DetailPage = () => {

    const [pokeDetail, setPokeDetail] = useState([])
    const [pokePhoto, setPokePhoto] = useState([])
    const [typePoke, setTypePoke] = useState([])
    const [powerPoke, setPowerPoke] = useState([])

    const getPokeDetail = async () => {


        try {
            const response = await api.get(`/pokemon/pikachu`);
            setPokeDetail(response.data.stats);
            setPokePhoto(response.data.sprites.other.dream_world.front_default)
            setTypePoke(response.data.types)
            setPowerPoke(response.data.moves)
            console.log(response.data);

        } catch (error) {

        }
    };

    useEffect(() => {
        getPokeDetail()
    }, [])

    const arrayDetailPoke = pokeDetail.map((item) => {
        return (
            <p> <strong>{item.stat.name}</strong> : {item.base_stat} </p>

        )

    })

    const arrayTypePoke = typePoke.map((item) => {
        return (

            <p>{item.type.name}</p>

        )

    })

    const arrayPowerPoke = powerPoke.map((item, index) => {
        return (
            index < 5 && <p>{item.move.name}</p>
        )

    })

    return (
        <Container>
            <Button className="button1" variant="outlined"><strong>Voltar</strong></Button>
            <Button className="button2" variant="outlined"><strong>Pokedex</strong></Button>

            <CardPhoto>
                <img src={pokePhoto} />
            </CardPhoto>

            <ContainerPowerPoke>
                <h3>Poderes</h3>
                {arrayDetailPoke}



            </ContainerPowerPoke>

            <ContainerTypePoke>
                <h3>Tipo</h3>
                {arrayTypePoke}


            </ContainerTypePoke>

            <ContainerAttacks>

                <h3>Principais ataques</h3>
                {arrayPowerPoke}


            </ContainerAttacks>


        </Container>
    )
}

export default DetailPage