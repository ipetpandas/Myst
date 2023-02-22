from flask import Flask, Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Cart, User, Game

# url_prefix="api/cart"
cart_routes = Blueprint("carts", __name__)

# GET USER'S CART
@cart_routes.route("/")
@login_required
def get_cart():
  print("CURRENT USER ---------------> getting current user's cart items")
  print("CURRENT USER --------------->", current_user)
  print("CURRENT USER ID ------------------------->", current_user.id)
  # if current_user.is_authenticated:
  #   user_id = int(current_user.id)
  #   print("CURRENT USER --------------->", user_id)
  #   return {"cart": []}
  dict = {}
  for game in current_user.games:
    dict[game.id] = game.to_cart_dict()

  return {"cart": dict}

# ADD TO USER'S CART
@cart_routes.route("/", methods=["POST"])
@login_required
def add_to_cart():
  data = request.json
  game_id = data["game_id"]
  game = Game.query.get(game_id)
  print("ADD TO CART ---------------->", game)
  if (game):
    cart_items = current_user.games
    print("ADD TO CART BEFORE ---------------->", cart_items)
    cart_items.append(game)
    print("ADD TO CART AFTER ---------------->", cart_items)
    db.session.commit()
    dict = {}
    for game in cart_items:
      dict[game.id] = game.to_cart_dict()
    return {"cart_items": dict}, 201
  else:
    return {"errors": ["Could not complete request"]}

# DELETE ALL USER'S CART GAMES
@cart_routes.route("/clear", methods=["DELETE"])
@login_required
def clear_cart():
  cart_items = current_user.games
  cart_items.clear()
  db.session.commit()
  return {"Message": "Successfully cleared cart"}, 200

# DELETE A USER'S CART GAME
@cart_routes.route("/", methods=["DELETE"])
@login_required
def delete_game():
  # pass body with game_id
  data = request.json
  # extract the game_id from our body
  game_id = data["game_id"]
  # query for the game itself
  game = Game.query.get(game_id)
  if game:
    # access the user's current cart
    cart_items = current_user.games
    # remove game if it exists
    try:
      cart_items.remove(game)
      db.session.commit()
      return {"game" : game.to_cart_dict(), "game_id": game_id}, 200
    except ValueError:
      return {"errors": ["This item is not in your cart"]}
  return {"errors": ["Could not complete request"]}
