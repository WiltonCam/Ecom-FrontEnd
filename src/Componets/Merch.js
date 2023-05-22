import { Link } from "react-router-dom";

function Merch({Merch}) {
  return (
    <div>
     <p>
        {Merch.is_Trending ? (
          <span>🔥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </p>
      <p>{Merch.name}</p>
      <p>
        <a href={Merch.url} target="_blank" rel="noreferrer">
          {Merch.url}
        </a>
        <p>${Merch.cost}</p>
      </p>
      <p>
        <Link to={`/merch/${merch.id}`}>👟</Link>
      </p>
    </div>
  );
}

export default Merch;
