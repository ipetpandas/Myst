from app.models import db, Wishlist, environment, SCHEMA

def seed_wishlists():

  peter1 = Wishlist(
    user_id=2,
    game_id=4
  )

  peter2 = Wishlist(
    user_id=2,
    game_id=6
  )

  db.session.add_all(
    [
      peter1,
      peter2
    ]
  )

  db.session.commit()

def undo_wishlists():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.wishlist_table RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute("DELETE FROM wishlist_table")

    db.session.commit()
