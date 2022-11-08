import React from "react";
import { secondsToMinutesSeconds } from "../../helper";
import "./TrackProcess.scss";

const TrackProcess = ({ timeWidth, totalDuration, currentTime }) => {
  return (
    <div className="TrackProcessContainer">
      <div className="currentTimeContainer">
        <p>{currentTime}</p>
      </div>
      <div class="audio-track">
        <div class="time" style={{ width: timeWidth }}></div>
      </div>
      <div className="totalDurationContainer">
        <p>{secondsToMinutesSeconds(totalDuration)}</p>
      </div>
    </div>
  );
};

export default TrackProcess;
