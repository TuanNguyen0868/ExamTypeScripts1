import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteSong } from "../../store/action/mysongAction";
import { addSongToMyList } from "../../store/action/mysongAction";
import { Button, Rate } from 'antd';
import Video from "./Video";
import useMagicColor from "../../CustomHook/useMagicColor";
import SongForm from "./SongForm";

function ListSong({ songs, deleteSong, addSongToMyList }) {
  
  const color = useMagicColor();
  return (
    <div className="todo-list">
      <SongForm/>
      <ul className="list-song-style">
        {songs.map((item) => (
          <li key={item.songId}>
            <span style={{color : color}}>Song Name : {item.songName}</span><br></br>
            <br></br> <span style={{color : color}}>Author : {item.author}</span>
            <br></br>
            <br></br> <span style={{color : color}}>Singer : {item.singer}</span>{" "}
            <Button type="primary" onClick={() => {addSongToMyList(item)}}>
              Add To My List
            </Button>{" "}
            <Button type="primary" onClick={() => deleteSong(item.songId)}>Delete Song</Button>{" "}
            <br></br>
            <br></br>
            <Video URL={item.songlink}/>
            <br></br>
            <br></br>
            <h3 style={{color : color}}>Vote For Video</h3>
            <Rate defaultValue={5}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
ListSong.propTypes = {
  songs: PropTypes.array.isRequired,
  deleteSong: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  songs: state.mySong.listSongs,
});
export default connect(mapStateToProp, {deleteSong, addSongToMyList})(ListSong);

