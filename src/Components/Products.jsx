import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      setData(res.data);
    });
  }, []);

  const { handleClick } = useContext(CartContext);

  return (
    <div className="products">
      {data.map((e) => {
        return (
          <div key={e.id} className="productCard">
            <Link to={`/products/${e.id}`}>
              <img src={e.image} />
            </Link>
            <h2>{e.name}</h2>
            <h4>{`₹ ${e.price}`}</h4>
            <button className="addToCart" onClick={() => handleClick(e)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
