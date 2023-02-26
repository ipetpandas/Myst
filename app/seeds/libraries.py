from app.models import db, Library, environment, SCHEMA

def seed_libraries():

  peter1 = Library(
    user_id=2,
    game_id=1
  )

  peter2 = Library(
    user_id=2,
    game_id=2
  )

  peter3 = Library(
    user_id=2,
    game_id=3
  )

  peter4 = Library(
    user_id=2,
    game_id=5
  )

  peter5 = Library(
    user_id=2,
    game_id=7
  )

  alex1 = Library(
    user_id=3,
    game_id=1
  )

  ellie1 = Library(
    user_id=7,
    game_id=1
  )

  michael1 = Library(
    user_id=8,
    game_id=1
  )

  kenny1 = Library (
      user_id=9,
      game_id=1
  )

  aaron1 = Library (
      user_id=10,
      game_id=1
  )

  db.session.add_all(
    [
      peter1,
      peter2,
      peter3,
      peter4,
      peter5,
      alex1,
      ellie1,
      michael1,
      kenny1,
      aaron1
    ]
  )

  db.session.commit()

def undo_libraries():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.libraries_table RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute("DELETE FROM libraries_table")

    db.session.commit()
