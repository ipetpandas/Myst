import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  thunkEditReviewByGameId,
  thunkReadReviewsByGameId,
} from "../../../../store/reviews";
import "./Reviews.css";

const GameReviews = ({ game_id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews.gameReviews);
  const singleGame = useSelector((state) => state.games.singleGame);
  console.log("REVIEWS --------------------->", Object.values(reviews));
  let [isLoaded, setIsLoaded] = useState(false);

  // const [recommended, setRecommended] = useState(reviews[user.id]?.recommended);
  // const [review, setReview] = useState(reviews[user.id]?.review);

  useEffect(() => {
    dispatch(thunkReadReviewsByGameId(game_id)).then(() => setIsLoaded(true));
  }, [dispatch]);

  const dateConverter = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "utc",
    });
  };

  function recommended(isRecommended) {
    if (isRecommended) {
      return (
        <div className="recommended">
          <div className="thumbs-up">
            <div className="thumb-icon">
              <i className="fa-solid fa-thumbs-up"></i>
            </div>
          </div>
          <div>Recommended</div>
        </div>
      );
    } else {
      return (
        <div className="not-recommended">
          <div className="thumbs-down">
            <div className="thumb-icon">
              <i className="fa-solid fa-thumbs-down"></i>
            </div>
          </div>
          <div>Not Recommended</div>
        </div>
      );
    }
  }

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
      <div className="review-parent">
        <div className="review-container-left-right">
          <div className="review-container">
            <div className="review-header">Customer Reviews</div>
            {isLoaded &&
              Object.values(reviews).map((review) => {
                return (
                  <>
                    <div className="individual-review-container">
                      <div className="author-container">
                        <div className="author-avatar">
                          <img
                            draggable="false"
                            src={review.author_display_pic}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="review-text-container">
                        <div className="review-text-top-container">
                          <div className="review-top-info-container">
                            <div className="review-author">
                              {review.author_name}
                            </div>
                            <div className="review-posted">
                              Posted: {dateConverter(review.created_at)}
                            </div>
                          </div>
                          <div className="recommended-container">
                            {recommended(review.recommended)}
                            <div className="key-icon">
                              <i className="fa-solid fa-cloud-bolt"></i>
                            </div>
                          </div>
                        </div>
                        <div className="review-text">{review.review}</div>
                        {!user ||
                          (review.author_id == user.id && (
                            <>
                              <div className="review-user-actions">
                                <button className="edit-review">
                                  Edit&nbsp;
                                  <i className="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button className="delete-review">
                                  Delete&nbsp;
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                              </div>
                              {/* <form action="" className="edit-review">
                          <input></input>
                        </form> */}
                            </>
                          ))}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          {isLoaded && user ? (
            <div className="review-right-container">
              <div className="review-create-header">
                {singleGame.title} is already in your Myst library
              </div>
              <div className="review-create-top-container">
                <div className="review-create-user-avatar">
                  <img src={user.display_pic}></img>
                </div>
                <div className="review-create-subtext-container">
                  <div className="review-create-subtext">
                    Write a review for {singleGame.title}
                  </div>
                  <div className="review-create-subtext2">
                    Please describe what you liked or disliked about this game
                    and whether you recommend it to others.
                  </div>
                </div>
              </div>
              <div className="review-create-input-container">
                {/* <div className="review-create-user-avatar">
                  <img src={user.display_pic}></img>
                </div> */}
                <div className="review-create-input">
                  <textarea rows="10" cols="43"></textarea>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameReviews;
