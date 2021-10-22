import {
    ADD_SONGS_TO_MY_LIST,
    DELETE_SONG_FROM_MY_LIST
} from "../types"

export const addSongToMyList = newSong => dispatch => {
    dispatch({
        type: ADD_SONGS_TO_MY_LIST,
        payload: newSong
    })
    
}
export const deleteSong = id => dispatch => {

    dispatch({
        type: DELETE_SONG_FROM_MY_LIST,
        payload: id
    })
  
}