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

  peter6 = Review(
    author_id=2,
    game_id=14,
    recommended=True,
    review="Words cannot describe my love for this game. One of the best JRPGs I've played in a very long time."
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

  ellie2 = Review(
      author_id=7,
      game_id=6,
      recommended=True,
      review="Sword go brrrrrrr"
  )

  ellie3 = Review(
      author_id=7,
      game_id=13,
      recommended=False,
      review="Always lagging and long loading when starting new game. Get killed off immediately."
  )

  michael1 = Review(
      author_id=8,
      game_id=1,
      recommended=False,
      review="this isnt a free game every match costs a piece of ur sanity until ur left with nothing but regret."
  )

  michael2 = Review(
      author_id=8,
      game_id=7,
      recommended=True,
      review="I absolutely love getting tunneled in this games. Yes."
  )

  michael3 = Review(
      author_id=8,
      game_id=12,
      recommended=True,
      review="So far the characters and stories are better than the first Octopath, the game also leans into its strengths more than the first one did. I still wish the characters interacted more though."
  )

  kenny1 = Review(
      author_id=9,
      game_id=1,
      recommended=True,
      review="If you like banging your head against your desk when you get fifth partied, feeling like you are LITERALLY the worst at first person shooters, and constantly wondering why on earth you keep putting yourself through the same cycle over again. 10/10."
  )

  kenny2 = Review(
      author_id=9,
      game_id=3,
      recommended=True,
      review="Wow... that's really all I need to say. Game is a masterpiece from beginning to end. Only negative is that I have to wait for the next part to be released on PC, which could be years from now. I wasn't a Final Fantasy VII fan before, but I am now."
  )

  aaron1 = Review(
      author_id=10,
      game_id=1,
      recommended=True,
      review="I play League of Legends, you can't trust my taste in games."
  )

  aaron2 = Review(
      author_id=10,
      game_id=2,
      recommended=True,
      review="Unlike CDPR, I finished the game."
  )

  acutely1 = Review(
      author_id=11,
      game_id=10,
      recommended=True,
      review="One of the best platformers ever. I've played this game too many times now!"
  )

  acutely2 = Review(
      author_id=11,
      game_id=6,
      recommended=True,
      review="I had to play House as the mom with some kids in the midst of destabilizing feudal japan's complex political web. 10/10"
  )

  john1 = Review(
      author_id=4,
      game_id=13,
      recommended=True,
      review="Fun game, need more NA players."
  )

  calcifer1 = Review(
      author_id=12,
      game_id=8,
      recommended=True,
      review="This is the most relaxing and stressful game I have played."
  )

  calcifer2 = Review(
      author_id=12,
      game_id=16,
      recommended=True,
      review="A classic I love returning to every year or so, it might have been released over a decade ago now it is still amazing, truly a timeless masterpiece."
  )

  db.session.add_all(
    [
      peter1,
      peter2,
      peter3,
      peter4,
      peter5,
      peter6,
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
      acutely2,
      john1,
      calcifer1,
      calcifer2
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
