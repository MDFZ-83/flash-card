import React from "react"
import { Topic } from "./topic"
import "./topics.css"

export const Topics = ()=>{
    let topic = ["Languages" , "Academic" , "Professional"]

    return(
        <React.Fragment>
             <div className="container-fluid" id="topics">
                <div className="d-flex justify-content-center" id="topics-div1">
                    <h3 className="my-4">Popular Topic</h3>
                </div>
                <div className="container" >
                    <div className="row" id="topics-div2" >
                        <Topic data={topic[0]} />
                        <Topic data={topic[1]} />
                        <Topic data={topic[2]} />
                    </div>
                </div>
             </div>
        </React.Fragment>
    )
}