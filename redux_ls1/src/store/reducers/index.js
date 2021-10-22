import { combineReducers } from "redux";
import MySongReducer from "./MySongReducer";
import songReducer from "./SongReducer";

const rootReducers = combineReducers({
    mySong: songReducer,
    mylistsong: MySongReducer
})
export default rootReducers