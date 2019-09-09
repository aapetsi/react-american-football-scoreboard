import React from "react";

const AwayTeamButtons = ({
  incrementAwayTouchDown,
  incrementAwayFieldGoal
}) => {
  return (
    <div className="awayButtons">
      <button
        onClick={incrementAwayTouchDown}
        className="awayButtons__touchdown"
      >
        Away Touchdown
      </button>
      <button
        onClick={incrementAwayFieldGoal}
        className="awayButtons__fieldGoal"
      >
        Away Field Goal
      </button>
    </div>
  );
};

export default AwayTeamButtons;
