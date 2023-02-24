import React from "react";

const GameSelection = (games) => {
  return (
    <div className="game-selection-container">
      <div className="game-selection-btn-container">
        <button className="game-selection-btn">All</button>
        <button className="game-selection-btn">Action</button>
        <button className="game-selection-btn">Battle Royale</button>
        <button className="game-selection-btn">Casual</button>
        <button className="game-selection-btn">JRPG</button>
        <button className="game-selection-btn">Simulation</button>
      </div>
    </div>
  );
};
export default GameSelection;
