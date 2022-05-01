import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const { handleClick } = useContext(CartContext);

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="prodDetail">
      <img src={data.image} alt="" />
      <div>
        <h2>{data.name}</h2>
        <p>{data.desc}</p>
        <h4>{data.price}</h4>
        <button className="addToCart" onClick={() => handleClick(data)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
