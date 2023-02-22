from flask import Flask, Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Game

# url_prefix="api/games"
game_routes = Blueprint("games", __name__)

# GET ALL GAMES
@game_routes.route("/")
# @login_required
def games():
  games = Game.query.all()
  return {"games": [game.to_dict() for game in games]}, 200
