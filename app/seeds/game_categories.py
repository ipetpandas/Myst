from app.models import db, GameCategory, environment, SCHEMA

def seed_game_categories():

  apex1 = GameCategory(
    game_id=1,
    category_id=1
  )

  apex2 = GameCategory(
    game_id=1,
    category_id=2
  )

  cp1 = GameCategory(
    game_id=2,
    category_id=1
  )

  cp2 = GameCategory(
    game_id=2,
    category_id=3
  )

  ff7re1 = GameCategory(
    game_id=3,
    category_id=1
  )

  ff7re2 = GameCategory(
    game_id=3,
    category_id=4
  )

  re4 = GameCategory(
    game_id=4,
    category_id=5
  )

  re42 = GameCategory(
      game_id=4,
      category_id=1
  )

  re2 = GameCategory(
    game_id=5,
    category_id=5
  )

  ishin1 = GameCategory(
    game_id=6,
    category_id=1
  )

  ishin2 = GameCategory(
    game_id=6,
    category_id=3
  )

  ishin3 = GameCategory(
    game_id=6,
    category_id=4
  )

  dbd1 = GameCategory(
    game_id=7,
    category_id=1
  )

  dbd2 = GameCategory(
    game_id=7,
    category_id=5
  )

  stardew = GameCategory(
    game_id=8,
    category_id=6
  )

  ts41 = GameCategory(
    game_id=9,
    category_id=1
  )

  ts42 = GameCategory(
    game_id=9,
    category_id=7
  )

  ts43 = GameCategory(
    game_id=9,
    category_id=6
  )

  hk1 = GameCategory(
    game_id=10,
    category_id=8
  )

  tk71 = GameCategory(
    game_id=11,
    category_id=9
  )

  tk72 = GameCategory(
    game_id=11,
    category_id=3
  )

  op21 = GameCategory(
      game_id=12,
      category_id=4
  )

  naraka1 = GameCategory(
      game_id=13,
      category_id=2
  )

  p5r1 = GameCategory(
      game_id=14,
      category_id=4
  )

  db.session.add_all(
    [
      apex1,
      apex2,
      cp1,
      cp2,
      ff7re1,
      ff7re2,
      re4,
      re42,
      re2,
      ishin1,
      ishin2,
      ishin3,
      dbd1,
      dbd2,
      stardew,
      ts41,
      ts42,
      ts43,
      hk1,
      tk71,
      tk72,
      op21,
      naraka1,
      p5r1
    ]
  )

  db.session.commit()

def undo_game_categories():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.game_categories_table RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute("DELETE FROM game_categories_table")

    db.session.commit()
