export const getActiveIndex = (list) => {
  let activeIndex = 0;
  list.forEach((song, idx) => {
    if (song.active) {
      activeIndex = idx;
      return;
    }
  });
  return activeIndex;
};

export const secondsToMinutesSeconds = (totalSeconds) => {
  if (totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - minutes * 60;
    return minutes + ":" + seconds;
  }
  return "00:00";
};

export const currentTimeConverter = (totalSeconds) => {
  if (totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - minutes * 60;
    return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  }
  return "00:00";
};
