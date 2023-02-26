from app.models import db, Review, environment, SCHEMA

def seed_reviews():

  peter1 = Review(
    author_id=2,
    game_id=1,
    recommended=True,
    review="Probably the only battle royale I enjoy. Graphics are amazing and the champions are very likeable. However, I do wish the ranking system was more balanced; literally playing in predator lobbies is not fun. Really need to fix this ASAP pls kthx."
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

  alex1 = Review(
    author_id=3,
    game_id=1,
    recommended=True,
    review="At least you don't have to build an apartment complex to win in Apex."
  )

  ellie1 = Review(
      author_id=7,
      game_id=1,
      recommended=True,
      review="Solid 7/10. Just wish they would release a legend whose ability is to have a stable connection to the servers."
  )

  michael1 = Review(
      author_id=8,
      game_id=1,
      recommended=False,
      review="this isnt a free game every match costs a piece of ur sanity until ur left with nothing but regret."
  )

  kenny1 = Review(
      author_id=9,
      game_id=1,
      recommended=True,
      review="If you like banging your head against your desk when you get fifth partied, feeling like you are LITERALLY the worst at first person shooters, and constantly wondering why on earth you keep putting yourself through the same cycle over again. 10/10."
  )

  aaron1 = Review(
      author_id=10,
      game_id=1,
      recommended=True,
      review="I play League of Legends, you can't trust my taste in games."
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

def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews_table RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute("DELETE FROM reviews_table")

    db.session.commit()
