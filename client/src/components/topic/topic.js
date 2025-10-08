import React from "react";

export const Topic = (props) => {
    
  return (
    <React.Fragment>
      <div className="col-4" id="topic">
        <div className="card">
          <div className="card-body">
            <div id="topic-div">
              <h6>{props.data}</h6>
            </div>
            <div id="ul">
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
