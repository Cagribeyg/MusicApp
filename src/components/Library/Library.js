import React from "react";
import "./Library.scss";
import SongCell from "../SongCell/SongCell";
import chillHop from "../../data/data";
import PropTypes from "prop-types";

const Library = ({ handleSongCellClick }) => {
  return (
    <div className="Library">
      <div className="LibraryText">
        <p>Library</p>
      </div>
      {chillHop.map((songData, i) => {
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
};

Library.defaultProps = {
  handleSongCellClick: () => {},
};

export default Library;
