from flask import Flask, Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Review

review_routes = Blueprint("reviews", __name__)

# GET USER'S REVIEWS
@review_routes.route("/")
@login_required
def get_user_reviews():
    reviews = current_user.reviews
    print(reviews)
    return {"user_reviews": [review.to_dict() for review in reviews]}

# DELETE
@review_routes.route("/<int:review_id>", methods=["DELETE"])
@login_required
def delete_review(review_id):
  review = Review.query.get(review_id)
  if review and review.author_id == current_user.id:
    db.session.delete(review)
    db.session.commit()
    return {"message": "Review successfully deleted."}
  if not review.author_id == current_user.id:
    return {"errors": ["Unauthorized"]}, 401
  return {"errors": ["Could not complete request"]}
