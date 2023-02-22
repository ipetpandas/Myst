from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class GameScreenshot(db.Model):
  __tablename__ = "game_screenshots_table"

  if environment == "production":
    __table_args__ = {"schema": SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("games_table.id")), nullable=False)
  screenshot_url = db.Column(db.String, nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
  updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

  # Relationships
  game = db.relationship('Game', back_populates="screenshots")

  def to_dict(self):
    return {
      "id": self.id,
      "game_id": self.game_id,
      "screenshot_url": self.screenshot_url,
      "created_at": self.created_at,
      "updated_at": self.updated_at
    }
