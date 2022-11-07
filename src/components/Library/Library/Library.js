import React from "react";
import "./Library.scss";
import SongCell from "../SongCell/SongCell";
import chillHop from "../../../data/data";

const Library = ({ setSelectedSong }) => {
  return (
    <div className="Library">
      <div className="LibraryText">
        <p>Library</p>
      </div>
      {chillHop.map((songData, i) => {
        return (
          <SongCell setSelectedSong={setSelectedSong} songData={songData} />
        );
      })}
    </div>
  );
};

export default Library;
