import React, { useContext } from "react";

import { CardContext } from "../../context/cardContext";

export const Cfooter = () => {
      
  const {creat,card,save } = useContext(CardContext)
  
  return (
    <section>
      <div className="container-fluid fixed-bottom bg-warning">
        <div className="d-flex justify-content-center p-3">
          <button onClick={card} className="btn btn-info mx-2" id="btn-add">
            Add card
          </button>
          <button
            onClick={save}
            className="btn btn-danger mx-2"
            id="btn-done"
          >
            save
          </button>
          <button
            onClick={creat}
            className="btn btn-success mx-2"
            id="btn-done"
          >
            Done
          </button>
        </div>
      </div>
    </section>
  );
};
