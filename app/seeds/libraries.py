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

  peter6 = Library(
    user_id=2,
    game_id=14
  )

  peter7 = Library(
      user_id=2,
      game_id=17
  )

  alex1 = Library(
    user_id=3,
    game_id=1
  )

  ellie1 = Library(
    user_id=7,
    game_id=1
  )

  ellie2 = Library(
    user_id=7,
    game_id=6
  )

  ellie3 = Library(
      user_id=7,
      game_id=13
  )

  michael1 = Library(
    user_id=8,
    game_id=1
  )

  michael2 = Library(
    user_id=8,
    game_id=7
  )

  michael3 = Library(
    user_id=8,
    game_id=12
  )

  kenny1 = Library (
      user_id=9,
      game_id=1
  )

  kenny2 = Library (
      user_id=9,
      game_id=3
  )

  aaron1 = Library (
      user_id=10,
      game_id=1
  )

  aaron2 = Library (
      user_id=10,
      game_id=2
  )

  acutely1 = Library(
      user_id=11,
      game_id=10
  )

  john1 = Library(
      user_id=4,
      game_id=13
  )

  calcifer1 = Library(
      user_id=12,
      game_id=8
  )

  calcifer2 = Library(
      user_id=12,
      game_id=16
  )

  db.session.add_all(
    [
      peter1,
      peter2,
      peter3,
      peter4,
      peter5,
      peter6,
      peter7,
      alex1,
      ellie1,
      ellie2,
      ellie3,
      michael1,
      michael2,
      michael3,
      kenny1,
      kenny2,
      aaron1,
      aaron2,
      acutely1,
      john1,
      calcifer1,
      calcifer2
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
