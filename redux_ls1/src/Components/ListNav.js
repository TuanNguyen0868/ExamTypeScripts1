import Cart from "./page/cart";
import Home from "./page/home";
import Product from "./page/product";
import {HomeOutlined, SketchOutlined, ShoppingCartOutlined} from "@ant-design/icons"


export const ListNav = [
    {
        id: 1,
        path:"/home",
        components:<Home/>, 
        cmpName:"Home",
        iconItemNav:<HomeOutlined/>,
    },
    {
        id: 2,
        path:"/product",
        components:<Product/>, 
        cmpName:"Product",
        iconItemNav:<SketchOutlined/>,

    },
    {
        id: 3,
        path:"/your-cart",
        components:<Cart/>, 
        cmpName:"Cart",
        iconItemNav:<ShoppingCartOutlined />,

    },
]