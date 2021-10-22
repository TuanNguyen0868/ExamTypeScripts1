import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useState, ChangeEvent, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ProgressContext } from "../contexts/ProgressContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Login from "./Login";
import WelcomeMessage from "./WelcomeMessage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);

const Navbar = () => {
  //Style
  const classes = useStyles();
  //state
  const [position, setPosition] = useState<string>("Đẹp Trai");
  //context
  const { lastTime, status } = useContext(ProgressContext);
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

const {authInfo: {isAuthenticated}, toggleAuth} = useContext(AuthContext)

  const { theme } = useContext(ThemeContext);

  const [loginOpen, setLoginOpen] = useState(false)

  //useEffect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);

  const onPositionChange = (
    event: ChangeEvent<{
      value: unknown;
    }>
  ) => setPosition(event.target.value as string);
  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My Song</Typography>

          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Chip
              label={`From Family With Love. Born : ${lastTime} . Rank : ${status} `}
            />
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  className={classes.positionSelect}
                >
                  <MenuItem value="Đẹp Trai">Đẹp Trai</MenuItem>
                  <MenuItem value="Đa Tài">Đa Tài</MenuItem>
                  <MenuItem value="Hát Hay">Hát Hay</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
            <Button variant='contained' onClick={isAuthenticated ? toggleAuth.bind(this, '') : setLoginOpen.bind(this, true)}>
                {isAuthenticated ? 'Logout' : 'Login'}
            </Button>
            <Login isOpen={loginOpen} handleClose={setLoginOpen}/>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
