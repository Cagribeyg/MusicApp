import "./MusicPlayer.css";
import React, { useEffect, useState } from "react";
import Library from "./components/Library/Library/Library";
import SongPlayer from "./components/Library/SongPlayer/SongPlayer";
import chillHop from "./data/data";
const MusicPlayer = () => {
  const [selectedSong, setSelectedSong] = useState({});
  const [list, setList] = useState(chillHop);

  useEffect(() => {
    setList(chillHop);
  }, []);

  useEffect(() => {
    setActiveList(selectedSong.id);
  }, [selectedSong]);

  const setActiveList = (id) => {
    let tempList = [...list];
    tempList.map((song, id) => {
      if ((song.id = id)) {
        song.active = true;
      } else song.active = false;
    });
    console.log("tempList", tempList);
  };

  console.log("selectedSong", selectedSong);
  return (
    <div className="App">
      <Library
        setActiveList={setActiveList}
        setSelectedSong={setSelectedSong}
      />
      <SongPlayer selectedSong={selectedSong} />
    </div>
  );
};

export default MusicPlayer;
