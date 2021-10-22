import BlogPage from "../pages/blog";
import HomePage from "../pages/home";

export const DataNav = [
    {
        id: 1,
        path: "/home",
        components: <HomePage />,
        cmpName: "Home",
      },
      {
        id: 2,
        path: "/blog",
        components: <BlogPage />,
        cmpName: "Blog",
      },
]
