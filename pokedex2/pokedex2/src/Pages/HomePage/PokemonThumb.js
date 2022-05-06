import React, { useContext} from "react";
import { useNavigate } from "react-router";
import { goToDetailPage } from "../../Router/coordinator";
import "./style.css"
import pokeballImg from "../../img/pokeball.png"
import more from "../../img/plus.png"
import { PokedexContext } from "../../global/GlobalStateContext";


    const PokemonThumb = ({id, name, image, type}) => {
    const navigate = useNavigate();
    const {pokedexIdList, setPokedexIdList} = useContext(PokedexContext);

    const style = `thumb-container ${type}`

    return(
        <div className={style}>
            <div className="number">
                {id < 10 ? <small>#0{id}</small> : <small>#{id}</small>}
            </div>
            <img src={image} alt={name}></img>
            <div className="detail-wrapper">
                <h3>{name}</h3>
            </div>
            <div className="buttons-card">
                {(pokedexIdList.findIndex((pokemonId) => pokemonId === id)) === -1
                ? (
                    <button>
                        <img src={pokeballImg} alt="Ícone de pokebola"/>
                        <>Adicionar Pokedex</>
                    </button>)
                : (
                    <button >
                        <img src={pokeballImg} alt="Ícone de pokebola"/>
                        <>Remover Pokedex</>
                    </button>)                
                }
                
                <button onClick={()=> navigate("/details/:id")}>
                    <img className="more-icon" src={more} alt="Ícone de mais"/>
                    <p>Detalhes</p>
                </button>
            </div>
        </div>
    )
}

export default PokemonThumb