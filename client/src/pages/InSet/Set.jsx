import React, { useState , useEffect} from "react";
import "./Set.css"
import { Card } from "../../components/InSet/card";
import { Link, useParams } from "react-router-dom";
import { useCardNavigation } from "../../hook/navigate";
import axios from "axios";

export const InSet = ()=>{
    const {goToEdit}  = useCardNavigation()
    const {id} = useParams()
    const [sets , Setsets] = useState([])
    const [cards, setCards] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:5000/api/card/get").then((result)=>{ 
          result.data.map((m) =>{
            if(m.id == id){
                Setsets(m)
            }
          })
          
        })

        axios.get(`http://localhost:5000/api/card/getCards/${id}`).then((result)=>{ 
            setCards(result.data);
            console.log(cards)
        })
    },[])
    


    return(
        <React.Fragment>
            {
                
                <div className="mt-5">
                    <div className="container">
                        <div className="card" id="head-card"> 
                            <div className="card-body p-3" >
                                <div id="div-h3">
                                    <h3>{sets.title}</h3>
                                </div>
                            
                                <div className="p-4">
                                    <p>{sets.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row text-center my-5" id="btns">
                            <div className="col-6 ">
                                <button className="btn btn-primary w-75 h-100">STUDY</button>
                            </div>
                            <div className="col-6 ">
                                <button onClick={()=>goToEdit()} className="btn btn-outline w-75 h-100" style={{border : "1px solid black"}}>ADD/EDIT</button>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid my-5 " id="div-form">
                        <form className="d-flex justify-content-center"> 
                            <input type="text" className="form-control w-75 " placeholder="search..." style={{height : "55px"}}/>
                        </form>
                    </div>
                    <div className="row mx-2  ">
                        {cards.map((m , index)=> <Card key={index} data={m} />)}
                    </div>
                </div>
            }
            
        </React.Fragment>
    )
}