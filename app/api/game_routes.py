from flask import Flask, Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Game, Category, GameCategory, Review
from app.forms import ReviewForm

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
# GET
@game_routes.route("/<int:game_id>/reviews/")
def get_all_reviews_by_game_id(game_id):
  reviews = Review.query.filter(Review.game_id == game_id).all()

  dict = {}
  for review in reviews:
    dict[review.author_id] = review.to_dict()
  # print("REVIEWS FROM BACKEND -------->", dict)
  return {"reviews": dict}

# CREATE
@game_routes.route("/<int:game_id>/reviews/", methods=["POST"])
@login_required
def create_review(game_id):
  form = ReviewForm()
  form["csrf_token"].data = request.cookies["csrf_token"]
  existing_review = Review.query.filter(Review.author_id == current_user.id, Review.game_id == game_id).first()
  if existing_review:
      return {"errors": ["Review already exists"]}
  if form.validate_on_submit():
    review = Review(
      author_id=int(current_user.id),
      game_id=int(game_id),
      recommended=form.data["recommended"],
      review=form.data["review"]
    )
    db.session.add(review)
    db.session.commit()
    return {"review": review.to_dict()}, 201
  return {"errors": ["Could not complete request"]}

# UPDATE
@game_routes.route("/<int:game_id>/reviews/", methods=["PUT"])
@login_required
def update_review(game_id):
  form = ReviewForm()
  form["csrf_token"].data = request.cookies["csrf_token"]
  existing_review = Review.query.filter(Review.author_id == current_user.id, Review.game_id == game_id).first()
  # print("Review existing", existing_review.to_dict())
  # print("Review valid", form.validate_on_submit())
  if not existing_review:
      return {"errors": ["Could not complete request"]}
  if form.validate_on_submit():
    existing_review.recommended = form.data["recommended"]
    existing_review.review = form.data["review"]
    db.session.commit()
    return {"review": existing_review.to_dict()}, 201
  return {"errors": ["Could not complete request"]}

# DELETE
@game_routes.route("/<int:game_id>/reviews/", methods=["DELETE"])
@login_required
def delete_review(game_id):
  review = Review.query.filter(Review.author_id == current_user.id, Review.game_id == game_id).first()
  if review:
    db.session.delete(review)
    db.session.commit()
    return {"message": "Review successfully deleted.", "author_id": current_user.id}
  return {"errors": ["Could not complete request"]}
