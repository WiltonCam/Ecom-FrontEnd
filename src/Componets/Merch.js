//import { Link } from "react-router-dom";

function Merch({merch}) {
  return (
    <div>
      <p>{merch.name}</p>
      <p>
        <p>${merch.cost}</p>
      </p>
    <div classname='pp'><img src={`${merch.image}`} alt=''></img></div>
    </div>
  );
}

export default Merch;
