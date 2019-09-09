//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

// stretch goals
import HomeTeamButtons from "./components/HomeTeamButtons";
import AwayTeamButtons from "./components/AwayTeamButtons";
import Timer from "./components/Timer";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, handleHomeScore] = useState(0);
  const [awayScore, handleAwayScore] = useState(0);

  const incrementHomeFieldGoal = () => handleHomeScore(homeScore + 3);
  const incrementHomeTouchDown = () => handleHomeScore(homeScore + 7);

  const incrementAwayFieldGoal = () => handleAwayScore(awayScore + 3);
  const incrementAwayTouchDown = () => handleAwayScore(awayScore + 7);

  // console.log(homeScore, awayScore);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <Timer />
          {/* <div className="timer">00:03</div> */}
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <HomeTeamButtons
          incrementHomeFieldGoal={incrementHomeFieldGoal}
          incrementHomeTouchDown={incrementHomeTouchDown}
        />
        <AwayTeamButtons
          incrementAwayFieldGoal={incrementAwayFieldGoal}
          incrementAwayTouchDown={incrementAwayTouchDown}
        />
      </section>
    </div>
  );
}

export default App;
