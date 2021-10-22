import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteSong } from "../store/action/mysongAction";
import {Button} from "antd"
import Video from "./Video";
import useMagicColor from "../CustomHook/useMagicColor";

function Mylist({ song, deleteSong }) {
  
  const color = useMagicColor();
  return (
    <div className="todo-list">
      <ul className="pro-cart">
        {song.map((songs) => (
          <li key={songs.songId} >
            <span style={{color : color}}>Song Name : {songs.songName}</span><br></br>
            <br></br> <span style={{color : color}}>Author : {songs.author}</span>
            <br></br>
            <br></br> <span style={{color : color}}>Singer : {songs.singer}</span>
            <br></br>
            <br></br>
            <Button type="primary" onClick={deleteSong.bind(this, songs.songId)}>
              Delete Song
            </Button>
            {" "}
            <br></br>
            <br></br>
            <Video URL={songs.songlink}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
Mylist.propTypes = {
  song: PropTypes.array.isRequired,
  deleteSong: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  song: state.mylistsong.mysong,
});
export default connect(mapStateToProp, { deleteSong })(Mylist);



