import {
    message
} from 'antd';
import 'antd/dist/antd.css';
import {
    ADD_SONGS,
    DELETE_SONG,
    FIND_SONG
} from '../types';

// }
// export const getSong = () =>  dispatch => {
//     try {
//         const response = useSelector(songSelector)
//         dispatch({
//             type: GET_SONGS,
//             payload: response.data
//         })
//     } catch (error) {
//         console.log(error)  
//     }
// }

export const addSong = newSong => dispatch => {
    dispatch({
        type: ADD_SONGS,
        payload: newSong
    })
    const info = () => {
        message.info('Susses ! ');
    };
    info()
}
export const deleteSong = id => async dispatch => {

    dispatch({
        type: DELETE_SONG,
        payload: id
    })
}
export function search(value) {
    return {
        type: FIND_SONG,
        value
    };
}