import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {changeUser} from '../store/slices/user.slice'
import {useDispatch} from 'react-redux'
const UserInput = () => {

const  [userName,SetUserName]=useState("")

const navigate=useNavigate()
const dispatch=useDispatch()
const getName=()=>{
   dispatch(changeUser(userName))
    navigate("/Pokedex")
}
    return (
        <div>
           <h1><strong>Hello Trainer!!!!</strong></h1>
            <img className="animate__animated animate__backInLeft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/481px-Pokebola-pokeball-png-0.png" alt="" /> 
          <img className=" animate__animated  animate__backInRight" src="https://zarude.pokemon.com/assets/images/characters/ash.png" alt="" />
            <div  className="input-container">
                    <form >

                    <input className="input-search" type="text"  placeholder="To start tell me your name"  value={userName}  onChange={e=>SetUserName(e.target.value)}/>
                    <button className="btn btn-outline-success" onClick={getName} >Submit</button>

                    </form>
            </div>
        </div>
    );
};

export default UserInput;