import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

function SearchBox({ gamesList, navigate }) {
  const history = useHistory();
  const dispatch = useDispatch;

  return (
    <div className="search-box-container">
      <div>
        {gamesList.map((game) => {
          return (
            <div
              key={game.id}
              className="game-search-link"
              onMouseDown={() => navigate(game.id)}
            >
              {game.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBox;
