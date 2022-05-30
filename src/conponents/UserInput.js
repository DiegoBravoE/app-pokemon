import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {changeUser} from '../store/slices/user.slice'
import {useDispatch} from 'react-redux'
import banner from '../img/pokemon.svg'
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
           <img src={banner} alt="" />
           <h1><strong>Hello Trainer!!!!</strong></h1>
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