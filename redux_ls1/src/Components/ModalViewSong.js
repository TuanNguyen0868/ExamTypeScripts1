import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import Video from './Video';

const ModalViewSong = (props) => {
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
        Watch Video 
      </Button>
      <Modal title="Song Detail" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Video URL = {props.url}/>
      </Modal>
    </>
  );
};
export default ModalViewSong