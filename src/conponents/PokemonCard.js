import axios from 'axios';
import React from 'react';
import{useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom'

const PokemonCard = ({characterUrl}) => {

 const [character,setCharacter]=useState({})


    useEffect(()=>{
      axios.get(characterUrl)
      .then(res=>setCharacter(res.data))
    })

   const navigate=useNavigate()

    
    return (
        <div>


        <div className="card" onClick={()=>navigate(`/Pokemons/${character.id}`)}>
             <div className="img-card" >
                 <img  src={character.sprites?.other.dream_world.front_default}alt="" />
                <div className="container-item">
                       
                        
                        <div className="sub-card">
                            <h2 className="name-poke"> {character.name} </h2>
                            <h4 className="name-poke">   Skills:{character.abilities?.[0].ability.name}  </h4>
                                <div className="item-card">
                                    <p>Type: {character.types?.[0].type.name}</p>
                                    <p>Hp: {character.stats?.[0].base_stat}</p>
                                    <p> Attack: {character.stats?.[1].base_stat}  </p>
                                    <p>Speed: {character.stats?.[5].base_stat}</p>
                                </div>
                        </div> 
                </div>   
             </div>
            
        </div>
        </div>
    );
};

export default PokemonCard;