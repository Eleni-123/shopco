const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating); // Vriskei posa olokliyra asteria xreiazontai (px. apo to 3.5 dinei 3)
  const hasHalfStar = rating % 1 >= 0.5; // Elegxei an yparxei ypoloipo gia miso asteri

  return (
    <div className="flex items-center gap-1">
      {/* 1. Emfanizoume ta olókliyra asteria */}
      {Array.from({ length: fullStars }, (_, index) => (
        <img
          key={`full-${index}`}
          src="/images/fullstar.png"
          alt="Full Star"
          className="w-4 h-4 object-contain"
        />
      ))}

      {/* 2. An yparxei miso asteri, to emfanizoume */}
      {hasHalfStar && (
        <img
          key="half-star"
          src="/images/halfstar.png"
          alt="Half Star"
          className="w-4 h-4 object-contain"
        />
      )}

      {/* Proairetika: O arithmos dipla */}
      <span className="ml-2 text-sm text-gray-600 font-medium">{rating}</span>
    </div>
  );
};

export default StarRating;
