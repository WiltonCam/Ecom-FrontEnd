import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function MerchEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [Merch, setMerch] = useState({
    name: "",
    cost: "",
    url: "",
    category: "",
  });

  const updateMerch = (updatedMerch) => {
    axios
      .put(`${API}/merchs/${id}`, updatedMerch)
      .then(
        () => {
          navigate(`/merchs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setMerch({ ...merch, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/merchs/${id}`).then(
      (response) => setMerch(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMerch(merch, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={merch.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Item"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={merch.category}
          placeholder="sneaker, heel, sandal, ..."
          onChange={handleTextChange}
        />
       
        <br />

        <input type="submit" />
      </form>
      <Link to={`/merch/${id}`}>
        <button>Go back!</button>
      </Link>
    </div>
  );
}

export default MerchEditForm;
