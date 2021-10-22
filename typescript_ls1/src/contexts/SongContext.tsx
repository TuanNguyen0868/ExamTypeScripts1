// import { PropTypes } from "@material-ui/core";
import { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

interface SongContextProps {
    children: ReactNode
}

interface Song {
    id: string,
    name: string,
    author: string,
    singer: string,
    
}
interface SongContextDefault {
    songs: Song[],
    addSong: (name: string, author: string, singer: string) => void
    deleteSong: (id: string) => void
}

const SongContextDefaultData = {
    songs: [],
    addSong: () => null,
    deleteSong: () => null,
}

export const SongContext = createContext<SongContextDefault>(SongContextDefaultData)


const SongContextProvider = ({children}: SongContextProps) => {
    const [songs, setSongs] = useState<Song[]>(SongContextDefaultData.songs)

    const addSong = (name:string, author: string,  singer: string  ) => setSongs([...songs, {id: uuidv4(), name, author, singer }])
    
const deleteSong = (id: string) => setSongs(songs.filter(song=>song.id !== id))

    const songContextData = {songs, addSong, deleteSong}

    return <SongContext.Provider value = {songContextData}>
        {children}
    </SongContext.Provider>
}

export default SongContextProvider