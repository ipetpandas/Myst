from app.models import db, Game, environment, SCHEMA
import datetime

def seed_games():

  apex = Game(
    title="Apex Legends",
    # release_date="2020-11-04",
    release_date=datetime.date(2020, 11, 4),
    developer="Respawn Entertainment",
    publisher="Electronic Arts",
    price=0,
    featured_banner_url="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/38098458/cec54327d06ac2608ad2f192d1a9d4dcf248e2e3_960x311.jpg",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg"
  )

  cyberpunk = Game(
    title="Cyberpunk 2077",
    # release_date="2020-12-09",
    release_date=datetime.date(2020, 12, 9),
    developer="CD PROJEKT RED",
    publisher="CD PROJEKT RED",
    price=59.99,
    featured_banner_url="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/35210272/71ab451ccd7aff223b55d5dbd411fcf60aaaa643_960x311.png",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1663663573"
  )

  ff7re = Game(
    title="Final Fantasy VII Remake Intergrade",
    # release_date="2022-06-17",
    release_date=datetime.date(2022, 6, 17),
    developer="Square Enix",
    publisher="Square Enix",
    price=69.99,
    featured_banner_url="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/42536301/1b75e08c56340cf39a49fdde1de2e53ae5a03ab9_960x311.jpg",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/header.jpg?t=1663767129"
  )

  re4 = Game(
    title="Resident Evil 4",
    # release_date="2023-03-23",
    release_date=datetime.date(2023, 3, 23),
    developer="CAPCOM Co., Ltd.",
    publisher="CAPCOM Co., Ltd.",
    price=59.99,
    featured_banner_url="",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg?t=1676336907"
  )

  re2 = Game(
    title="Resident Evil 2",
    # release_date="2019-01-24",
    release_date=datetime.date(2019, 1, 24),
    developer="CAPCOM Co., Ltd.",
    publisher="CAPCOM Co., Ltd.",
    price=39.99,
    featured_banner_url="",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/883710/header.jpg"
  )

  ishin = Game(
    title="Like a Dragon: Ishin!",
    # release_date="2023-02-21",
    release_date=datetime.date(2023, 2, 21),
    developer="Ryu Ga Gotoku Studio",
    publisher="SEGA",
    price=59.99,
    featured_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1805480/capsule_616x353.jpg",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1805480/header.jpg"
  )

  dbd = Game(
    title="Dead by Daylight",
    # release_date="2016-06-14",
    release_date=datetime.date(2016, 6, 14),
    developer="Behaviour Interactive Inc.",
    publisher="Behaviour Interactive Inc.",
    price=19.99,
    featured_banner_url="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/11814497/63bacdf3ee56b8a6042265525f67233d658afd8f_960x311.jpg",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg"
  )

  stardew = Game(
    title="Stardew Valley",
    # release_date="2016-02-26",
    release_date=datetime.date(2016, 2, 26),
    developer="ConcernedApe",
    publisher="ConcernedApe",
    price=14.99,
    featured_banner_url="",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg"
  )

  ts4 = Game(
    title="The Sims 4",
    # release_date="2014-09-02",
    release_date=datetime.date(2014, 9, 2),
    developer="Maxis",
    publisher="Electronic Arts",
    price=9.99,
    featured_banner_url="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/38096876/09cce8baeef1bc4451fc82245d4e84a5aa7b9ffa_960x311.jpg",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg"
  )

  db.session.add_all(
    [
      apex,
      cyberpunk,
      ff7re,
      re4,
      re2,
      ishin,
      dbd,
      stardew,
      ts4
    ]
  )

  db.session.commit()

def undo_games():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.games_table RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute("DELETE FROM games_table")

    db.session.commit()
