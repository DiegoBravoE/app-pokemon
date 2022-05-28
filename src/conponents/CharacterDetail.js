import React from "react";
import { useParams } from "react-router-dom";
import{useState,useEffect} from 'react'
import axios from "axios";

const CharacterDetail = () => {
  const {id}=useParams()

  const[pokemon,setPokemon]=useState("")

   useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=>setPokemon(res.data))

   },[])
 
  return (
    <div>
      <div className="container-detail">
       
        <h1>{pokemon.name}</h1>
        <div   className="img-detail">
             <img  src={pokemon.sprites?.other.dream_world.front_default}alt="" />
        </div>
        <h2>   Skills:{pokemon.abilities?.[0].ability.name}  </h2>
      <div  className="item-id">

        <strong>

               <p>Type: {pokemon.types?.[0].type.name}</p>
               <p>Hp: {pokemon.stats?.[0].base_stat} Attack: {pokemon.stats?.[1].base_stat}  </p>
               <p>Speed: {pokemon.stats?.[5].base_stat}</p>
        #{id}   

        </strong>

      </div>
      
  
      </div>
 
      
    </div>
  );
};

export default CharacterDetail;
