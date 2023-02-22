from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Cart(db.Model):
  __tablename__ = 'cart_table'

  if environment == "production":
    __table_args__ = {"schema": SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users_table.id")), nullable=False)
  game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("games_table.id")), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
  updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

  # Relationships
  # user = db.relationship('User', back_populates='cart_items')
  # game = db.relationship('Game', back_populates='cart_items')

  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "game_id": self.game_id,
      "created_at": self.created_at,
      "updated_at": self.updated_at
    }
