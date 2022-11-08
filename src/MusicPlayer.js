/* eslint-disable react-hooks/exhaustive-deps */
import "./MusicPlayer.css";
import React, { useEffect, useState } from "react";
import Library from "./components/Library/Library";
import SongPlayer from "./components/SongPlayer/SongPlayer";
import chillHop from "./data/data";
import { currentTimeConverter, getActiveIndex } from "./helper";

const MusicPlayer = () => {
  const [selectedSong, setSelectedSong] = useState(chillHop[0]);
  const [list, setList] = useState(chillHop);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, SetAudio] = useState(new Audio(chillHop[0].audio));
  const [timeWidth, setTimeWidth] = useState();
  const [currentTime, setCurrentTime] = useState(0);

  var timer;

  const handleSongCellClick = (id) => {
    //Set active as selected in list
    let tempList = [...list];
    tempList.forEach((song, i) => {
      if (song.id === id) {
        song.active = true;
        setSelectedSong(song);
      } else song.active = false;
    });
    setList(tempList);
    setIsPlaying(false);
    //Reset player after switcing the new song
    resetAudioProps();
    timer = null;
  };

  const handleArrowClicks = (key) => {
    let activeIndex = getActiveIndex([...list]);
    if (key === "prev" && activeIndex !== 0) {
      setSelectedSong(list[activeIndex - 1]);
      handleSongCellClick(list[activeIndex - 1].id);
      //Reset player after switcing the new song
      resetAudioProps();
    } else if (key === "next" && activeIndex !== list.length - 1) {
      setSelectedSong(list[activeIndex + 1]);
      handleSongCellClick(list[activeIndex + 1].id);
      //Reset player after switcing the new song
      resetAudioProps();
    } else return;
    setIsPlaying(false);
  };

  const changeAudioState = (selectedSong) => {
    setIsPlaying(!isPlaying);
  };

  const stopAudio = () => {
    audio.pause();
  };

  const resetAudioProps = () => {
    audio.pause();
    audio.currentTime = 0;
    clearInterval(timer);
  };

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play(selectedSong.audio);
        timer = setInterval(function () {
          //Keep track of the time
          let audioTime = Math.round(audio.currentTime);
          setCurrentTime(audioTime);
          let audioLength = Math.round(audio.duration);
          setTimeWidth((audioTime * 100) / audioLength + "%");
        }, 10);
      } else {
        stopAudio();
      }
    }
  }, [audio, selectedSong, isPlaying]);

  return (
    <div className="App">
      <Library handleSongCellClick={handleSongCellClick} />
      <SongPlayer
        handleArrowClicks={handleArrowClicks}
        selectedSong={selectedSong}
        playAndStopAudio={changeAudioState}
        isPlaying={isPlaying}
        timeWidth={timeWidth}
        totalDuration={Math.round(audio.duration)}
        currentTime={currentTimeConverter(currentTime)}
      />
    </div>
  );
};

export default MusicPlayer;
