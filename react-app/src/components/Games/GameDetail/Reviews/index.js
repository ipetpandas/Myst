import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkReadReviewsByGameId } from "../../../../store/reviews";

const Reviews = ({ game_id }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  console.log("REVIEWS --------------------->", Object.values(reviews));
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(thunkReadReviewsByGameId(game_id)).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div>
      <div>REVIEWS</div>
      {isLoaded &&
        Object.values(reviews).map((review) => {
          return (
            <>
              <div className="review-container">{review.author_id}</div>
              <div className="review-container">{review.review}</div>
            </>
          );
        })}
    </div>
  );
};

export default Reviews;
