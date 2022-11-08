import React from "react";
import "./Library.scss";
import SongCell from "../SongCell/SongCell";
import PropTypes from "prop-types";

const Library = ({ handleSongCellClick, handleSearch, musicList }) => {
  return (
    <div className="Library">
      <div className="LibraryText">
        <p>Library</p>
      </div>
      <input
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search music"
        className="search"
      />
      {musicList.map((songData, i) => {
        return (
          <SongCell
            key={i}
            songData={songData}
            handleSongCellClick={handleSongCellClick}
          />
        );
      })}
    </div>
  );
};

Library.propTypes = {
  handleSongCellClick: PropTypes.func,
  musicList: PropTypes.array,
};

Library.defaultProps = {
  handleSongCellClick: () => {},
  musicList: [],
};

export default Library;
