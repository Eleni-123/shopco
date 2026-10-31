import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import StarRating from "@/components/StarRating";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type Review = {
  _id: string;
  user: string;
  comment: string;
  rating: number;
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
    <section className="py-12 overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex justify-between items-center mb-8 px-4">
          <h2 className="text-3xl font-extrabold tracking-tight">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-2">
            <CarouselPrevious className="static translate-y-0 h-9 w-9 rounded-full" />
            <CarouselNext className="static translate-y-0 h-9 w-9 rounded-full" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {reviews.map((review) => (
            <CarouselItem
              key={review._id}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <article className="rounded-2xl border p-6 h-full bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <StarRating rating={review.rating} />
                  <h3 className="font-bold text-lg mt-3">{review.user}</h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Reviews;
