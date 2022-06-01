import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import banner from "../img/pokemon.svg";
const CharacterDetail = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState("");
  
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
   
  }, [id]);
    console.log(pokemon)

  
   
  return (
    <div>
      <img className="banner" src={banner} alt="" />

      <div className={`card-detail ${pokemon.types?.[0].type.name}`}>
        <div className="img-card-detail">
          <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
          <div className="moves-detail">
        <h1>Stats</h1>
            <div >      
              <label  className="hp" htmlFor="file">hp</label>
              <progress  className="progress-bar progress-bar-info" id="file" max="100" value={pokemon.stats?.[0].base_stat}> </progress><br />
              <label className="attack" htmlFor="file">attack</label>
              <progress  className="progress-bar progress-bar-info" id="file" max="100" value={pokemon.stats?.[1].base_stat}> </progress><br />
              <label  className="defense"htmlFor="file">defense</label>
              <progress  className="progress-bar progress-bar-info" id="file" max="100" value={pokemon.stats?.[2].base_stat}> </progress><br />
              <label className="special-attack" htmlFor="file">special-attack</label>
              <progress  className="progress-bar progress-bar-info"  id="file" max="100" value={pokemon.stats?.[3].base_stat}> </progress><br />
              <label className="special-defense" htmlFor="file">special-defense</label>
              <progress  className="progress-bar progress-bar-info"  id="file" max="100" value={pokemon.stats?.[4].base_stat}> </progress><br />
              <label className="speed" htmlFor="file">speed</label>
              <progress  className="progress-bar progress-bar-info"  id="file" max="100" value={pokemon.stats?.[5].base_stat}> </progress><br />
            </div>
          </div>
          <div className="container-item-detail">
            <div className="sub-card-item">
              <h2 className="name-poke"> {pokemon.name} </h2>
              <p className="name-poke">
                
                Skills:{pokemon.abilities?.[0].ability.name}/{pokemon.abilities?.[1].ability.name}
              </p>
              <div className="item-card">
                <p>Weight: {pokemon.weight}</p>
                <p>Height: {pokemon.height}</p>
                <p> Attack: {pokemon.stats?.[1].base_stat} </p>
                <p>Speed: {pokemon.stats?.[5].base_stat}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
