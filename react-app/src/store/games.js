const READ_ALL_GAMES = `games/READ_ALL_GAMES`;
const READ_GAME = `games/READ_GAME`;
const READ_GAME_BY_CATEGORY = `games/READ_GAME_BY_CATEGORY`;

//-------------------------------------------------------

// Actions

// GET ALL GAMES
const actionReadAllGames = (games) => ({
  type: READ_ALL_GAMES,
  games, // { "games" : [ ... ] }
});

// GET GAME
const actionReadGame = (game) => ({
  type: READ_GAME,
  game,
});

// GET GAME BY CATEGORY
const actionReadGameByCategory = (games) => ({
  type: READ_GAME_BY_CATEGORY,
  games,
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

export const thunkReadGame = (gameId) => async (dispatch) => {
  let res = await fetch(`/api/games/${gameId}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(actionReadGame(data));
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

export const thunkReadGameByCategory = (category_id) => async (dispatch) => {
  let res = await fetch(`/api/games/category/${category_id}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(actionReadGameByCategory(data));
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
  const initialState = { allGames: {}, singleGame: {}, categoryGames: {} };
  return initialState;
}

const gameReducer = (state = defaultState(), action) => {
  let newState;

  switch (action.type) {
    case READ_ALL_GAMES:
      newState = { ...state };
      action.games.games.forEach((game) => (newState.allGames[game.id] = game));
      return newState;
    case READ_GAME:
      newState = { ...state };
      newState.singleGame = action.game.game_by_id;
      return newState;
    case READ_GAME_BY_CATEGORY:
      newState = { ...state };
      newState.categoryGames = action.games.games_by_category;
    default:
      return state;
  }
};

export default gameReducer;
