import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import axios from 'axios';
import useEffect from 'react'

const ModalSong = (props) => {
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

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Detail
      </Button>
      <Modal title="Song Detail" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>{props.Name}</p>
        <p>{props.Author}</p>
        <p>{props.Singer}</p>
        <img src={props.IMG} alt=""></img>
      </Modal>
    </>
  );
};
export default ModalSong