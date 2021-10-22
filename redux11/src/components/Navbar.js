import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, Anchor } from "antd";
import { ListNav } from "../assets/data/ListNav";

class NavBar extends React.Component {
  render() {
    return (
      <div className="header-navbar">
        <Router>
          <Anchor>
            <Menu
              defaultSelectedKeys={["1"]}
              // defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
            >
              {ListNav.map((item) => {
                return (
                  <Menu.Item key={item.itemId} icon={item.itemIcon}>
                    <Link style={{ textDecoration: "none" }} to={item.itemPath}>
                      {item.itemNav}
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Anchor>
          <Switch>
            {ListNav.map((item) => {
              return (
                <Route path={item.itemPath} key={item.itemId}>
                  {item.itemComponents}
                </Route>
              );
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}
export default NavBar;
