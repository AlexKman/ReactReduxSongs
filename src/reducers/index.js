import { combineReducers } from "redux";
import { selectSong } from "../actions";

const songsReducer = () => {
  return [
    { title: "Wonderwall", duration: "4:19" },
    { title: "This Charming Man", duration: "2:41" },
    { title: "Creep", duration: "3:56" },
    { title: "The Universal", duration: "3:57" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
