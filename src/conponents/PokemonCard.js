import axios from 'axios';
import React from 'react';
import{useState,useEffect} from 'react'

const PokemonCard = ({characterUrl}) => {
    const [character,setCharacter]=useState({})


    useEffect(()=>{
      axios.get(characterUrl)
      .then(res=>setCharacter(res.data))
    },[])

   

    console.log(character)
    return (
        <div className="card">
            <div className="title">
            <h1>Name: {character.name} </h1>
            
            </div>
             <div >
            <img className="img-card" src={character.sprites?.other.dream_world.front_default}alt="" />

             </div>
            <div className="skills">
              
            <h2>   Skills:{character.abilities?.[0].ability.name}  </h2>
            </div>
            
        </div>
    );
};

export default PokemonCard;