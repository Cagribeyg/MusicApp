import React from "react";
import "./SongPlayer.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import play from "../../assets/images/play.png";
import rightArrow from "../../assets/images/right-arrow.png";
import pause from "../../assets/images/pause.png";
import TrackProcess from "../TrackProcess/TrackProcess";

const SongPlayer = ({
  selectedSong,
  handleArrowClicks,
  playAndStopAudio,
  isPlaying,
  timeWidth,
  totalDuration,
  currentTime,
}) => {
  return (
    <div className="SongPlayer">
      <div className="infoContainer">
        <img
          src={selectedSong.cover}
          className="PlayerSongImage"
          alt={selectedSong.cover}
        />
        <p>{selectedSong.artist}</p>
      </div>
      <div className="PlayerContainer">
        <p style={{ fontSize: "30px" }}>Player</p>

        <TrackProcess
          currentTime={currentTime}
          timeWidth={timeWidth}
          totalDuration={totalDuration}
          key={selectedSong.id}
        />

        <div className="SongPlayerContainer">
          <img
            src={leftArrow}
            className="SongImage"
            alt={leftArrow}
            onClick={() => handleArrowClicks("prev")}
          />
          <img
            src={isPlaying ? pause : play}
            className="SongImage"
            alt={play}
            onClick={() => playAndStopAudio(selectedSong)}
          />
          <img
            onClick={() => handleArrowClicks("next")}
            src={rightArrow}
            className="SongImage"
            alt={rightArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
