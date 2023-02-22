from app.models import db, Review, environment, SCHEMA

def seed_reviews():

  peter1 = Review(
    author_id=2,
    game_id=1,
    recommended=True,
    review="Probably the only battle royale I enjoy. Graphics are amazing and the champions are very likeable."
  )

  peter2 = Review(
    author_id=2,
    game_id=2,
    recommended=True,
    review="Game is definitely a lot better now than it was at launch; storytelling is A+ but the game immersion is not on par with Rockstar Games."
  )

  peter3 = Review(
    author_id=2,
    game_id=3,
    recommended=True,
    review="Stayed true to the original. A+ gameplay and story. Can't wait for part 2."
  )

  peter4 = Review(
    author_id=2,
    game_id=5,
    recommended=True,
    review="One of the best classic horror game that's been remade 20 years later."
  )

  peter5 = Review(
    author_id=2,
    game_id=7,
    recommended=False,
    review="Been playing this game for too long but the state that it is currently in I definitely do not recommend to new players."
  )

  db.session.add_all(
    [
      peter1,
      peter2,
      peter3,
      peter4,
      peter5,
    ]
  )

def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews_table RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute("DELETE FROM reviews_table")

    db.session.commit()
