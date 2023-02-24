from flask import Flask, Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, Library, Game, User

# url_prefix="api/library"
library_routes = Blueprint("libraries", __name__)

#MOCK DATA

mockLibrary = {
    "1": {
        "created_at": "Thu, 23 Feb 2023 21:45:01 GMT",
        "id": 1,
        "main_banner_url": "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
        "price": 0,
        "title": "Apex Legends",
        "updated_at": "Thu, 23 Feb 2023 21:45:01 GMT"
    },
    "2": {
        "created_at": "Thu, 23 Feb 2023 21:45:01 GMT",
        "id": 2,
        "main_banner_url": "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1663663573",
        "price": 59.99,
        "title": "Cyberpunk 2077",
        "updated_at": "Thu, 23 Feb 2023 21:45:01 GMT"
    },
    "3": {
        "created_at": "Thu, 23 Feb 2023 21:45:01 GMT",
        "id": 3,
        "main_banner_url": "https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/header.jpg?t=1663767129",
        "price": 69.99,
        "title": "Final Fantasy VII Remake Intergrade",
        "updated_at": "Thu, 23 Feb 2023 21:45:01 GMT"
    },
    "9": {
        "created_at": "Thu, 23 Feb 2023 21:45:01 GMT",
        "id": 9,
        "main_banner_url": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg",
        "price": 9.99,
        "title": "The Sims 4",
        "updated_at": "Thu, 23 Feb 2023 21:45:01 GMT"
    }
}

# GET USER'S LIBRARY
@library_routes.route("/")
@login_required
def get_library():
    games = Game.query.join(Library, Library.game_id == Game.id).join(User, User.id == Library.user_id).filter(Library.user_id == current_user.id).all()
    # return {"library": [library.to_dict() for library in current_user.libraries]}

    # query for library

    # convert library items to dict

    # return dict

    dict = {}
    for game in games:
        dict[game.id] = game.to_cart_dict()
    print("LIBRARY -------------->", dict)

    return {"library": dict}

# ADD TO USER'S LIBRARY
@library_routes.route("/", methods=["POST"])
@login_required
def add_to_library():
    data = request.json
    # when fetching for the request, we will key into game_ids which will be an array of ids
    game_ids = data["game_ids"] # [1, 2, 3 ...]
    games_to_add = [] # list of library_items (rows in our join table)
    games_to_return = [] # list of the games themselves
    # iterate over game_ids to get each game
    for game_id in game_ids:
        # query for game
        game = Game.query.get(game_id)
        # if there is a game
        if (game):
            # append it to our list so we can return later
            games_to_return.append(game)
            # create instance of that library item
            library_item = Library(
                user_id=current_user.id,
                game_id=game_id
            )
            # add those library items to our list
            games_to_add.append(library_item)
        else:
            return {"errors": ["Could not complete request"]}
    try:
        # current_user.libraries is a list of library_items (rows in our library join table)
        current_user.libraries += games_to_add # concat the existing list with the new list
        db.session.commit()
        dict = {}
        for game in games_to_return:
            dict[game.id] = game.to_cart_dict()
        return {"games_added": dict}, 201
    except ValueError:
        return {"errors": ["Could not complete request"]}
