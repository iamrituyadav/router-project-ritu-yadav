import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export default function Cart() {
  const { cartData } = useContext(CartContext);

  return (
    <>
      <div>
        <h1>Cart</h1>
        {cartData.map((e) => {
          return (
            <div key={e.id} className="cartDiv">
              <img src={e.image} />
              <div>
                <h2>{e.name}</h2>
                <h4>{`₹ ${e.price}`}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
