import React from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navCustom.css";
import { FormattedMessage } from "react-intl";

function Layout({ userLocale, onLocaleChange }) {
  const changeInt = () => {
    const newLocale = userLocale === "tr" ? "en" : "tr";
    console.log("Dil değiştirildi:", newLocale);
  };

  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="navCustom"
    >
      <Container fluid>
        <Row>
          <Col xs={12} md={12} style={{ marginLeft: "35%" }}>
            <h4 id="TRT" style={{ display: "inline-block", float: "left" }}>
              TRT{" "}
              <a style={{ paddingLeft: "5px" }} id="TRTWORLD">
                WORLD
              </a>
            </h4>
          </Col>
        </Row>
        {/* Right side content */}
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-end align-items-center"
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav" id="navText">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <FormattedMessage id="homePage.News" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Videos">
                    <FormattedMessage id="homePage.Videos" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Topics">
                    <FormattedMessage id="homePage.Topics" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Pictures">
                    <FormattedMessage id="homePage.Pictures" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Live">
                  <img src="./Images/ellipse.png">
                    </img>
                    <FormattedMessage id="homePage.Live" />
                  </a>
                </li>
                <li className="nav-item">
                  <Button variant="primary" id="transparent">
                    <img src="./Images/search.png">
                    </img>
                    
                  </Button>
                </li>
                <li className="nav-item">
                  <Button variant="primary" onClick={onLocaleChange}>
                    <FormattedMessage id="homePage.ChangeLanguage" />
                  </Button>
                </li>
              </ul>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Layout;
