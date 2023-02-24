import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { thunkClearCart, thunkReadUserCart } from "../../store/carts";
import { useSelector } from "react-redux";
import "./Cart.css";
import { thunkAddToLibrary } from "../../store/libraries";

const Cart = () => {
  const dispatch = useDispatch();
  let [isLoaded, setIsLoaded] = useState(false);
  let [cartTotal, setCartTotal] = useState(0);
  const cart = useSelector((state) => state.cart);
  let history = useHistory();

  useEffect(() => {
    // setCartTotal(0);
    // let total = cartTotal;
    // Object.values(cart).forEach((game) => (total += game.price));
    // setCartTotal(total);

    dispatch(thunkReadUserCart())
      .then(() => {
        let total = 0;
        Object.values(cart).forEach((game) => (total += game.price));
        setCartTotal(total);
      })
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  // useEffect for getting total price in cart
  useEffect(() => {
    let total = 0;
    Object.values(cart).forEach((game) => (total += game.price));
    setCartTotal(total);
  }, [cart]);

  const clearCart = () => {
    dispatch(thunkClearCart());
  };

  const completePurchase = () => {
    const game_ids = Object.keys(cart);
    dispatch(thunkAddToLibrary(game_ids));
    clearCart();
    history.push("/library");
  };

  return (
    <div className="cart-container">
      <div className="cart-game-card-container">
        {isLoaded &&
          Object.values(cart).map((game) => {
            return (
              <div className="cart-game-card">
                <NavLink exact to={`/games/${game.id}`}>
                  <div className="cart-game-card-banner">
                    <img src={game.main_banner_url}></img>
                  </div>
                </NavLink>
                <div className="cart-game-card-info">
                  <div className="cart-game-card-name-price-ctn">
                    <div className="cart-game-title">{game.title}</div>
                    <div className="cart-game-price">
                      {game.price === 0 ? "FREE TO PLAY" : `$` + game.price}
                    </div>
                  </div>
                  <div className="cart-game-delete">
                    <button className="cart-delete-btn">
                      <span>
                        <i className="fa-solid fa-trash fa-sm"></i>
                      </span>
                      <span>&nbsp;Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        {!Object.values(cart).length ? (
          <div>Nothing in cart. Please add a game!</div>
        ) : (
          <div className="clear-cart-container">
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear All
            </button>
          </div>
        )}
      </div>
      <div className="check-out-container">
        {isLoaded &&
          Object.values(cart).map((game) => {
            return (
              <div className="cart-item">
                <div>{"$" + game.title}</div>
                <div>{game.price}</div>
              </div>
            );
          })}
        {isLoaded && (
          <>
            <div className="cart-sub-total">{`$` + cartTotal}</div>
            <div className="cart-tax">
              {`Tax 7% $` + (cartTotal * 0.07).toFixed(2)}
            </div>
            <div className="cart-total">
              {`$` + (cartTotal * 1.07).toFixed(2)}
            </div>
            <button className="purchase-button" onClick={completePurchase}>
              Complete Purchase
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
