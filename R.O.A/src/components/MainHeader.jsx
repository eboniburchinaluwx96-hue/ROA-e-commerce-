import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderHamburger from "./header/HeaderHamburger";
import HeaderLogo from "./header/HeaderLogo";
import HeaderSearch from "./header/HeaderSearch";
import HeaderIcons from "./header/HeaderIcons";
import HeaderAuth from "./header/HeaderAuth";

const MainHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  const [showProfile, setShowProfile] = useState(false);

  const handleShow = () => {
    setShowProfile(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        fixed="top"
        className={`header ${scrolled ? "header-scrolled" : ""}`}
      >
        <Container>
          <HeaderHamburger />
          <HeaderLogo />
          <HeaderSearch />

          <Nav className="ms-auto nav-icons">
            <HeaderIcons />
            <HeaderAuth
              handleShow={handleShow}
              show={showProfile}
              onHide={() => setShowProfile(false)}
              scrolled={scrolled}
            />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainHeader;
