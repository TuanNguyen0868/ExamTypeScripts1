import About from "./About";
import Home from "./Home";
import ListSong from "./ListSong";
import Login from "./Login";
import More from "./More";
import MyList from "./MyList";
import Product from "./Product";

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
        components:<About/>,
        cmpName:"About"
    },
    {
        id: 3,
        path:"/Product-Page",
        components:<Product/>,
        cmpName:"Product"
    },
    {
        id: 4,
        path:"/More-Page",
        components:<More/>,
        cmpName:"More"
    },
    {
        id: 5,
        path:"/Login-Page",
        components:<Login/>,
        cmpName:"Login"
    },
    {
        id: 6,
        path:"/Song-Page",
        components:<ListSong/>,
        cmpName:"ListSong"
    },
    {
        id: 7,
        path:"/My-List-Page",
        components:<MyList/>,
        cmpName:"MyList"
    }
] 