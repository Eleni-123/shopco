import { use, useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/products/new-arrivals")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching new arrivals:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading || error) {
    return <Spinner />;
  }

  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <div>
      <h1
        className="font-bold text-5xl p-10 flex justify-center"
        style={{ fontFamily: "Integral CF" }}
      >
        New Arrivals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product._id} className="bg-gray-100 rounded-lg p-4">
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-64 w-full object-cover rounded-md"
            />

            <h2 className="mt-4 font-semibold text-lg">{product.title}</h2>

            <p className="text-gray-600 text-sm mt-1">
              {product.shortDescription}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold text-lg">€{product.price}</span>

              {product.discount > 0 && (
                <span className="text-sm text-red-500">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      {products.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default NewArrivals;
