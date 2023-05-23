import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function MerchNewForm() {
  let navigate = useNavigate();

  const addMerch = (newMerch) => {
    axios
      .post(`${API}/merchs`, newMerch)
      .then(
        () => {
          navigate(`/merchs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [merch, setMerch] = useState({
    name: "",
    cost: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setMerch({ ...merch, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMerch(merch);
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

export default MerchNewForm;
