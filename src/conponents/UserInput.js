import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";

const UserInput = () => {
  const [userName, SetUserName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getName = () => {
    dispatch(changeUser(userName));
    navigate("/Pokedex");
  };
  return (
    <div>
      
      <div className="contenedor">
        <h1 className="hello-trainer">
          <strong>Hello Trainer!!!!</strong>
        </h1>
        <img className="imagen-gif" src="https://i.gifer.com/KG12.gif" alt="" />
       
        <div className="input-container">
          <form>
            <input
              className="input-search"
              type="text"
              placeholder="To start tell me your name"
              value={userName}
              onChange={(e) => SetUserName(e.target.value)}
            />
            <button className="btn btn-outline-danger" onClick={getName}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
