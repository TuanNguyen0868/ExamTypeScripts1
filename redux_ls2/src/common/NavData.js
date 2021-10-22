import Home from "../pages/home";
import Product from "../pages/product";

export const NavData = [
  {
    id: 1,
    path: "/home",
    components: <Home />,
    cmpName: "Home",
  },
  {
    id: 2,
    path: "/product",
    components: <Product />,
    cmpName: "Product",
  },
];
