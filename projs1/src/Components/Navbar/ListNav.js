import About from "../About/About";
import Blog from "../Blog/Blog";
import Product from "../Product/Product";
import Navbar from "./Navbar";



export const navdata = [
    {
        path:"/home-page",
        components: <Navbar/>,
        navName: "Home"
    },
    {
        path:"/product-page",
        components: <Product/>,
        navName: "Product"
    },
    {
        path:"/about-page",
        components: <About/>,
        navName: "About"
    },
    {
        path:"/blog-page",
        components: <Blog/>,
        navName: "Blog"
    }
]