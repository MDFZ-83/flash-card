import React, { useContext } from "react";
import { CardContext } from "../../context/cardContext";
export const Cards = (props)=>{
        
    const {change1} = useContext(CardContext)
    return(
        <React.Fragment>
            
            
                <div className="col-12 d-flex mb-5 justify-content-center" >
                    <div className="card cards w-75" style={{border: "2px solid blue"}}>
                        <div className="card-body">
                            <div className="d-flex justify-content-end">
                                <i className='fas fa-trash'></i>
                            
                            </div>
                            <div>
                                <form>
                                    <input type="text"  className="form-control mt-2 mb-4 " onChange={change1}  id="creat-set-term"  placeholder="Term..."  />
                                    <textarea className="form-control " onChange={change1}   id="creat-set-des" placeholder="Description" ></textarea>
                                </form>
                            </div>
                                
                        </div>
                    </div>
                </div>
            
        </React.Fragment>
    )
}