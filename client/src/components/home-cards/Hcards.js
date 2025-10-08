import React, {  useEffect, useState } from "react";
import { Hcard } from "./Hcard";
import "./Hcard.css";
import { Link } from "react-router-dom";
import {CardContext} from "./../../context/cardContext"
import axios from "axios"


export const Hcards = () => {

  const [sets , Setsets] = useState([])
  
  useEffect(()=>{
     axios.get("http://localhost:5000/api/card/get").then((result)=>{ 
       Setsets(result.data)
       
     })
       
  },[])

   
  return (
    <React.Fragment>
      <section className="bg-info">
        <div className="container">
          <div className="row" id="cards">
          {sets.map((element) => (
            <Hcard key={element.id} data={element} />
          ))}
          </div>
          <div className="row ">
            <div className="col-12 text-center my-4">
              <Link to="/set" className="btn btn-danger" id="btn-creat-set" >
                <i className="fa fa-plus-square-o"></i> Creat Set
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
