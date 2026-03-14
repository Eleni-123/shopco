import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/products/top-selling")
      .then((res) => res.json())
      .then((json) => {
        setReviews(json.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching new arrivals:", error);
        setError(true);
        setLoading(false);
      });
  }, []);
  return <div>Reviews Component</div>;
};
export default Reviews;
