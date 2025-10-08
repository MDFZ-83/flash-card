import React, { useContext } from "react";
import { Cards } from "../../components/sets/cards";
import { Cfooter } from "../../components/sets/Cfooter";
import './cards.css'

import { CardContext } from "../../context/cardContext";



export const Set = ()=>{

    const {changes , item  } = useContext(CardContext)
    return(
        <React.Fragment>
            
            <div className="container-fluid"  >
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="card w-50 my-5" id="card-body">
                            <div className="card-body">
                                <div id="form">
                                    <form>
                                        <input type="text" className="form-control my-3" onChange={changes} placeholder="Set title..." id="creat-set-input"/>
                                        <textarea className="form-control" onChange={changes} placeholder="Description" id="creat-set-textarea"></textarea>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-5" id="cards-h3">
                    <h3 className="text-center">cards</h3>
                </div>
                <div className="row" id="cards">
                    <Cards  />
                    {item.map((m , index) => <Cards key={index}  />)}
                </div>         
            </div>
            <Cfooter />
        </React.Fragment>
    )
}