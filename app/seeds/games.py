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
    description="Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of..",
    large_featured_banner_url="https://assets-prd.ignimgs.com/2023/02/06/byprmrle-1675656903302.jpeg",
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
    description="Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
    large_featured_banner_url="https://insider-gaming.com/wp-content/uploads/2022/12/cyberpunk-2077-game-of-the-year-edition-scaled-e1670012903149.jpg",
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
    description="Cloud Strife, an ex-SOLDIER operative, descends on the mako-powered city of Midgar. The world of the timeless classic FINAL FANTASY VII is reborn, using cutting-edge graphics technology, a new battle system and an additional adventure featuring Yuffie..",
    large_featured_banner_url="https://images4.alphacoders.com/106/1064722.jpg",
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
    description="Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, where there is something terribly..",
    large_featured_banner_url="https://www.residentevil.com/re4/assets/images/about_bg-about.jpg",
    featured_banner_url="https://cdn.wccftech.com/wp-content/uploads/2023/03/Resident-Evil-4.jpg",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg?t=1676336907"
  )

  re2 = Game(
    title="Resident Evil 2",
    # release_date="2019-01-24",
    release_date=datetime.date(2019, 1, 24),
    developer="CAPCOM Co., Ltd.",
    publisher="CAPCOM Co., Ltd.",
    price=39.99,
    description="A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh eating zombies roam the streets for survivors. An unparalleled adrenaline rush, gripping storyline, and unimaginable horrors await you.",
    large_featured_banner_url="",
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
    description="Don the clothes and weaponry of the elite to become the samurai of legend, Sakamoto Ryoma. Draw your blade and join the revolution in this heated historical adventure.",
    large_featured_banner_url="https://image.api.playstation.com/vulcan/ap/rnd/202208/2911/Xg6BfY6Er7o1VPGQKzThFGma.png",
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
    description="Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
    large_featured_banner_url="https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7",
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
    description="You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
    large_featured_banner_url="",
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
    description="Play with life and discover the possibilities. Unleash your imagination and create a world of Sims that’s wholly unique. Explore and customize every detail from Sims to homes–and much more.",
    large_featured_banner_url="https://image.api.playstation.com/vulcan/img/rnd/202111/3019/Btg9YJMDRcWgsbD5E6rOcdT5.jpg",
    featured_banner_url="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/38096876/09cce8baeef1bc4451fc82245d4e84a5aa7b9ffa_960x311.jpg",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg"
  )

  hk = Game(
    title="Hollow Knight",
    release_date=datetime.date(2017, 2, 24),
    developer="Team Cherry",
    publisher="Team Cherry",
    price=14.99,
    description="Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
    large_featured_banner_url="",
    featured_banner_url="",
    main_banner_url="https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg"
  )

  tk7 = Game(
    title="Tekken 7",
    release_date=datetime.date(2017, 6, 1),
    developer="BANDAI NAMCO Studios Inc.",
    publisher="BANDAI NAMCO Entertainment",
    price=39.99,
    description="Discover the epic conclusion of the long-time clan warfare between members of the Mishima family. Powered by Unreal Engine 4, the legendary fighting game franchise fights back with stunning story-driven cinematic battles and intense duels that can...",
    large_featured_banner_url="",
    featured_banner_url="",
    main_banner_url="https://cdn.akamai.steamstatic.com/steam/apps/389730/header.jpg"
  )

  op2 = Game(
    title="OCTOPATH TRAVELER II",
    release_date=datetime.date(2023, 2, 24),
    developer="Square Enix, ACQUIRE Corp.",
    publisher="Square Enix",
    price=59.99,
    description="This game is a brand-new entry in the OCTOPATH TRAVELER series, the first installment of which was initially released in 2018 and sold over 3 million copies worldwide.",
    large_featured_banner_url="",
    featured_banner_url="",
    main_banner_url="https://cdn.akamai.steamstatic.com/steam/apps/1971650/header.jpg"
  )

  naraka = Game(
    title="NARAKA: BLADEPOINT",
    release_date=datetime.date(2021, 8, 11),
    developer="24 Entertainment",
    publisher="NetEase Games Global",
    price=19.99,
    description="NARAKA: BLADEPOINT is a PVP combat game with up to 60 players, featuring martial arts inspired melee combat, incredible mobility, vast weapons, and customizable heroes with epic abilities inspired by Far East legends.",
    large_featured_banner_url="",
    featured_banner_url="",
    main_banner_url="https://cdn.akamai.steamstatic.com/steam/apps/1203220/header.jpg"
  )

  p5r = Game(
    title="Persona 5 Royal",
    release_date=datetime.date(2022, 10, 20),
    developer="ATLUS",
    publisher="SEGA",
    price=59.99,
    description="Don the mask and join the Phantom Thieves of Hearts as they stage grand heists, infiltrate the minds of the corrupt, and make them change their ways!",
    large_featured_banner_url="",
    featured_banner_url="",
    main_banner_url="https://cdn.akamai.steamstatic.com/steam/apps/1687950/header.jpg"
  )

  sf6 = Game(
    title="Street Fighter 6",
    release_date=datetime.date(2023, 6, 1),
    developer="CAPCOM Co., Ltd.",
    publisher="CAPCOM Co., Ltd.",
    price=59.99,
    description="Capcom's latest challenger arrives! Street Fighter™ 6 launches worldwide on June 2nd, 2023, featuring 3 game modes: World Tour, Fighting Ground, and Battle Hub. The next evolution of the series! #StreetFighter6",
    large_featured_banner_url="https://cdn.mos.cms.futurecdn.net/Ax62rUQ4WAotXNTF5Whpfg.jpg",
    featured_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/extras/13_Custom-Images_ST.png?t=1677806694",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg"
  )

  portal2 = Game(
    title="Portal 2",
    release_date=datetime.date(2011, 4, 18),
    developer="Valve",
    publisher="Valve",
    price=9.99,
    description='The "Perpetual Testing Initiative" has been expanded to allow you to design co-op puzzles for you and your friends!',
    large_featured_banner_url="",
    featured_banner_url="",
    main_banner_url="https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg"
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
      ts4,
      hk,
      tk7,
      op2,
      naraka,
      p5r,
      sf6,
      portal2
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
