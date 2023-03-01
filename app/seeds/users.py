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
        display_pic="https://64.media.tumblr.com/523b041c9e245a41efd41ae5ca4659e6/9fe1088b122f3d78-0a/s540x810/a9b98adf164530f28e6b31e8e057d6ca719a2ca5.gifv"
    )

    Alex = User(
        username='alexle',
        email='alex-le@aa.io',
        password='password',
        display_pic="https://media.tenor.com/ArV6RGIhAGkAAAAC/edgerunners-cyberpunk.gif"
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

    Ellie = User(
        username='egirlgamer',
        email='ellieriot@gmail.com',
        password='elle',
        display_pic="https://gif-avatars.com/img/90x90/get-it-girl.gif"
    )

    Michael = User(
        username='elfkid91',
        email='elfkid91@gmail.com',
        password='ihateapexlegends',
        display_pic='https://tr.rbxcdn.com/e7711dbdf4b5d310d8cdca400d0d7c13/500/280/Image/Jpeg'
    )

    Kenny = User(
        username='gas_station_corn_dog',
        email='ilovecorndogs@gmail.com',
        password='corndog',
        display_pic='https://media.tenor.com/MKNUrhy6b_EAAAAi/usamaru-cute.gif'
    )

    Aaron = User(
        username='Anonymous',
        email='chocolaterain@gmail.com',
        password='chocolate',
        display_pic='https://i.pinimg.com/736x/5d/ed/2b/5ded2bcfcd73ea6c6f66975029e8960e.jpg'
    )

    db.session.add_all(
        [
            demo,
            Peter,
            Alex,
            John,
            Jane,
            Austin,
            Ellie,
            Michael,
            Kenny,
            Aaron
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
