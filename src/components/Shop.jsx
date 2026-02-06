import { useEffect, useState } from "react";

export default function Shop() {
  const [data, setData] = useState([]);
  const [currstate, setCurrState] = useState();

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
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-medium">
        Loading products...
      </div>
    );

  if (currstate === 1)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        Something went wrong.
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop</h1>

      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map(product => (
          <li
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-4"
            />

            <p className="text-sm font-medium line-clamp-2 mb-2">
              {product.title}
            </p>

            <span className="mt-auto text-lg font-semibold text-blue-600">
              ${product.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
