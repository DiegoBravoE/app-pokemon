import React from 'react';
import{useState} from 'react'
import axios from 'axios';


const InputName = () => {

  const [name,setName]=useState([])

  const searchType = () => {
   
        axios.get(`https://pokeapi.co/api/v2/type/${name}`)
             .then((res) => setName(res.data?.name));
    }

 
    return (
        <div>
        <div className="input-select">
                    <div className="input-group mb-3">
                        <select className="form-select" id="inputGroupSelect02">
                            <option selected>All pokemons</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
             
              <div className="input-search">
                <div  className="d-flex" role="search">
                    <input  onChange={e=>setName(e.target.value)} value={name}  className="form-control me-2" type="search" placeholder="Search Pokemon" aria-label="Search"/>
                    <button  onClick={searchType} className="btn btn-outline-success" type="submit">Search</button>
                </div>
              </div>
        </div>
    );
};

export default InputName;