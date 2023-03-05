from app.models import db, Category, environment, SCHEMA

def seed_categories():

  category1 = Category(
    name="Featured"
  )

  category2 = Category(
    name="Battle Royale"
  )

  category3 = Category(
    name="Action"
  )

  category4 = Category(
    name="JRPG"
  )

  category5 = Category(
    name="Horror"
  )

  category6 = Category(
    name="Casual"
  )

  category7 = Category(
    name="Simulation"
  )

  category8 = Category(
    name="Platformer"
  )

  category9 = Category(
      name="Fighting"
  )

  category10 = Category(
      name="Choices Matter"
  )

  db.session.add_all(
    [
      category1,
      category2,
      category3,
      category4,
      category5,
      category6,
      category7,
      category8,
      category9,
      category10
    ]
  )

  db.session.commit()

def undo_categories():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.categories_table RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute("DELETE FROM categories_table")

    db.session.commit()
