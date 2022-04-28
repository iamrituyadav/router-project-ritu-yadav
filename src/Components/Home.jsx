import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./header";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <Header />
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
    </div>
  );
}
