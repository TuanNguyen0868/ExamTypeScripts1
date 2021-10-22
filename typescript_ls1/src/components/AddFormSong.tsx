import {
  Box,
  makeStyles,
  TextField,
  Theme,
  createStyles,
  Button,
//   Modal,
} from "@material-ui/core";
import { ChangeEvent, useContext, useState } from "react";
import { SongContext } from "../contexts/SongContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    songInput: {
      marginInline: "5px",
    },
  })
);

const AddFormSong = () => {
  const classes = useStyles();

  //state
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [singer, setSinger] = useState("");

  const onSongInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const onSongInputChange1 = (event: ChangeEvent<HTMLInputElement>) =>
    setAuthor(event.target.value);
  const onSongInputChange2 = (event: ChangeEvent<HTMLInputElement>) =>
    setSinger(event.target.value);

    //context
  const { addSong } = useContext(SongContext);

  return (
    <>
    {/* <Button type="primary" onClick={showModal}>
        Detail
      </Button>
      <Modal title="Song Detail" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>{props.Name}</p>
        <p>{props.Author}</p>
        <p>{props.Singer}</p>
        <img src={props.IMG} alt=""></img>
      </Modal> */}
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Song Name .... "
          variant="outlined"
          className={classes.songInput}
          onChange={onSongInputChange}
          value={name}
        />
        <TextField
          label="Song Author .... "
          variant="outlined"
          className={classes.songInput}
          onChange={onSongInputChange1}
          value={author}
        />
        <TextField
          label="Song Singer .... "
          variant="outlined"
          className={classes.songInput}
          onChange={onSongInputChange2}
          value={singer}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addSong(name, author, singer);
            setName("");
            setAuthor("");
            setSinger("");
          }}
        >
          AddSong
        </Button>
      </Box>
    </>
  );
};

export default AddFormSong;
