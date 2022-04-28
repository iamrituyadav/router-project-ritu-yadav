import axios from "axios";
import { useEffect, useState } from "react";
export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="products">
      {data.map((e) => {
        return (
          <div key={e.id}>
            <img src={e.image} alt="" />
            <h2>{e.name}</h2>
            <h4>{`₹ ${e.price}`}</h4>
            <button className="addToCart">Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}
