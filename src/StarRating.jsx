function StarRating({ rating }) {
  /*
    Here's the markup for a single star:

    <img
      alt=""
      className="gold-star"
      // src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
      src="/star.svg"
    />

    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */

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
  )
}

export default StarRating
