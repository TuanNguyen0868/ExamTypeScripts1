
import { ADD_SONGS, DELETE_SONG} from '../types'
import 'antd/dist/antd.css';

export const addSong = newSong =>  dispatch => {
        dispatch({
            type: ADD_SONGS,
            payload: newSong
        })
}
export const deleteSong = id => async dispatch => {
    
        dispatch({
            type: DELETE_SONG,
            payload: id
        })
}