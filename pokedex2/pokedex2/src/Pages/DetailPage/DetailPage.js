import React, { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import { ContainerSon, Container, CardPhoto, ContainerAttacks, ContainerPowerPoke, ContainerTypePoke } from "./styled";
import { BASE_URL } from '../../constants/baseurl';
import { useNavigate } from 'react-router-dom';

const DetailPage = () => {

    const [pokeDetail, setPokeDetail] = useState([])
    const [pokePhoto, setPokePhoto] = useState([])
    const [typePoke, setTypePoke] = useState([])
    const [powerPoke, setPowerPoke] = useState([])

    const navigate = useNavigate()

    const getPokeDetail = async (name) => {


        try {
            const response = await BASE_URL.get(`/${name}`);
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


            <ContainerSon>


                <Button onClick={() => navigate(-1)} className="button1" variant="outlined"><strong>Voltar</strong></Button>
                <Button onClick={() => navigate('/pokedex')} className="button2" variant="outlined"><strong>Pokedex</strong></Button>


                <CardPhoto>
                    <img src={pokePhoto} />
                </CardPhoto>

                <ContainerTypePoke>
                    <h3>Tipo</h3>
                    {arrayTypePoke}


                </ContainerTypePoke>

                <ContainerPowerPoke>
                    <h3>Poderes</h3>
                    {arrayDetailPoke}



                </ContainerPowerPoke>


                <ContainerAttacks>

                    <h3>Principais ataques</h3>
                    {arrayPowerPoke}


                </ContainerAttacks>

            </ContainerSon>
        </Container>
    )
}

export default DetailPage