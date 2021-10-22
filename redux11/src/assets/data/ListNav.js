import React from "react";
import Home from "../../modules/homePage";
import Product from "../../modules/productPage";
import Blog from "../../modules/blogPage";
import Contact from "../../modules/contactPage";

export const ListNav = [
  {
    itemId: 1,
    itemPath: "/home",
    itemComponents: <Home />,
    itemNav: "Home",
    itemIcon: "",
  },
  {
    itemId: 2,
    itemPath: "/product",
    itemComponents: <Product />,
    itemNav: "Product",
    itemIcon: "",
  },
  {
    itemId: 3,
    itemPath: "/blog",
    itemComponents: <Blog />,
    itemNav: "Blog",
    itemIcon: "",
  },
  {
    itemId: 4,
    itemPath: "/contact",
    itemComponents: <Contact />,
    itemNav: "Contact",
    itemIcon: "",
  },
];
