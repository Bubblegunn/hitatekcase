import React, { useEffect, useState, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import Opinion from "./Opinion";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewsList } from "../Api";
import "./about.css";

function About() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    // Tarayıcı pencere boyutu değiştiğinde kontrol edin
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1200);
    };

    // Event listener'ı ekleyin ve temizlemeyi unutmayın
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Sayfa içeriğini önbelleğe alma
  const pageContent = useMemo(() => {
    return (
      <div>
        <div
          className="col-12"
          style={{ paddingLeft: "5%", paddingBottom: "2%", paddingTop: "2%" }}
        >
          <h2 className="headtext">
            <FormattedMessage id="homePage.Opinion" />
          </h2>
        </div>
        <div className="col-12">
          {isSmallScreen ? (
            <>
              <Opinion />
              <ImageComponent />
            </>
          ) : (
            <>
              <ImageComponent />
              <Opinion />
            </>
          )}
        </div>
        <div className="row">
          <div className="col-12">
            <NewsList />
          </div>
        </div>
      </div>
    );
  }, [isSmallScreen]);

  function ImageComponent() {
    return (
      <div className="col-12">
        <div className="position-relative">
          <div className="image-container">
            <img
              src="./Images/bg.png"
              alt="bg"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                margin: "0 auto",
                zIndex:-1,
              }}
              loading="lazy"
            ></img>
          </div>
          <div className="middle">
              <Container
                style={{ width: "100px", height: "50px", marginRight: "5px",zIndex:0 }}
              />
          </div>
          <div className="overlay">
            <h3><FormattedMessage id="homePage.Header2" /></h3>
            <div className="link">
              <img
                src="./Images/pp2.png"
                alt="pp2"
                className="img-fluid"
                loading="lazy"
                style={{ width: "20px", height: "20px", marginRight: "5px",zIndex:1 }}
              />
              <a style={{ fontWeight: "bold", paddingLeft: "5%" }} id="aWhite">
                ALFONS LOPEZ TENA
              </a>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: "2%", width:"90%" , marginLeft:"4%", paddingBottom:"1%"}} />
      </div>
    );
  }

  return <div>{pageContent}</div>;
}

export default About;
