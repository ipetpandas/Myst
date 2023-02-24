import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  thunkEditReviewByGameId,
  thunkReadReviewsByGameId,
} from "../../../../store/reviews";

const GameReviews = ({ game_id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews.gameReviews);
  console.log("REVIEWS --------------------->", Object.values(reviews));
  let [isLoaded, setIsLoaded] = useState(false);

  // const [recommended, setRecommended] = useState(reviews[user.id]?.recommended);
  // const [review, setReview] = useState(reviews[user.id]?.review);

  useEffect(() => {
    dispatch(thunkReadReviewsByGameId(game_id)).then(() => setIsLoaded(true));
  }, [dispatch]);

  // const onSave = (e) => {
  //   e.preventDefault();
  //   const reviewToUpdate = {
  //     recommended,
  //     review,
  //   };
  //   dispatch(thunkEditReviewByGameId(game_id, user.id, reviewToUpdate));
  // };

  return (
    <div>
      <div>REVIEWS</div>
      {isLoaded &&
        Object.values(reviews).map((review) => {
          console.log("REVIEW", review);
          return (
            <>
              <div className="review-container">
                <div className="author-avatar">
                  {/* <img src={review.author_display_pic} alt="" /> */}
                </div>
                <div className="review-author">{review.author_name}</div>
                <div className="review-text">{review.review}</div>
              </div>
              {/* {review.author_id == user.id && (
                <>
                  <div>
                    <button>EDIT</button>
                  </div>
                  <form action="" className="edit-review">
                    <input></input>
                  </form>
                </>
              )} */}
            </>
          );
        })}
    </div>
  );
};

export default GameReviews;
