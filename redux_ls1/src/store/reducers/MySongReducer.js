import { ADD_SONGS_TO_MY_LIST, DELETE_SONG_FROM_MY_LIST } from "../types"


const myListSong = {
    mysong: []
}

const MySongReducer = (state = myListSong, action) => {
    switch(action.type){    
        case ADD_SONGS_TO_MY_LIST:
            return{
                ...state,
                mysong: [
                    ...state.mysong,
                    action.payload
                ]
            }

        case DELETE_SONG_FROM_MY_LIST:
            return{
                ...state,
                mysong: state.mysong.filter(song => song.songId !== action.payload)
            }
        default:
            return state    
    }
}
export default MySongReducer