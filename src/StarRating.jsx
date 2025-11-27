function StarRating({ rating }) {
 console.log("Rating received", rating);

 const numStars = Number(rating) || 0; // convert to number, default 0
 const totalStars = 5; //total stars to display

  return (
    <div className="star-wrapper">
      {Array.from({ length: numStars }, (_, i) => (
      <img
        key={crypto.randomUUID()}
        alt=""
        className="gold-star"
        src="/star.svg"
      />
      ))}
    </div>
  );
}

export default StarRating
