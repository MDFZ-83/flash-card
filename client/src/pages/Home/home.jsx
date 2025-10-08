import React, { useContext } from "react"
import { Footer } from "../../components/footer"
import { Topics } from "../../components/topic/topics"
import { Hcards } from "../../components/home-cards/Hcards"

export const Home = ()=>{
    
    return(
        <React.Fragment>
            <Hcards />
            <Topics />
            <Footer />
            
        </React.Fragment>
    )
}