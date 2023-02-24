from app.models import db, GameScreenshot, environment, SCHEMA

def seed_game_screenshots():

  apexscrn1 = GameScreenshot(
    game_id=1,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_5c150b9e86863e73fa4924657f6109db0e3b46a1.1920x1080.jpg"
  )

  apexscrn2 = GameScreenshot(
    game_id=1,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_e658fec4d9f28bf4a133618d537d42a0e831b335.1920x1080.jpg"
  )

  apexscrn3 = GameScreenshot(
    game_id=1,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_d86fa922b55d0ddca06a06eca61ead938e45f768.1920x1080.jpg"
  )

  apexscrn4 = GameScreenshot(
    game_id=1,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_670b9be3a47d8630b42189a8e39c345bd3b9940b.1920x1080.jpg"
  )

  apexscrn5 = GameScreenshot(
    game_id=1,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_e5bc45b4296b02ce652868bae776d108a4db617e.1920x1080.jpg"
  )

  cpscrn1 = GameScreenshot(
    game_id=2,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/ss_b529b0abc43f55fc23fe8058eddb6e37c9629a6a.1920x1080.jpg"
  )

  cpscrn2 = GameScreenshot(
    game_id=2,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/ss_8640d9db74f7cad714f6ecfb0e1aceaa3f887e58.1920x1080.jpg"
  )

  cpscrn3 = GameScreenshot(
    game_id=2,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/ss_4bda6f67580d94832ed2d5814e41ebe018ba1d9e.1920x1080.jpg"
  )

  cpscrn4 = GameScreenshot(
    game_id=2,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/ss_9beef14102f164fa1163536d0fb3a51d0a2e4a3f.1920x1080.jpg"
  )

  cpscrn5 = GameScreenshot(
    game_id=2,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/ss_872822c5e50dc71f345416098d29fc3ae5cd26c1.1920x1080.jpg"
  )

  ff7scrn1 = GameScreenshot(
    game_id=3,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/ss_20a352a2c20dd4bfb08fa131dc4c2e763510f584.1920x1080.jpg"
  )

  ff7scrn2 = GameScreenshot(
    game_id=3,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/ss_55903e74751601e42fb7f858d5c07ec048386ce2.1920x1080.jpg"
  )

  ff7scrn3 = GameScreenshot(
    game_id=3,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/ss_ac55306d00923f2902de20bb5ade7f9cc190e8cf.1920x1080.jpg"
  )

  ff7scrn4 = GameScreenshot(
    game_id=3,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/ss_6e30290a5de36f3274a11bd6c78f077c9e489115.1920x1080.jpg"
  )

  ff7scrn5 = GameScreenshot(
    game_id=3,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/ss_170c616f08812827d70ac2d9099447a52e114546.1920x1080.jpg"
  )

  re4scrn1 = GameScreenshot(
    game_id=4,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/ss_0596bac955340495562f3ff2538756ebd9a7f073.1920x1080.jpg"
  )

  re4scrn2 = GameScreenshot(
    game_id=4,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/ss_0554b945aafc847d55f780f7968de00aafa968a3.1920x1080.jpg"
  )

  re4scrn3 = GameScreenshot(
    game_id=4,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/ss_72888d13c9e3995f05a2886a51f0dc8791e28afa.1920x1080.jpg"
  )

  re4scrn4 = GameScreenshot(
    game_id=4,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/ss_d90819dc43141eee26b69a6cab43be00164adcb0.1920x1080.jpg"
  )

  re4scrn5 = GameScreenshot(
    game_id=4,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/ss_2f026b10ab2facd11820737453512b3b88c5a863.1920x1080.jpg"
  )

  re2scrn1 = GameScreenshot(
    game_id=5,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/883710/ss_1392581cd29817e44099cf05416b70ffb159c58b.1920x1080.jpg"
  )

  re2scrn2 = GameScreenshot(
    game_id=5,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/883710/ss_cb998634747b70bbcf2dba34a2aef34808d039bf.1920x1080.jpg"
  )

  re2scrn3 = GameScreenshot(
    game_id=5,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/883710/ss_a4adb597c2d4387df495fd997a3636d58ffeeac1.1920x1080.jpg"
  )

  re2scrn4 = GameScreenshot(
    game_id=5,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/883710/ss_12fb940f490e3ec565fd41417156969632260d5a.1920x1080.jpg"
  )

  re2scrn5 = GameScreenshot(
    game_id=5,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/883710/ss_90cc41d4c52d56f5ab26ad64223922a93b60eba6.1920x1080.jpg"
  )

  ishinscrn1 = GameScreenshot(
    game_id=6,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1805480/ss_be7b855220dfb51f33181bdadd549ec50dd604e2.1920x1080.jpg"
  )

  ishinscrn2 = GameScreenshot(
    game_id=6,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1805480/ss_f085eaec4ae31e2dfe4973353e575876f8ab0695.1920x1080.jpg"
  )

  ishinscrn3 = GameScreenshot(
    game_id=6,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1805480/ss_33e09aa06f6faa9bbb3e4bdac006a9f06ae96883.1920x1080.jpg"
  )

  ishinscrn4 = GameScreenshot(
    game_id=6,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1805480/ss_d7b365f00a04cab044b99d6a4301c10731dbb90f.1920x1080.jpg"
  )

  ishinscrn5 = GameScreenshot(
    game_id=6,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1805480/ss_b96b85f39a91c60398aadcafb12b36d45f761dc4.1920x1080.jpg"
  )

  dbdscrn1 = GameScreenshot(
    game_id=7,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/381210/ss_659500624438a4aa77bfdf304cba3ecebcd92ed9.1920x1080.jpg"
  )

  dbdscrn2 = GameScreenshot(
    game_id=7,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/381210/ss_4075aac79adfe1a5b71665d2cc5ff7d52122650b.1920x1080.jpg"
  )

  dbdscrn3 = GameScreenshot(
    game_id=7,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/381210/ss_430577c364a68dbe24e8a1d895bd678ea04b87d5.1920x1080.jpg"
  )

  dbdscrn4 = GameScreenshot(
    game_id=7,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/381210/ss_bd49ddb8318bf9d54cb185b57c7fccfe7cb609c0.1920x1080.jpg"
  )

  dbdscrn5 = GameScreenshot(
    game_id=7,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/381210/ss_6f14934aaec5f564c8092c85dca236e04935db9d.1920x1080.jpg"
  )

  stardewscrn1 = GameScreenshot(
    game_id=8,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.1920x1080.jpg"
  )

  stardewscrn2 = GameScreenshot(
    game_id=8,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_9ac899fe2cda15d48b0549bba77ef8c4a090a71c.1920x1080.jpg"
  )

  stardewscrn3 = GameScreenshot(
    game_id=8,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_d836f0a5b0447fb6a2bdb0a6ac5f954949d3c41e.1920x1080.jpg"
  )

  stardewscrn4 = GameScreenshot(
    game_id=8,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_a3ddf22cda3bd722df77dbdd58dbec393906b654.1920x1080.jpg"
  )

  stardewscrn5 = GameScreenshot(
    game_id=8,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg"
  )

  ts4scrn1 = GameScreenshot(
    game_id=9,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/ss_537683e5e29c2d6d02c64aa7321dcb26166f7d82.1920x1080.jpg"
  )

  ts4scrn2 = GameScreenshot(
    game_id=9,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/ss_2fc938d99a1e87893852cb2d2113478190607941.1920x1080.jpg"
  )

  ts4scrn3 = GameScreenshot(
    game_id=9,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/ss_b447d6436d2d00cd5e7c170e509b2246dfc879e8.1920x1080.jpg"
  )

  ts4scrn4 = GameScreenshot(
    game_id=9,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/ss_e1f0ce3ca2c9a538e382cc8b040944fe05af4bb2.1920x1080.jpg"
  )

  ts4scrn5 = GameScreenshot(
    game_id=9,
    screenshot_url="https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/ss_7d9baea1aedeeb41cb197a9e45a30f0b91b4baf9.1920x1080.jpg"
  )

  db.session.add_all(
    [
      apexscrn1,
      apexscrn2,
      apexscrn3,
      apexscrn4,
      apexscrn5,
      cpscrn1,
      cpscrn2,
      cpscrn3,
      cpscrn4,
      cpscrn5,
      ff7scrn1,
      ff7scrn2,
      ff7scrn3,
      ff7scrn4,
      ff7scrn5,
      re4scrn1,
      re4scrn2,
      re4scrn3,
      re4scrn4,
      re4scrn5,
      re2scrn1,
      re2scrn2,
      re2scrn3,
      re2scrn4,
      re2scrn5,
      ishinscrn1,
      ishinscrn2,
      ishinscrn3,
      ishinscrn4,
      ishinscrn5,
      dbdscrn1,
      dbdscrn2,
      dbdscrn3,
      dbdscrn4,
      dbdscrn5,
      stardewscrn1,
      stardewscrn2,
      stardewscrn3,
      stardewscrn4,
      stardewscrn5,
      ts4scrn1,
      ts4scrn2,
      ts4scrn3,
      ts4scrn4,
      ts4scrn5
    ]
  )

  db.session.commit()

def undo_seed_game_screenshots():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.game_screenshots_table RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute("DELETE FROM game_screenshots_table")

    db.session.commit()
