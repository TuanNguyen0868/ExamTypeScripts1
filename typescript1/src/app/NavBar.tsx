import { Col, Row } from "antd";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { DataNav } from "../comons/DataNav";

export default function Navbar() {
  return (
    <>
      <BrowserRouter>
          <Row 
            className="Nav-Item"
            style={{
              listStyleType: "none",
              display: "flex",
              backgroundColor: "#c7c0c0",
            }}
          >
            {DataNav.map((item) => {
              return (
                <Col xs={2}
                  className="nav-item"
                  key={item.id}
                  style={{
                    padding: 20,
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", fontSize: 26, fontFamily: 'cursive', color: 'black' }}
                  >
                    <span>{item.cmpName}</span>
                  </Link>
                </Col>
              );
            })}
          </Row>
          <Switch>
            {DataNav.map((item) => {
              return (
                <Route path={item.path} key={item.id}>
                  {item.components}
                </Route>
              );
            })}
          </Switch>
      </BrowserRouter>
    </>
  );
}
