import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/aboutus">About us</Link>
      <Link to="/FAQ">FAQ</Link>
      <Link to="/contactus">Contact us</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}
