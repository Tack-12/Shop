import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <nav className="flex justify-between p-4 shadow">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}
