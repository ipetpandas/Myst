const READ_ALL_GAMES = `games/READ_ALL_GAMES`;

//-------------------------------------------------------

// Actions

// GET ALL GAMES
const actionReadAllGames = (games) => ({
  type: READ_ALL_GAMES,
  games, // { "games" : [ ... ] }
});

//-------------------------------------------------------

// Thunks

// GET: Get All Games
export const thunkReadAllGames = () => async (dispatch) => {
  let res = await fetch(`/api/games/`);

  if (res.ok) {
    const data = await res.json();
    dispatch(actionReadAllGames(data));
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

//-------------------------------------------------------

// Reducer

function defaultState() {
  const initialState = {};
  return initialState;
}

const gameReducer = (state = defaultState(), action) => {
  let newState;

  switch (action.type) {
    case READ_ALL_GAMES:
      newState = {};
      action.games.games.forEach((game) => (newState[game.id] = game));
      return newState;
    default:
      return state;
  }
};

export default gameReducer;
