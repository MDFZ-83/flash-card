import React from "react";
import { useCardNavigation } from "../hook/navigate";
export const BrowseSets = (props) => {
  
  const {goToCard} = useCardNavigation()
  
  return (
    <React.Fragment>
      <div className="col-4 my-3" onClick={()=>goToCard(props.data.id)}>
        <div className="card"  >
          <div className="card-body">
            <div className="text-bold" id="p-h">
              <h2>{props.data.title}</h2>
              <p className="text-muted my-4">{props.data.description}</p>
            </div>
            <div id="icons">
              <span>
                <i className="fa fa-columns" aria-hidden="true"></i>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
