import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const [data, setData] = useState([]);
  const [currstate, setCurrState] = useState();
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setCurrState(0);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
        setCurrState(2);
      } catch {
        setCurrState(1);
      }
    };

    fetchProducts();
  }, []);

  if (currstate === 0)
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (currstate === 1)
    return <div className="min-h-screen flex items-center justify-center text-red-500">Error</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop</h1>

      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => (
          <li key={product.id} className="bg-white p-4 rounded-xl shadow">
            <img src={product.image} className="h-40 mx-auto mb-4 object-contain" />

            <p className="text-sm font-medium line-clamp-2">{product.title}</p>
            <p className="text-lg font-semibold text-blue-600">${product.price}</p>

            <div className="flex items-center justify-center gap-3 mt-3">
              <button onClick={() => removeFromCart(product.id)}>-</button>
              <span>{cart[product.id] || 0}</span>
              <button onClick={() => addToCart(product.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
