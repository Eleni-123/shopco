import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

type Review = {
  _id: string;
  user: string;
  comment: string;
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((json) => {
        setReviews(((json.data as Review[]) ?? []).slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  if (error)
    return <div className="py-8 text-center">Unable to load reviews.</div>;

  return (
    <section className="py-8">
      <h1 className="mb-6 text-2xl font-bold">OUR HAPPY CUSTOMERS</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <article key={review._id} className="rounded-lg border p-4">
            <p>{review.rating}</p>
            <h2 className="font-semibold">{review.user}</h2>
            <p className="mt-2">{review.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
