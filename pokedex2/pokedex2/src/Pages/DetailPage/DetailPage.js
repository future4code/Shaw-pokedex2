import React, { useEffect, useState } from 'react';
import { ContainerSon, Container, CardPhoto, ContainerAttacks, ContainerPowerPoke, ContainerTypePoke } from "./styled";
import pokeImg from '../../img/pokeball.png'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../constants/api';

const DetailPage = () => {

    const [pokeDetail, setPokeDetail] = useState([])
    const [pokePhoto, setPokePhoto] = useState([])
    const [typePoke, setTypePoke] = useState([])
    const [powerPoke, setPowerPoke] = useState([])

    const params = useParams()
    

    const navigate = useNavigate()

    const getPokeDetail = async () => {


        try {
            const response = await api.get(`/${params.id}`);
            setPokeDetail(response.data.stats);
            setPokePhoto(response.data.sprites.other.dream_world.front_default)
            setTypePoke(response.data.types)
            setPowerPoke(response.data.moves)
            console.log(response.data)
            

        } catch (error) {
            console.log(error.response);

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


                <button onClick={() => navigate(-1)} className="button1"><strong>Voltar</strong>
                <img className='buttonBack' src='https://cdn-icons-png.flaticon.com/512/61/61449.png'/>
                 </button>
                <button onClick={() => navigate('/pokedex')} className="button2"><strong>Pokedex</strong>
                <img className='buttonPokedex' src={pokeImg}/>
                </button>


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