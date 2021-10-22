import { Box, Button, Chip, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ChangeEvent, useContext, useState } from "react";
import { SongContext } from "../contexts/SongContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    songInput: {
      marginInline: "5px",
    },
    songItem: {
        border: 'solid 1px red',
        textDecoration: 'none',
        height:'400px',
        width:'300px',
        textAlign:'center',
        listStyleType:'none',
        margin:'5px'
    },
    listSong: {
      display:'flex'  
    }
  })
);

const Song = () => {
  //classes
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
  //contect
  const { songs, addSong, deleteSong } = useContext(SongContext);

  return (
    <>
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
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        <ul className={classes.listSong}>
          {songs.map((song) => (
            <li key={song.id} className={classes.songItem}>
              <p>Song Name</p>
              <Chip label={song.name} clickable color="primary" />
              <br />
              <p>Song Author</p>
              <Chip label={song.author} clickable color="primary" />
              <br />
              <p>Song Singer</p>
              <Chip label={song.singer} clickable color="primary" />
              <br/>
              <br/>
              
              <Button variant='contained' color='primary' onClick={()=>{
                  deleteSong(song.id)
              }}>
                  Delete
              </Button>
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default Song;
