const READ_REVIEWS_BY_GAME_ID = `reviews/READ_REVIEWS_BY_GAME_ID`;

//-------------------------------------------------------

// Actions

// READ REVIEWS BY GAME ID
const actionReadReviewsByGameId = (reviews) => ({
  type: READ_REVIEWS_BY_GAME_ID,
  reviews: reviews.reviews,
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

// Reducer

let initialState = {};

const reviewsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case READ_REVIEWS_BY_GAME_ID:
      newState = { ...state };
      newState = action.reviews;
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
