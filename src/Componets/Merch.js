//import { Link } from "react-router-dom";

function Merch({merch}) {
  return (
<div className="card">
      <div className="card-body">
        <h5 className="card-title">{merch.name}</h5>
        <p className="card-text">${merch.cost}</p>
        <div className="pics">
          <img src={merch.image} alt="" className="card-img-top" />
        </div>
      </div>
    </div>
  );
}

export default Merch;
