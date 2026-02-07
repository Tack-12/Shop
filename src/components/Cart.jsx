import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const cartItems = products.filter((p) => cart[p.id]);

  if (cartItems.length === 0) {
    return <div className="text-center text-xl mt-20">Your cart is empty 🛒</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <p className="w-1/2">{item.title}</p>

          <div className="flex gap-3 items-center">
            <button onClick={() => removeFromCart(item.id)}>-</button>
            <span>{cart[item.id]}</span>
            <button onClick={() => addToCart(item.id)}>+</button>
          </div>

          <p className="font-semibold">
            ${(item.price * cart[item.id]).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}
