import React from "react";


export const Card = (props) => {
  
  return (
    <React.Fragment>
      <div className="col-4">
        <div className="card">
          <div className="card-body " id="card">
            <div>
              <div className="mb-4 p-1">
                <h3>{props.data.term}</h3>
              </div>
              <div className="mb-3 p-1">
                <p>{props.data.description1}</p>
              </div>
            </div>
            <div>
              <i className='far fa-heart' style={{fontSize : "20px" , color : "red"}}></i>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
