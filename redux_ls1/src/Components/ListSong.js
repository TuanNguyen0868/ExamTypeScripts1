import { Button, Card, List, message, Rate } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import useMagicColor from "../CustomHook/useMagicColor";
import { addSongToMyList } from "../store/action/mysongAction";
import { deleteSong } from "../store/action/songAction";
import Message from "./Message";
import ModalSong from "./ModalSong";
import ModalViewSong from "./ModalViewSong";
import SongForm from "./SongForm";
function ListSong({ songs, deleteSong, addSongToMyList }) {
  const color = useMagicColor();
  const Message2 = () => {
    message.info("Delete Complete !");
  };
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="song-list">
      <SongForm />
      <br></br>
      <br></br>
      <div>
        <input
          type="text"
          placeholder="Search......"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <List
        grid={{ gutter: 24, column: 4 }}
        dataSource={songs}
        renderItem={(items) => (
          <List.Item>
            <Card title={items.songName}>
              {items.singer}
              <br />
              {items.author}
              <br />
              {/* {items.songImage} */}
              <Button
                type="primary"
                onClick={() => {
                  addSongToMyList(items);
                  Message();
                }}
              >
                Add To My Cart
              </Button>{" "}
              <br />
              <br />
              <Button
                type="primary"
                onClick={() => {
                  deleteSong(items.songId);
                  Message2();
                }}
              >
                Delete Song
              </Button>{" "}
              <ModalSong
                Name={items.songName}
                Author={items.author}
                Singer={items.singer}
                IMG={items.songImage}
              />
              <br></br>
              <br></br>
              <ModalViewSong url={items.songlink} />
              <br></br>
              <h3 style={{ color: color }}>Vote For Video</h3>
              <Rate defaultValue={5} />
            </Card>
          </List.Item>
        )}
      />
      ,
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
// const mapDispactToProp = (dispatch) => ({
//   addSongToMyList: addSongToMyList,
//   addSongToMyList2: (newSong) => (dispatch) => {
//     dispatch({
//       type: "ADD_SONGS_TO_MY_LIST",
//       payload: newSong,
//     });
//   },
//   addSongToMyList3: (newSong) => (dispatch) => dispatch(()=> a(newSong)),
// });
export default connect(mapStateToProp, { deleteSong, addSongToMyList })(
  ListSong
);
