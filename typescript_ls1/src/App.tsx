import { Grid } from "@material-ui/core";
import "./App.css";
import Navbar from "./components/Navbar";
import Song from "./components/Song";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import TopSongs from "./components/TopSongs";
import AuthContextProvider from "./contexts/AuthContext";
import ProgressContextProvider from "./contexts/ProgressContext";
import SongContextProvider from "./contexts/SongContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TopSongContextProvider from "./contexts/TopSongContext";

function App() {
  return (
    <div>
      <TopSongContextProvider>
        <AuthContextProvider>
          <SongContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopSongs />
                  </Grid>
                  <Grid item xs={8}>
                    <Song />
                  </Grid>
                </Grid>
                <ToggleThemeBtn />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </SongContextProvider>
        </AuthContextProvider>
      </TopSongContextProvider>
    </div>
  );
}

export default App;
