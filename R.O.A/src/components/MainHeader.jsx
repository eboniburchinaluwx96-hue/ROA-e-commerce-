import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import HeaderHamburger from "./header/HeaderHamburger";
import HeaderLogo from "./header/HeaderLogo";
import HeaderSearch from "./header/HeaderSearch";
import HeaderIcons from "./header/HeaderIcons";
import HeaderAuth from "./header/HeaderAuth";
import { AccountPage } from "../pages/Account/AccountPage";

const MainHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div>
              <HeaderAuth handleShow={handleShow} />
            </div>
          </Nav>

          {handleShow && <AccountPage show={show} onHide={handleClose} />}
        </Container>
      </Navbar>
    </>
  );
};

export default MainHeader;
