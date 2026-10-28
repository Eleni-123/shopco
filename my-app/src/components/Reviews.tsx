import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

type Review = {
  _id: string;
  name: string;
  comment: string;
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/products/top-selling")
      .then((res) => res.json())
      .then((json) => {
        setReviews((json.data as Review[]) ?? []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  if (error) return <div className="py-8 text-center">Unable to load reviews.</div>;

  return <div className="py-8 text-center">{reviews.length} reviews</div>;
};

export default Reviews;
