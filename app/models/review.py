from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Review(db.Model):
  __tablename__ = "reviews_table"

  if environment == "production":
    __table_args__ = {"schema": SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users_table.id")), nullable=False)
  game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("games_table.id")), nullable=False)
  recommended = db.Column(db.Boolean, nullable=False)
  review = db.Column(db.String, nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
  updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

  # Relationships
  author = db.relationship('User', back_populates='reviews')
  game = db.relationship('Game', back_populates='reviews')

  def to_dict(self):
    return {
      "id": self.id,
      "author_id": self.author_id,
      "game_id": self.game_id,
      "recommended": self.recommended,
      "review": self.review,
      "created_at": self.created_at,
      "updated_at": self.updated_at,
      "title": self.game.title,
      "main_banner_url": self.game.main_banner_url,
      "author_name": self.author.username,
      "author_display_pic": self.author.display_pic
    }
