import "./MusicPlayer.css";
import React, { useEffect, useState, useLayoutEffect } from "react";
import Library from "./components/Library/Library";
import SongPlayer from "./components/SongPlayer/SongPlayer";
import chillHop from "./data/data";
import { currentTimeConverter, getActiveIndex } from "./helper";
const MusicPlayer = () => {
  const [selectedSong, setSelectedSong] = useState(chillHop[0]);
  const [list, setList] = useState(chillHop);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, SetAudio] = useState("");
  const [timeWidth, setTimeWidth] = useState();
  const [currentTime, setCurrentTime] = useState();

  var audioPlay;

  const handleSongCellClick = (id) => {
    let tempList = [...list];
    tempList.map((song, i) => {
      if (song.id === id) {
        song.active = true;
        setSelectedSong(song);
      } else song.active = false;
    });
    setList(tempList);
    setIsPlaying(false);
    resetAudioProps();
  };

  useEffect(() => {
    SetAudio(new Audio(selectedSong.audio));
  }, [selectedSong]);

  const handleArrowClicks = (key) => {
    let activeIndex = getActiveIndex([...list]);
    if (key === "prev" && activeIndex !== 0) {
      setSelectedSong(list[activeIndex - 1]);
      handleSongCellClick(list[activeIndex - 1].id);
      resetAudioProps();
    } else if (key === "next" && activeIndex !== list.length - 1) {
      setSelectedSong(list[activeIndex + 1]);
      handleSongCellClick(list[activeIndex + 1].id);
      resetAudioProps();
    } else return;
    setIsPlaying(false);
  };

  useEffect(() => {}, [audio.currentTime]);

  const playAndStopAudio = (selectedSong) => {
    setIsPlaying(!isPlaying);
  };

  const resetAudioProps = () => {
    audio.pause();
    audio.currentTime = 0;
    // setCurrentTime(0);
    // setTimeWidth(0);
    clearInterval(audioPlay);
  };

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play(selectedSong.audio);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        audioPlay = setInterval(function () {
          let audioTime = Math.round(audio.currentTime);
          setCurrentTime(audioTime);
          let audioLength = Math.round(audio.duration);
          setTimeWidth((audioTime * 100) / audioLength + "%");
        }, 10);
      } else {
        audio.pause();
      }
    }
  }, [audio, selectedSong, isPlaying]);

  return (
    <div className="App">
      <Library handleSongCellClick={handleSongCellClick} />
      <SongPlayer
        handleArrowClicks={handleArrowClicks}
        selectedSong={selectedSong}
        playAndStopAudio={playAndStopAudio}
        isPlaying={isPlaying}
        timeWidth={timeWidth}
        totalDuration={Math.round(audio.duration)}
        currentTime={currentTimeConverter(currentTime)}
      />
    </div>
  );
};

export default MusicPlayer;
