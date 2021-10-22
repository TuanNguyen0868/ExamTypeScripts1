import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import { addSong } from '../../store/action/songAction';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button, Modal } from 'antd';


function SongForm({addSong}) {
    const [name, setName] = useState()
    const [author, setAuthor] = useState()
    const [singer, setSinger] = useState()
    const [link, setLink] = useState()
    
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
    const onNameChange = event => {
        setName(event.target.value)
    }
    const onAuthorChange = event => {
        setAuthor(event.target.value)
    }
    const onSingerChange = event => {
        setSinger(event.target.value)
    }
    const onLinkChange = event => {
        setLink(event.target.value)
    }


    const onsubmitSong = event => {
        event.preventDefault()


        if(!!name && !!author && !!singer  && !!link ){
            const newSong = {
                songId: uuidv4(),
                songName: name,
                author,
                singer,
                songlink:link
            }
            addSong(newSong)
            setName('')
            setAuthor('')
            setSinger('')
            setLink('')

        }
    }
    return (
        <>
        <Button type="primary" onClick={showModal}>
            AddSong
        </Button>
        <Modal title="AddSong" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <form onSubmit={onsubmitSong}>
                <label>Song Name</label>
                <input type="text" name="names" onChange={onNameChange} value={name} required/>
                <label>Author</label>
                <input type="text" name="author" onChange={onAuthorChange} value={author} required/>
                <label>Singer</label>
                <input type="text" name="singer" onChange={onSingerChange} value={singer} required/>
                <label>Link</label>
                <input type="text" name="link" onChange={onLinkChange} value={link} required/>
                <input type="submit" value="Add"/>
            </form>
        </Modal>
        </>
    )
}

SongForm.propTypes = {
    addSong: PropTypes.func.isRequired
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {addSong})(SongForm)
