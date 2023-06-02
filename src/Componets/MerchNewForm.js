import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


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
    image:"",
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
          placeholder="shoes,clothing,furniture ..."
          onChange={handleTextChange}
          required
        />
                <label htmlFor="cost">Cost:</label>
        <input
          id="cost"
          type="text"
          name="cost"
          value={merch.cost}
          placeholder="0.00"
          onChange={handleTextChange}
          required
        />
                <label htmlFor="image">image:</label>
        <input
          id="image"
          type="text"
          name="image"
          value={merch.image}
          placeholder="Picture here"
          onChange={handleTextChange}
          required
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/Componets/Merchs`}>
        <button>Go back!</button>
      </Link>
    </div>
  );
}

export default MerchNewForm;
