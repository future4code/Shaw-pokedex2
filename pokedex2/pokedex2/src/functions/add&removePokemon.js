// logica das funções de add e remover

export const AddPokedex = (id, pokedexIdList, setPokedexIdList) =>{
const AddNewId = [...pokedexIdList, id]
setPokedexIdList(AddNewId)

}

 export const RemovePokemon = (id, pokedexIdList, setPokedexIdList)=>{
const CopyPokemon = [...pokedexIdList]
const RemovePokemon = CopyPokemon.filter((PokemonId)=>{
    return PokemonId !== id 
 })
 setPokedexIdList(RemovePokemon)
 }