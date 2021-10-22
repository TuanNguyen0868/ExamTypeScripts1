import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import IconPeople from "@material-ui/icons/People";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ArticleIcon from '@mui/icons-material/Article';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import AppMenuItem from "./AppMenuItem";

const appMenuItems = [
  {
    name: "Register Form",
    link: "/",
    Icon: AppRegistrationIcon,
  },
  {
    name: "Library Music",  
    link: "/music",
    Icon: LibraryMusicIcon,
  },
  {
    name: "Information",
    link: "/customers",
    Icon: IconPeople,
  },
  {
    name: "Products",
    link: "/products",
    Icon: ProductionQuantityLimitsIcon,
  },
  {
    name: "Article",
    link: "/article",
    Icon: ArticleIcon,
  },
  {
    name: "Oder Page",
    Icon: IconLibraryBooks,
    items: [
      {
        name: "Login Page",
        link: "/login",
      },
      {
        name: "Test Data",
        link: "/testData",
      },
    ],
  },
];

const AppMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: "#97c05c",
    },
  })
);

export default AppMenu;
