/* eslint-disable react-hooks/exhaustive-deps */
import "./MusicPlayer.css";
import React, { useEffect, useState } from "react";
import Library from "./components/Library/Library";
import SongPlayer from "./components/SongPlayer/SongPlayer";
import chillHop from "./data/data";
import { currentTimeConverter, getActiveIndex } from "./helper";

const MusicPlayer = () => {
  const [selectedSong, setSelectedSong] = useState(chillHop[0]);
  const [musicList, setMusicList] = useState(chillHop);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, SetAudio] = useState(new Audio(selectedSong.audio));
  const [timeWidth, setTimeWidth] = useState();
  const [currentTime, setCurrentTime] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [searchKey, setSearchKey] = useState("");

  var timer;

  const handleSongCellClick = (id) => {
    //Set active as selected in list
    let tempList = [...musicList];
    tempList.forEach((song, i) => {
      if (song.id === id) {
        song.active = true;
        setSelectedSong(song);
      } else song.active = false;
    });
    setMusicList(tempList);
    setIsPlaying(false);
    setClickCount(0);
    resetAudioProps();
    timer = null;
  };

  const handleArrowClicks = (key) => {
    if (musicList.length > 0) {
      let activeIndex = getActiveIndex([...musicList]);
      if (key === "prev" && activeIndex !== 0) {
        setSelectedSong(musicList[activeIndex - 1]);
        handleSongCellClick(musicList[activeIndex - 1].id);
      } else if (key === "next" && activeIndex !== musicList.length - 1) {
        setSelectedSong(musicList[activeIndex + 1]);
        handleSongCellClick(musicList[activeIndex + 1].id);
      } else return;

      setIsPlaying(false);
      setClickCount(0);
      resetAudioProps();
    }
  };

  const changeAudioState = () => {
    setIsPlaying(!isPlaying);
    setClickCount(clickCount + 1);
  };

  const stopAudio = () => {
    audio.pause();
  };

  //Reset player after switcing the new song
  const resetAudioProps = () => {
    audio.pause();
    audio.currentTime = 0;
    clearInterval(timer);
  };

  useEffect(() => {
    if (audio) {
      //Means new song is selected
      if (clickCount === 0) {
        audio.src = selectedSong.audio;
        audio.load();
      }
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
  }, [audio, selectedSong, isPlaying, clickCount]);

  const handleSearch = (searchKey) => {
    setSearchKey(searchKey);
    //If nothing typed, restore the list
    if (searchKey === "") {
      setMusicList(chillHop);
    } else {
      setMusicList(
        [...musicList].filter(
          (song) =>
            song.artist.includes(searchKey) || song.name.includes(searchKey)
        )
      );
    }
  };

  return (
    <div className="App">
      <Library
        handleSongCellClick={handleSongCellClick}
        handleSearch={handleSearch}
        musicList={musicList}
      />
      <SongPlayer
        handleArrowClicks={handleArrowClicks}
        selectedSong={selectedSong}
        playAndStopAudio={changeAudioState}
        isPlaying={isPlaying}
        timeWidth={timeWidth}
        totalDuration={Math.round(audio.duration)}
        currentTime={currentTimeConverter(currentTime)}
        setClickCount={setClickCount}
      />
    </div>
  );
};

export default MusicPlayer;
