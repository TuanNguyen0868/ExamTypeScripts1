import React from "react";
import { Menu, Button, Anchor } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ListNav } from "../ListNav";

class NavBar extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="header-navbar">
        <div style={{ width: "100%" }}>
          <Router>
            <Anchor>
              <Button
                type="primary"
                onClick={this.toggleCollapsed}
                style={{ marginBottom: 16 }}
              >
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
                )}
              </Button>
              <Menu
                defaultSelectedKeys={["1"]}
                // defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
              >
                {ListNav.map((item) => {
                  return (
                    <Menu.Item key={item.id} icon={item.iconItemNav}>
                      <Link to={item.path}>{item.cmpName}</Link>
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Anchor>
            <Switch>
              {ListNav.map((item) => {
                return (
                  <Route path={item.path} key={item.id}>
                    {item.components}
                  </Route>
                );
              })}
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
export default NavBar;
