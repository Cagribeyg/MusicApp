import React from "react";
import "./Library.scss";
import SongCell from "../SongCell/SongCell";
import chillHop from "../../data/data";

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

export default Library;
