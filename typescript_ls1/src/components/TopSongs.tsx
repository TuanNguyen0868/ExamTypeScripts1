import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useContext, useEffect } from "react";
import { TopSongContext } from "../contexts/TopSongContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topSongHeader: {
      paddingBottom: 0,
    },
    topSongList: {
      paddingTop: 0,
    },
    topSongItem: {
      paddingTop: "2px",
      paddingBottom: "2px",
    },
  })
);

const TopSongs = () => {
  const classes = useStyles();
  //context

  const { topSongs, getTopSong, toggleWatched } = useContext(TopSongContext);

  useEffect(() => {
    getTopSong();
  }, []);

  return (
    <Box mt={1} ml={2}>
      <Card raised>
        <CardHeader
          title="Top 10 song hit in year"
          className={classes.topSongHeader}
          titleTypographyProps={{
            variant: "h4",
            align: "center",
            color: "primary",
          }}
        />
        <CardContent className={classes.topSongList}>
          <List>
            {topSongs.map((song) => (
              <ListItem
                button
                className={classes.topSongItem}
                key={song.imdbID}
              >
                {" "}
                <ListItemIcon>
                  <Checkbox checked={song.Watched} onClick={toggleWatched.bind(this, song.imdbID)}/>
                </ListItemIcon>
                <ListItemText primary={song.Title}></ListItemText>
              </ListItem>
            ))}      
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopSongs;
