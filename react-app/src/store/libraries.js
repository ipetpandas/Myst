const READ_USER_LIBRARY = "library/READ_USER_LIBRARY";
const ADD_TO_LIBRARY = "library/ADD_TO_LIBRARY";

const actionReadUserLibrary = (library) => ({
  type: READ_USER_LIBRARY,
  library: library.library,
});

const actionAddToLibrary = (games) => ({
  type: ADD_TO_LIBRARY,
  games: games.games_added,
});

export const thunkReadUserLibrary = () => async (dispatch) => {
  let res = await fetch(`/api/libraries/`);

  if (res.ok) {
    const data = await res.json();
    dispatch(actionReadUserLibrary(data));
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

export const thunkAddToLibrary = (game_ids) => async (dispatch) => {
  let res = await fetch(`/api/libraries/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ game_ids: game_ids }),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(actionAddToLibrary(data));
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

let initialState = {};

const libraryReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case READ_USER_LIBRARY:
      newState = { ...state };
      newState = action.library;
      return newState;
    case ADD_TO_LIBRARY:
      newState = { ...state, ...action.games };
      return newState;
    default:
      return state;
  }
};

export default libraryReducer;
