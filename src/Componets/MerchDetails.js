import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;

function MerchDetails() {
  const [merch, setMerch] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/merch/${id}`)
      .then((response) => {
        setMerch(response.data);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  }, [id]);

  const handleDelete = () => {
    deleteMerch();
  };

  const deleteMerch = () => {
    axios
      .delete(`${API}/merch/${id}`)
      .then(() => {
        navigate(`/merch`);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  };

  return (
    <article>
      <h3>
        {merch.is_Trending ? <span>⭐️</span> : null} {bookmark.name}
      </h3>
      <h5>
        <span>
          <a href={merch.url}>{merch.name}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {merch.url}
      </h5>
      <h6>{merch.category}</h6>
      <div className="showNavigation">
        <div>
          <Link to={`/merch`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/merch/id/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {/* <Reviews/> */}
    </article>

  );
}

export default MerchDetails;