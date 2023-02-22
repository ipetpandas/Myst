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

  db.session.add_all(
    [
      peter1,
      peter2,
      peter3,
      peter4,
      peter5,
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
