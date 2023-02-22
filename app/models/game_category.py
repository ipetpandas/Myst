from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class GameCategory(db.Model):
  __tablename__ = "game_categories_table"

  if environment == "production":
    __table_args__ = {"schema": SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("games_table.id")), nullable=False)
  category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("categories_table.id")), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
  updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

  # # Relationships
  # game = db.relationship('Game', back_populates='game_categories')
  # category = db.relationship('Category', back_populates='game_categories')

  # def to_dict(self):
  #   return {
  #     "id": self.id,
  #     "game_id": self.game_id,
  #     "category_id": self.category_id,
  #     "created_at": self.created_at,
  #     "updated_at": self.updated_at
  #   }
