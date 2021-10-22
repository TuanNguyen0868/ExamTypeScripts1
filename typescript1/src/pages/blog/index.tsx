import React from "react";
import { Button, Card, Col, Row } from "antd";

const { Meta } = Card;

export default function BlogPage() {
  return (
    <>
      <Row justify="space-around" style={{ display: "flex" }}>
        <Col span={4}>
          <Card
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                style={{ height: 265, width: 180 }}
              />
            }
            style={{ padding: 65 }}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <Button type="primary">Buy</Button>
          </Card>
        </Col>
        <Col span={4}>
          <Card
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                style={{ height: 265, width: 180 }}
              />
            }
            style={{ padding: 65 }}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <Button type="primary">Buy</Button>
          </Card>
        </Col>
        <Col span={4}>
          <Card
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                style={{ height: 265, width: 180 }}
              />
            }
            style={{ padding: 65 }}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <Button type="primary">Buy</Button>
          </Card>
        </Col>
        <Col span={4}>
          <Card
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                style={{ height: 265, width: 180 }}
              />
            }
            style={{ padding: 65 }}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <Button type="primary">Buy</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}
