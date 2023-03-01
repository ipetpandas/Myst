const READ_USER_CART = `cart/READ_USER_CART`;
const ADD_TO_CART = `cart/ADD_TO_CART`;
const CLEAR_CART = `cart/CLEAR_CART`;
const DELETE_CART_ITEM = `cart/DELETE_CART_ITEM`;

//-------------------------------------------------------

// Actions

// GET USER'S CART
const actionReadUserCart = (cart) => ({
  type: READ_USER_CART,
  cart: cart.cart,
});

// ADD TO CART
const actionAddToCart = (cart) => ({
  type: ADD_TO_CART,
  cart: cart.cart_items,
});

// CLEAR CART
const actionClearCart = () => ({
  type: CLEAR_CART,
});

// DELETE CART ITEM
const deleteCartItem = (game) => ({
  type: DELETE_CART_ITEM,
  game: game.game,
  game_id: game.game_id,
});

//-------------------------------------------------------

// Thunks

// GET: Get User's Cart
export const thunkReadUserCart = () => async (dispatch) => {
  let res = await fetch(`/api/carts/`);

  if (res.ok) {
    const data = await res.json();
    dispatch(actionReadUserCart(data));
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

// CREATE: Add game to user's cart
export const thunkAddToCart = (game_id) => async (dispatch) => {
  let res = await fetch(`/api/carts/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ game_id }),
  });

  if (res.ok) {
    const data = await res.json(); // backend returns full cart with new game added
    dispatch(actionAddToCart(data));
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

// REMOVE ALL GAMES FROM CART
export const thunkClearCart = () => async (dispatch) => {
  let res = await fetch(`/api/carts/clear`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json(); // backend returns full cart with new game added
    dispatch(actionClearCart());
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

// DELETE
export const thunkDeleteCartItem = (game_id) => async (dispatch) => {
  let res = await fetch(`/api/carts/`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ game_id }),
  });

  if (res.ok) {
    const data = await res.json(); // backend returns full cart with new game added
    dispatch(deleteCartItem(data));
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

// function defaultState() {
//   const initialState = {};
//   return initialState;
// }

const initialState = {};

const cartReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case READ_USER_CART:
      newState = { ...state };
      newState = action.cart;
      return newState;
    case ADD_TO_CART:
      newState = { ...state };
      newState = action.cart;
      return newState;
    case CLEAR_CART:
      newState = { ...state };
      newState = {};
      return newState;
    case DELETE_CART_ITEM:
      newState = { ...state };
      delete newState[action.game_id];
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
