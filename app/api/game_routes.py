from flask import Flask, Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Game, Category, GameCategory, Review

# url_prefix="api/games"
game_routes = Blueprint("games", __name__)

# GET ALL GAMES
@game_routes.route("/")
# @login_required
def games():
  games = Game.query.all()
  return {"games": [game.to_dict() for game in games]}, 200

# GET GAME BY ID
@game_routes.route("/<int:game_id>")
def get_game_by_id(game_id):
  # print("GAME BY ID-------------->", fetching game by id)
  game = Game.query.get(game_id)
  if not game:
    return {"errors": ["Game does not exist"]}, 404
  return {'game_by_id': game.to_dict()}

# GET GAMES BY CATEGORY
@game_routes.route("/category/<int:category_id>")
def get_games_by_category(category_id):
  # print("CATEGORY---------------> fetching games by category")
  category = Category.query.get(category_id)
  # print("CATEGORY--------------->", category.games)
  if not category:
    return {"errors": ["Category does not exist"]}, 404
  return {'games_by_category': [game.to_dict() for game in category.games]}

####################################################

# REVIEWS

@game_routes.route("/<int:game_id>/reviews/")
def get_all_reviews_by_game_id(game_id):
  reviews = Review.query.filter(Review.game_id == game_id).all()

  dict = {}
  for review in reviews:
    dict[review.author_id] = review.to_dict()
  print("REVIEWS FROM BACKEND -------->", dict)
  return {"reviews": dict}
