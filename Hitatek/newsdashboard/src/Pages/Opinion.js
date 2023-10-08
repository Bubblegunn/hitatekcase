// Home.js
import React from "react";
import { FormattedMessage } from "react-intl";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./opinion.css";
function Opinion() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={6} style={{paddingLeft:"3%"}}>

          <img
            src="./Images/thumb.png"
            alt="thumb"
            className="img-fluid w-100"
          ></img>
          <h3 id="thumb1">
            Celebrate Kamala Harris, But Don't Stop Applying Pressure To The
            System
          </h3>
          <p style={{paddingTop:"3%"}}>
            We shouldn't downplay what vice president-elect Kamala Harris means
            as a minority woman in high office, but we can't ignore her
            complicated past nor a system she inhabits that is built to thwart
            change.
          </p>
          <img
            src="./Images/pp.png"
            alt="pp"
            className="img-fluid"
            loading="lazy"
          ></img>
          <a style={{ fontWeight: "bold", paddingLeft: "5%" }} id="aBlack">
            ABDI ISMAIL SAMATAR
          </a>
        </Col>
        <div className="vertical-hr"></div>
        <Col xs={12} sm={6} style={{ paddingLeft: "4%" }}>
          <Row>
            <Col xs={12} sm={6}>
              <div className="holder">
                <img
                  src="./Images/thumb2.png"
                  alt="thumb2"
                  className="img-fluid"
                  loading="lazy"
                ></img>
                <h3 className="title">Ethiopia's needless war.</h3>
                <p>
                  Nullamlacus dui ipsum conseque loborttis non euisque morbi
                  penas dapibulum orna. Urnaultrices quis curabitur
                  phasellentesque.
                </p>
                <img
                  src="./Images/pp.png"
                  alt="pp"
                  className="img-fluid"
                  loading="lazy"
                ></img>
                <a
                  style={{ fontWeight: "bold", paddingLeft: "5%" }}
                  id="aBlack"
                >
                  ABDI ISMAIL SAMATAR
                </a>
              </div>
              <hr style={{ width: "80%", marginLeft: "5%" }} />

              <div className="holder">
                <img
                  src="./Images/thumb3.png"
                  alt="thumb3"
                  className="img-fluid"
                  style={{ paddingTop: "5%" }}
                  loading="lazy"
                ></img>
                <h3 className="title">Ethiopia's needless war.</h3>
                <p>
                  Nullamlacus dui ipsum conseque loborttis non euisque morbi
                  penas dapibulum orna. Urnaultrices quis curabitur
                  phasellentesque.
                </p>
                <img src="./Images/pp.png" alt="pp" className="img-fluid"></img>
                <a
                  style={{ fontWeight: "bold", paddingLeft: "5%" }}
                  id="aBlack"
                >
                  ABDI ISMAIL SAMATAR
                </a>
              </div>
            </Col>
            <div className="vertical-hr2"></div>
            <Col className="holder2" xs={12} sm={6}>
              <h2>
                <FormattedMessage id="homePage.Popular" />
              </h2>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {" "}
                {/* Marker'ı kaldırın ve padding sıfırlanır */}
                <li>
                  <Row>
                    <Col xs={3} sm={3} className="text-center">
                      <div style={{ marginTop: "10px" }}>
                        <img
                          src="./Images/1.png"
                          alt="1"
                          className="img-fluid"
                          style={{ marginBottom: "10px" }}
                          loading="lazy"
                        />
                      </div>
                      {/* Büyük rakam */}
                    </Col>
                    <Col xs={6} sm={6} className="d-flex flex-column">
                      {" "}
                      {/* flex-column ile içeriği dikey hale getirin */}
                      <p>
                        Cricket india's only effective weapon against Pakistan
                      </p>
                      <a style={{ fontWeight: "bold" }} id="aBlack">
                        ABDI ISMAIL SAMATAR
                      </a>
                    </Col>
                  </Row>
                  <hr style={{ width: "80%", marginLeft: "10%" }} />
                </li>
                <li>
                  <Row>
                    <Col xs={3} sm={3} className="text-center">
                      <img
                        src="./Images/2.png"
                        alt="2"
                        className="img-fluid"
                        style={{ paddingTop: "5%" }}
                        loading="lazy"
                      ></img>
                      {/* Büyük rakam */}
                    </Col>
                    <Col xs={6} sm={6}>
                      <p>
                        Cricket india's only effective weapon against Pakistan
                      </p>
                      <a style={{ fontWeight: "bold" }} id="aBlack">
                        ABDI ISMAIL SAMATAR
                      </a>
                    </Col>
                  </Row>
                  <hr style={{ width: "80%", marginLeft: "10%" }} />
                </li>
                <li>
                  <Row>
                    <Col xs={3} sm={3} className="text-center">
                      <img
                        src="./Images/3.png"
                        alt="3"
                        className="img-fluid"
                        style={{ paddingTop: "5%" }}
                        loading="lazy"
                      ></img>
                      {/* Büyük rakam */}
                    </Col>
                    <Col xs={6} sm={6}>
                      <p>
                        Cricket india's only effective weapon against Pakistan
                      </p>
                      <a style={{ fontWeight: "bold" }} id="aBlack">
                        ABDI ISMAIL SAMATAR
                      </a>
                    </Col>
                  </Row>
                  <hr style={{ width: "80%", marginLeft: "10%" }} />
                </li>
                <li>
                  <Row>
                    <Col xs={3} sm={3} className="text-center">
                      <img
                        src="./Images/4.png"
                        alt="4"
                        className="img-fluid"
                        style={{ paddingTop: "5%" }}
                        loading="lazy"
                      ></img>
                      {/* Büyük rakam */}
                    </Col>
                    <Col xs={6} sm={6}>
                      <p>
                        Cricket india's only effective weapon against Pakistan
                      </p>
                      <a style={{ fontWeight: "bold" }} id="aBlack">
                        ABDI ISMAIL SAMATAR
                      </a>
                    </Col>
                  </Row>
                  <hr style={{ width: "80%", marginLeft: "10%" }} />
                </li>
                <li>
                  <Row>
                    <Col xs={3} sm={3} className="text-center">
                      <img
                        src="./Images/5.png"
                        alt="5"
                        className="img-fluid"
                        style={{ paddingTop: "5%" }}
                        loading="lazy"
                      ></img>
                      {/* Büyük rakam */}
                    </Col>
                    <Col xs={6} sm={6}>
                      <p>
                        Cricket india's only effective weapon against Pakistan
                      </p>
                      <a style={{ fontWeight: "bold" }} id="aBlack">
                        ABDI ISMAIL SAMATAR
                      </a>
                    </Col>
                  </Row>
                  <hr style={{ width: "80%", marginLeft: "10%" }} />
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Opinion;
