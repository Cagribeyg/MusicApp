import React from "react";
import "./SongPlayer.scss";
import chillHop from "../../../data/data";
import leftArrow from "../../../assets/images/left-arrow.png";

const SongPlayer = ({ selectedSong }) => {
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

        <div className="SongCellImageContainer">
          <img src={leftArrow} className="SongImage" alt={leftArrow} />
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
