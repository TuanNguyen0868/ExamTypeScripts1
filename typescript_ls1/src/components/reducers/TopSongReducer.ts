import { TopSongActionType } from "./Types"

interface TopSong {
    imdbID: string
    Title: string
    Watched: boolean
}

export type TopSongState = TopSong[]

const { GET_TOP_SONG, TOGGLE_TOP_SONG_WATCHED } = TopSongActionType

type TopSongAction =
    | {
        type: typeof GET_TOP_SONG
        payload: TopSong[]
    } |
    {
        type: typeof TOGGLE_TOP_SONG_WATCHED
        payload: string
    }

export const topSongReducer = (state: TopSongState, action: TopSongAction) => {

    switch (action.type) {
        case GET_TOP_SONG:
            return action.payload
        case TOGGLE_TOP_SONG_WATCHED:
            return state.map(topSong => topSong.imdbID === action.payload ? { ...topSong, Watched: !topSong.Watched } : topSong)
        default:
            return state
    }
}