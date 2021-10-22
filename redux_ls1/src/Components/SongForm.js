import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addSong } from "../store/action/songAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Modal } from "antd";

function SongForm({ addSong }) {
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [singer, setSinger] = useState();
  const [link, setLink] = useState();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onAuthorChange = (event) => {
    setAuthor(event.target.value);
  };
  const onSingerChange = (event) => {
    setSinger(event.target.value);
  };
  const onLinkChange = (event) => {
    setLink(event.target.value);
  };

  const onsubmitSong = (event) => {
    event.preventDefault();

    if (!!name && !!author && !!singer && !!link) {
      const newSong = {
        songId: uuidv4(),
        songName: name,
        author,
        singer,
        songlink: link,
      };
      addSong(newSong);
      setName("");
      setAuthor("");
      setSinger("");
      setLink("");
    }
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        AddSong
      </Button>
      <Modal
        title="AddSong"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="add-form"
      >
        <form onSubmit={onsubmitSong}>
          <div>
            <label>Song Name</label><br></br><br></br>
            <input
              className="frm-item"
              type="text"
              name="names"
              onChange={onNameChange}
              value={name}
              required
            />
          </div>
          <div>
            <label>Author</label><br></br><br></br>
            <input
              className="frm-item"
              type="text"
              name="author"
              onChange={onAuthorChange}
              value={author}
              required
            />
          </div>
          <div>
            <label>Singer</label><br></br><br></br>
            <input
              className="frm-item"
              type="text"
              name="singer"
              onChange={onSingerChange}
              value={singer}
              required
            />
          </div>
          <div>
            <label>Link</label><br></br><br></br>
            <input
              className="frm-item"
              type="text"
              name="link"
              onChange={onLinkChange}
              value={link}
              required
            />
          </div>
          <br></br>
          <div>
            <input type="submit" value="Add" />
          </div>
        </form>
      </Modal>
    </>
  );
}

SongForm.propTypes = {
  addSong: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addSong })(SongForm);
