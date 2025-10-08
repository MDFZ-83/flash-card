import React, { useEffect , useState } from "react";
import { BrowseSets } from "../../components/browse-set";
import "./browse.css"
import { Footer } from "../../components/footer";
import { CardContext } from "../../context/cardContext";
import axios from "axios"


export const Browse = ()=>{
    
    const [sets , Setsets] = useState([])
  
    useEffect(()=>{
        axios.get("http://localhost:5000/api/card/get").then((result)=>{ 
            Setsets(result.data)
       
        })
       
    },[])
  
    return(
        <React.Fragment>
         <h1 className="text-center my-5" >SETS</h1>
        <section className="mx-5" id="sec-form">
            <div className="container-fluid">
                <div className="p-4">
                    <form>
                        <input type="text" className="form-control" placeholder="search..." />
                        
                    </form>
                </div>
            </div>
        </section>
        <section className="my-2 mx-4">
            <div className="row" id="cards">
                {console.log(sets)}
                {sets.map((element) => (
                    <BrowseSets key={element.id} data={element} />
                ))}
            </div>
        </section> 
        <Footer />
        </React.Fragment>
    )
}