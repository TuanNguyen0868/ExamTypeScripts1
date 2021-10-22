import ListSong from "./ListSong";
import Home from "./Home";

export const Listnav = [
    {
        id: 1,
        path:"/Home-Page",
        components:<Home/>, 
        cmpName:"Home"
    },
    {
        id: 2,
        path:"/About-page",
        components:<ListSong/>,
        cmpName:"About"
    },

] 