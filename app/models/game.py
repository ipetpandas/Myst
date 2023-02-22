from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Game(db.Model):
  __tablename__ = "games_table"

  if environment == "production":
    __table_args__ = {"schema": SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(255), nullable=False)
  release_date = db.Column(db.Date, nullable=False)
  developer = db.Column(db.String(255), nullable=False)
  publisher = db.Column(db.String(255), nullable=False)
  price = db.Column(db.Float, nullable=True)
  featured_banner_url = db.Column(db.String, nullable=True)
  main_banner_url = db.Column(db.String(1000), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
  updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

  # Relationships
  cart_items = db.relationship('Cart', back_populates='game')
  screenshots = db.relationship('GameScreenshot', back_populates="game")
  categories = db.relationship('Category', secondary='game_categories_table', back_populates='games')
  # categories = db.relationship('Category', back_populates='games')
  reviews = db.relationship('Review', back_populates='game')
  libraries = db.relationship('Library', back_populates='game')
  wishlist = db.relationship('Wishlist', back_populates='game')

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "release_date": self.release_date,
      "developer": self.developer,
      "publisher": self.publisher,
      "price": self.price,
      "featured_banner_url": self.featured_banner_url,
      "main_banner_url": self.main_banner_url,
      "created_at": self.created_at,
      "updated_at": self.updated_at,
      # "cart_items": [cart_item.to_dict() for cart_item in self.cart_items],
      "screenshots": [screenshot.to_dict() for screenshot in self.screenshots],
      "categories": [category.to_dict() for category in self.categories],
      "reviews": [review.to_dict() for review in self.reviews],
      # "libraries": [library.to_dict() for library in self.libraries]
    }
