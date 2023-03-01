import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkReadGameByCategory } from "../../../store/games";
import "./GameSelection.css";

const GameSelection = (games) => {
  // const allGames = Object.values(games);
  // console.log("ALL GAMES ---> ", allGames);
  const allGames = useSelector((state) => state.games.allGames);
  const [activeTab, setActiveTab] = useState("All");

  let dispatch = useDispatch();
  // let [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   dispatch(thunkReadGameByCategory()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  return (
    <div className="game-selection-container">
      {/* TAB LINKS */}
      <div className="category-tab-container">
        <button
          className={`category-tab-btn ${
            activeTab === "All" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("All")}
        >
          All
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Action" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Action")}
        >
          Action
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Battle Royale" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Battle Royale")}
        >
          Battle Royale
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Horror" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Horror")}
        >
          Horror
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Casual" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Casual")}
        >
          Casual
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "JRPG" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("JRPG")}
        >
          JRPG
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Simulation" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Simulation")}
        >
          Simulation
        </button>
      </div>

      {/* TAB CONTENT */}
      <div id="AllGames" className="tabcontent">
        {Object.values(allGames).map((game) => {
          const gameCategories = Object.values(game.categories).map(
            (category) => category.name
          ); // [{created... name...}, {}] => ["Battle Royal", "Featured"]
          if (activeTab === "All" || gameCategories.includes(activeTab)) {
            return (
              <div className="splash-game-container" key={game.id}>
                <div className="splash-game-banner">
                  <img src={game.main_banner_url}></img>
                </div>
                <div className="splash-game-title">{game.title}</div>
              </div>
            );
          }
        })}
      </div>
      <div id="Action" className="tabcontent"></div>
      <div id="Battle Royale" className="tabcontent"></div>
      <div id="Casual" className="tabcontent"></div>
      <div id="JRPG" className="tabcontent"></div>
      <div id="Simulation" className="tabcontent"></div>
    </div>
  );
};
export default GameSelection;
