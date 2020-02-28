import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "no scrubs", duration: "4:08" },
    { title: "Macarena", duration: "2:08" },
    { title: "All star", duration: "3:08" },
    { title: "call me", duration: "5:08" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
