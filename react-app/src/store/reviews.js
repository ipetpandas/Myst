const READ_REVIEWS_BY_GAME_ID = `reviews/READ_REVIEWS_BY_GAME_ID`;
const EDIT_REVIEW_BY_GAME_ID = `reviews/EDIT_REVIEW_BY_GAME_ID`;
const EDIT_REVIEW_BY_REVIEW_ID = `reviews/EDIT_REVIEW_BY_REVIEW_ID`;
const DELETE_REVIEW_BY_GAME_ID = `reviews/DELETE_REVIEW_BY_GAME_ID`;
const DELETE_REVIEW_BY_REVIEW_ID = `reviews/DELETE_REVIEW_BY_REVIEW_ID`;
const CREATE_REVIEW = `reviews/CREATE_REVIEW`;

//-------------------------------------------------------

// Actions

// READ REVIEWS BY GAME ID
const actionReadReviewsByGameId = (reviews) => ({
  type: READ_REVIEWS_BY_GAME_ID,
  reviews: reviews.reviews,
});

// EDIT REVIEW BY GAME ID
const actionEditReviewByGameId = (review) => ({
  type: EDIT_REVIEW_BY_GAME_ID,
  review: review.review,
});

// EDIT REVIEW BY REVIEW ID
const actionEditReviewByReviewId = (review) => ({
  type: EDIT_REVIEW_BY_REVIEW_ID,
  review: review.review,
});

// DELETE REVIEW BY GAME ID
const actionDeleteReviewByGameId = (response) => ({
  type: DELETE_REVIEW_BY_GAME_ID,
  message: response.message,
  author_id: response.author_id,
});

// DELETE REVIEW BY REVIEW ID
const actionDeleteReviewByReviewId = (response) => ({
  type: DELETE_REVIEW_BY_GAME_ID,
  message: response.message,
  author_id: response.author_id,
});

// CREATE REVIEW
const actionCreateReview = (review) => ({
  type: CREATE_REVIEW,
  review: review.review,
});

// Thunks

// GET: Get all reviews by game id
export const thunkReadReviewsByGameId = (game_id) => async (dispatch) => {
  console.log("PATH ----->", `/api/games/${game_id}/reviews`);
  let res = await fetch(`/api/games/${game_id}/reviews`);

  if (res.ok) {
    const data = await res.json(); // { "reviews" : {...reviews...}}
    dispatch(actionReadReviewsByGameId(data));
    return data;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

// EDIT
export const thunkEditReviewByGameId =
  (game_id, review) => async (dispatch) => {
    console.log("THUNK EDIT REC? ", review.recommended);
    let res = await fetch(`/api/games/${game_id}/reviews/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });

    if (res.ok) {
      const updatedReview = await res.json();
      dispatch(actionEditReviewByGameId(updatedReview));
      return updatedReview;
    } else if (res.status < 500) {
      const data = await res.json();
      // console.log("EDIT THUNK ELSE IF ==========>", data);
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

// DELETE
export const thunkDeleteReviewByGameId = (game_id) => async (dispatch) => {
  let res = await fetch(`/api/games/${game_id}/reviews/`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const response = await res.json();
    dispatch(actionDeleteReviewByGameId(response));
    return response;
  } else if (res.status < 500) {
    const data = await res.json();
    // console.log("EDIT THUNK ELSE IF ==========>", data);
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const thunkDeleteReviewByReviewId = (review_id) => async (dispatch) => {
  let res = await fetch(`/api/reviews/${review_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const response = await res.json();
    dispatch(actionDeleteReviewByReviewId(response));
    return response;
  } else if (res.status < 500) {
    const data = await res.json();
    // console.log("EDIT THUNK ELSE IF ==========>", data);
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const thunkCreateReview = (review, game_id) => async (dispatch) => {
  const response = await fetch(`/api/games/${game_id}/reviews/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });

  if (response.ok) {
    const newReview = await response.json();
    dispatch(actionCreateReview(newReview));
    return newReview;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

// Reducer

let initialState = { gameReviews: {}, userReviews: {} };

const reviewsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case READ_REVIEWS_BY_GAME_ID:
      newState = { ...state };
      newState.gameReviews = action.reviews;
      return newState;
    case EDIT_REVIEW_BY_GAME_ID:
      newState = { ...state };
      newState.gameReviews[action.review.author_id] = action.review;
      return newState;
    case DELETE_REVIEW_BY_GAME_ID:
      newState = { ...state };
      delete newState.gameReviews[action.author_id];
      return newState;
    case DELETE_REVIEW_BY_REVIEW_ID:
      newState = { ...state };
      delete newState.gameReviews[action.author_id];
      return newState;
    case CREATE_REVIEW:
      newState = { ...state };
      newState.gameReviews[action.review.author_id] = action.review;
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
