from flask import Flask, Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Review

review_routes = Blueprint("reviews", __name__)

# GET ALL REVIEWS BY GAME ID
@review_routes.route("/")
def get_all_reviews():
    reviews = Review.query.all()
    return {"reviews": [review.to_dict() for review in reviews]}, 200
