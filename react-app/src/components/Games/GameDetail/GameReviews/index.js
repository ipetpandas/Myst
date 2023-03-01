import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { thunkReadUserLibrary } from "../../../../store/libraries";
import {
  thunkCreateReview,
  thunkDeleteReviewByGameId,
  thunkEditReviewByGameId,
  thunkReadReviewsByGameId,
} from "../../../../store/reviews";
import "./Reviews.css";

const GameReviews = ({ game_id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [review, setReview] = useState("");
  const [recommended, setRecommended] = useState("");
  const [showEditForm, setShowEditForm] = useState(false);
  const [errors, setErrors] = useState([]);
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews.gameReviews);
  const singleGame = useSelector((state) => state.games.singleGame);
  const library = useSelector((state) => state.library);
  console.log("REVIEWS --------------------->", Object.values(reviews));
  let [isLoaded, setIsLoaded] = useState(false);

  function getUserReviews(reviews, user) {
    const currentUserReview = reviews[user?.id];
    let otherReviews;
    if (currentUserReview) {
      otherReviews = Object.values(reviews).filter(
        (review) => review.author_id !== user?.id
      );
    } else {
      otherReviews = Object.values(reviews);
    }
    return [currentUserReview, otherReviews];
  }

  const [currentUserReview, otherReviews] = getUserReviews(reviews, user);
  // console.log(
  //   "CURRENT USER REVIEW----------------->:",
  //   Object.values(currentUserReview)
  // );

  // console.log("OTHER REVIEWS----------->", otherReviews);

  // const [recommended, setRecommended] = useState(reviews[user.id]?.recommended);
  // const [review, setReview] = useState(reviews[user.id]?.review);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const newReview = {
      review,
      recommended: recommended === "Recommended",
    };

    dispatch(thunkCreateReview(newReview, game_id)).then(() =>
      history.push(`/games/${game_id}`)
    );
  };
  // const handleEditSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors([]);

  //   const updatedReview = {
  //     review,
  //     recommended,
  //   };

  //   dispatch(thunkEditReviewByGameId(updatedReview, game_id)).then(() =>
  //     history.push(`/games/${game_id}`)
  //   );
  // };

  function handleDelete(e) {
    e.preventDefault();
    dispatch(thunkDeleteReviewByGameId(game_id))
      .then(() => {
        setReview("");
        setRecommended("");
      })
      .then(() => history.push(`/games/${game_id}`));
    // setIsLoaded(true);
    // history.push(`/games/${game_id}`);
  }

  useEffect(() => {
    dispatch(thunkReadReviewsByGameId(game_id))
      .then(dispatch(thunkReadUserLibrary()))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  const onSave = (e) => {
    e.preventDefault();
    const reviewToUpdate = {
      recommended: recommended === "Recommended",
      review,
    };
    dispatch(thunkEditReviewByGameId(game_id, reviewToUpdate))
      .then(() => setShowEditForm(false))
      .then(() => history.push(`/games/${game_id}`));
  };

  return (
    <div>
      <div className="review-parent">
        <div className="review-container-left-right">
          <div className="review-container">
            {isLoaded && currentUserReview && (
              <>
                <div className="review-header">Your Review</div>
                <div className="individual-review-container2">
                  <div className="author-container">
                    <div className="author-avatar">
                      <img
                        draggable="false"
                        src={currentUserReview.author_display_pic}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="review-text-container">
                    <div className="review-text-top-container">
                      <div className="review-top-info-container">
                        <div className="review-author">
                          {currentUserReview.author_name}
                        </div>
                        <div className="review-posted">
                          Posted: {dateConverter(currentUserReview.created_at)}
                        </div>
                      </div>
                      <div className="recommended-container">
                        {recommendedFunction(currentUserReview.recommended)}
                        <div className="key-icon">
                          <i className="fa-solid fa-cloud-bolt"></i>
                        </div>
                      </div>
                    </div>
                    {showEditForm && user.id === currentUserReview.author_id ? (
                      editForm()
                    ) : (
                      <div className="review-text">
                        {currentUserReview.review}
                      </div>
                    )}
                    {currentUserReview.author_id == user?.id &&
                      !showEditForm && (
                        <>
                          <div className="review-user-actions">
                            <button
                              className="edit-review"
                              onClick={__showEditForm}
                            >
                              Edit&nbsp;
                              <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button
                              className="delete-review"
                              onClick={handleDelete}
                            >
                              Delete&nbsp;
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                          {/* <form action="" className="edit-review">
                          <input></input>
                        </form> */}
                        </>
                      )}
                    {/* {review.author_id == user?.id && showEditForm && (

                        )} */}
                  </div>
                </div>
              </>
            )}
            <div className="review-header">Customer Reviews</div>
            {isLoaded &&
              Object.values(otherReviews).map((review) => {
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
                            {recommendedFunction(review.recommended)}
                            <div className="key-icon">
                              <i className="fa-solid fa-cloud-bolt"></i>
                            </div>
                          </div>
                        </div>
                        {showEditForm && user.id === review.author_id ? (
                          editForm()
                        ) : (
                          <div className="review-text">{review.review}</div>
                        )}
                        {review.author_id == user?.id && !showEditForm && (
                          <>
                            <div className="review-user-actions">
                              <button
                                className="edit-review"
                                onClick={__showEditForm}
                              >
                                Edit&nbsp;
                                <i className="fa-solid fa-pen-to-square"></i>
                              </button>
                              <button
                                className="delete-review"
                                onClick={handleDelete}
                              >
                                Delete&nbsp;
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </div>
                            {/* <form action="" className="edit-review">
                          <input></input>
                        </form> */}
                          </>
                        )}
                        {/* {review.author_id == user?.id && showEditForm && (

                        )} */}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          {isLoaded && user && library[game_id] && !reviews[user.id] ? (
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
              <form
                className="review-create-input-container"
                onSubmit={handleSubmit}
              >
                {/* <div className="review-create-user-avatar">
                  <img src={user.display_pic}></img>
                </div> */}

                <div className="review-create-input">
                  <textarea
                    type="text"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="review-create-radio">
                  <fieldset className="do-you-rec">
                    <div className="do-you-rec-1">
                      Do you recommend this game?
                    </div>
                    <div className="do-you-rec-2">
                      <div className="do-you-rec-radio-container">
                        <input
                          type="radio"
                          id="recommended-yes"
                          name="recommended"
                          value="Recommended"
                          onChange={(e) => setRecommended(e.target.value)}
                          checked={recommended === "Recommended"}
                          required
                        />
                        <label htmlFor="recommended-yes">
                          <i className="fa-solid fa-thumbs-up"></i>
                          &nbsp;Yes
                        </label>
                        <input
                          type="radio"
                          id="recommended-no"
                          name="recommended"
                          value="Not Recommended"
                          onChange={(e) => setRecommended(e.target.value)}
                          checked={recommended === "Not Recommended"}
                          required
                        />
                        <label htmlFor="recommended-no">
                          <i className="fa-solid fa-thumbs-down"></i>
                          &nbsp;No
                        </label>
                      </div>
                      <div className="post-review-container">
                        <button type="submit">Post review</button>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          ) : isLoaded && user && !library[game_id] ? (
            <div className="purchase-me-container arrow-top">
              <div>Purchase this game to leave a review</div>
            </div>
          ) : user && reviews[user.id] ? (
            <div className="purchase-me-container arrow-left">
              <div>You've already left a review</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
  function recommendedFunction(isRecommended) {
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

  function __showEditForm() {
    setShowEditForm(true);
    if (reviews[user.id]) {
      setReview(reviews[user.id].review);
      setRecommended(
        reviews[user.id].recommended ? "Recommended" : "Not Recommended"
      );
    }
  }

  function editForm() {
    return (
      <form className="review-edit-input-container" onSubmit={onSave}>
        {/* <div className="review-create-user-avatar">
                  <img src={user.display_pic}></img>
                </div> */}

        <div className="review-edit-input">
          <textarea
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="review-create-radio">
          <fieldset className="do-you-rec-edit">
            <div className="do-you-rec-1">Do you recommend this game?</div>
            <div className="do-you-rec-2">
              <div className="do-you-rec-radio-container">
                <input
                  type="radio"
                  id="recommended-yes"
                  name="recommended"
                  value="Recommended"
                  onChange={(e) => setRecommended(e.target.value)}
                  checked={recommended === "Recommended"}
                  required
                />
                <label htmlFor="recommended-yes">Yes</label>
                <input
                  type="radio"
                  id="recommended-no"
                  name="recommended"
                  value="Not Recommended"
                  onChange={(e) => setRecommended(e.target.value)}
                  checked={recommended === "Not Recommended"}
                  required
                />
                <label htmlFor="recommended-no">No</label>
              </div>
            </div>
          </fieldset>
          <div className="review-user-actions-edit">
            <div className="review-edit-btns-container">
              <button
                className="cancel-review"
                onClick={() => setShowEditForm(false)}
              >
                Cancel&nbsp;
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="save-review" type="submit" onSubmit={onSave}>
                Save&nbsp;
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }

  function dateConverter(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "utc",
    });
  }
};

export default GameReviews;
