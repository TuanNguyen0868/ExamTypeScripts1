import React from 'react'


export default function Song(props) {
    
    return (
        <div prop-id={props.songs.songId} className="song-item"  key={props.songs.songId}>
            <div>
            <img src={props.songs.songImage} alt="anh ne" width="150px" height="200px"/>
            </div>
            {/* <p>{props.songs.songId}</p> */}
            <p>Song Name : {props.songs.songName}</p>
            <p>Author : {props.songs.author}</p>
            <p>Singer : {props.songs.singer}</p>
    </div>
    )
}

