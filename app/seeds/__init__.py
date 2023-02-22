from flask.cli import AppGroup
from .users import seed_users, undo_users
from .games import seed_games, undo_games
from .game_screenshots import seed_game_screenshots, undo_seed_game_screenshots
from .libraries import seed_libraries, undo_libraries
from .reviews import seed_reviews, undo_reviews
from .wishlists import seed_wishlists, undo_wishlists
from .categories import seed_categories, undo_categories
from .game_categories import seed_game_categories, undo_game_categories

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_game_categories()
        undo_categories()
        undo_wishlists()
        undo_reviews
        undo_libraries()
        undo_seed_game_screenshots()
        undo_games()
        undo_users()
    # Add other seed functions here
    seed_users()
    seed_games()
    seed_game_screenshots()
    seed_libraries()
    seed_reviews()
    seed_wishlists()
    seed_categories()
    seed_game_categories()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # Add other undo functions here
    undo_game_categories()
    undo_categories()
    undo_wishlists()
    undo_reviews()
    undo_libraries()
    undo_seed_game_screenshots()
    undo_games()
    undo_users()
