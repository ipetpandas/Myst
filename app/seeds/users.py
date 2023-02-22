from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        email='demo-lition@aa.io',
        password='password',
        display_pic="https://steamavatar.io/img/1477351899v6iQb.jpg"
    )

    Peter = User(
        username='ipetpandas',
        email='peter@aa.io',
        password='password',
        display_pic="https://i.pinimg.com/originals/f9/8e/56/f98e56072c2b5126f3bdbe2670c94019.jpg"
    )

    Alex = User(
        username='alexle',
        email='alex-le@aa.io',
        password='password',
        display_pic="https://cdn.myanimelist.net/images/characters/11/483437.jpg"
    )

    John = User(
        username='john_doe',
        email='johndoe@aa.io',
        password='password',
        display_pic="https://steamavatar.io/img/1477351906o9rtl.jpg"
    )

    Jane = User(
        username='jane_doe',
        email='janedoe@aa.io',
        password='password',
        display_pic="https://steamavatar.io/img/14777876487vBgd.jpg"
    )

    Austin = User(
        username='austinbby',
        email='austin@aa.io',
        password='password',
        display_pic="https://steamavatar.io/img/1477741506Tccln.jpg"
    )

    db.session.add_all(
        [
            demo,
            Peter,
            Alex,
            John,
            Jane,
            Austin
        ]
    )
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users_table RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users_table")

    db.session.commit()
