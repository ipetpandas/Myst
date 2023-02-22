from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Category(db.Model):
  __tablename__ = "categories_table"

  if environment == "production":
    __table_args__ = {"schema": SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
  updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

  # Relationships
  games = db.relationship('Game', secondary='game_categories_table', back_populates='categories')
  # games = db.relationship('Game', back_populates='categories')

  if environment == "production":
    __table_args__ = {"schema": SCHEMA}
    games = db.relationship('Game', secondary=f"{SCHEMA}.game_categories_table", back_populates='categories')
  else:
    games = db.relationship('Game', secondary='game_categories_table', back_populates='categories')

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "created_at": self.created_at,
      "updated_at": self.updated_at,
      # "games": [game.to_dict() for game in self.games]
    }
