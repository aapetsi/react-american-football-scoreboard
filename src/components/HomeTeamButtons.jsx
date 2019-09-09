import React from "react";

const HomeTeamButtons = ({
  incrementHomeFieldGoal,
  incrementHomeTouchDown
}) => {
  return (
    <div className="homeButtons">
      {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <button
        onClick={incrementHomeTouchDown}
        className="homeButtons__touchdown"
      >
        Home Touchdown
      </button>
      <button
        onClick={incrementHomeFieldGoal}
        className="homeButtons__fieldGoal"
      >
        Home Field Goal
      </button>
    </div>
  );
};

export default HomeTeamButtons;
