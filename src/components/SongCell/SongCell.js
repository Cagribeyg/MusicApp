import React from "react";
import PropTypes from "prop-types";
import "./SongCell.scss";

const SongCell = ({ songData, handleSongCellClick }) => {
  const playAudio = () => {
    // var audio = new Audio(songData.audio);
    // audio.play();
    handleSongCellClick(songData.id);
  };
  return (
    <div
      className={songData.active ? "SongContainerActive" : "SongContainer"}
      onClick={playAudio}
    >
      <div className="SongCellImageContainer">
        <img src={songData.cover} className="SongImage" alt={songData.cover} />
      </div>
      <div className="SongCellTextontainer">
        <p className="">{songData.name}</p>
        <p>{songData.artist}</p>
      </div>
    </div>
  );
};

export default SongCell;
