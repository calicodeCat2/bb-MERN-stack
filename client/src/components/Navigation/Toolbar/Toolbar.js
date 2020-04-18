import React, { Component } from "react";
import "./Toolbar.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationItems from "../NavigationItems/NavigationItems";

class Toolbar extends Component {
  render() {
    return (
      <Container className="toolbar">
        <Row className="toobar-row">
          <Col className="toolbar-col--left">
            <Link to="/">
              <img
                className="toolbar-col--left_image"
                src="https://pic-urls.s3.amazonaws.com/afake_logo.png"
                alt="logo pic"
              />
            </Link>
          </Col>
          <Col className="toolbar-col--right">
            <NavigationItems className="nav-items" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Toolbar;
