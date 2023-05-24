import axios from "axios";
import { useState, useEffect } from "react";
import Merch from "./Merch.js";
import "../Styling/App.css"
const API = process.env.REACT_APP_API_URL;

function Merchs() {
  const [merchs, setMerchs] = useState([]);
  useEffect(() => {
    axios.get(`${API}/merchs`).then((response) => {
        console.log(response.data)
      setMerchs(response.data)
    }).catch((e)=> {
      console.warn("catch", e)
    })
  }, []);
  return (
    <div className="Bookmarks">
      <section>
       <div>
            {merchs.map((merch) => {
              return <Merch key={merch.id} merch={merch} />;
            })}
          </div>
      </section>
    </div>
  );
}

export default Merchs;
