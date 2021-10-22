import { createContext, ReactNode, useReducer } from "react";
import TopSongInfo from "../api/TopSongInfo";
import {
  topSongReducer,
  TopSongState,
} from "../components/reducers/TopSongReducer";
import { TopSongActionType } from "../components/reducers/Types";

interface TopSongContextProps {
  children: ReactNode;
}

interface TopSongContextDefault {
  topSongs: TopSongState;
  getTopSong: () => Promise<void>;
  toggleWatched: (id:string) => void
}

const { GET_TOP_SONG , TOGGLE_TOP_SONG_WATCHED} = TopSongActionType;

const topSongDefault: TopSongState = [];

export const TopSongContext = createContext<TopSongContextDefault>({
  topSongs: topSongDefault,
  getTopSong: () => Promise.resolve(void 0),
  toggleWatched: (id:string) => {}

});

const TopSongContextProvider = ({ children }: TopSongContextProps) => {
  const [topSongs, dispatch] = useReducer(topSongReducer, topSongDefault);

  //Get top song from api

  const getTopSong = async () => {
    const topSong = await Promise.all(TopSongInfo)
    dispatch({
      type: GET_TOP_SONG,
      payload: topSong.map(topSg => ({...topSg.data, Watched: false})),
    });
  };
  //toggle Watch
    const toggleWatched = (imdbID: string) => dispatch({type:TOGGLE_TOP_SONG_WATCHED,payload:imdbID})


  const topSongContextData = {
    topSongs,
    getTopSong,
    toggleWatched,
  };

  return (
    <TopSongContext.Provider value={topSongContextData}>
      {children}
    </TopSongContext.Provider>
  );
};

export default TopSongContextProvider;
