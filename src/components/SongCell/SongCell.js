import React from "react";
import PropTypes from "prop-types";
import "./SongCell.scss";

const SongCell = ({ songData, handleSongCellClick }) => {
  return (
    <div
      className={songData.active ? "SongContainer active" : "SongContainer"}
      onClick={() => handleSongCellClick(songData.id)}
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

SongCell.propTypes = {
  songData: PropTypes.object,
  handleSongCellClick: PropTypes.func,
};

SongCell.defaultProps = {
  songData: {},
  handleSongCellClick: () => {},
};

export default SongCell;
