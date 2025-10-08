import React, { useContext } from "react";
import {useCardNavigation} from "./../../hook/navigate"
import { Card } from "../InSet/card";
import { CardContext } from "../../context/cardContext";
import { InSet } from "../../pages/InSet/Set";
export const Hcard = (props) => {
  const {goToCard} = useCardNavigation()
  return (
    <React.Fragment>
      <div className="col-4" >
        <div className="card"  onClick={()=>goToCard(props.data.id)}>
          <div className="card-body">
            <div id="p-h">
              <h4>;{props.data.title}</h4>
              <p>{props.data.description}</p>
            </div>
            <div id="icons">
              <span>
                <i className="far fa-clock"></i>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
//()=>goToCard(props.data.id)