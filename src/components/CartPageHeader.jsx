import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import { useState, useEffect } from "react";
import HeaderHamburger from "./header/HeaderHamburger";
import HeaderLogo from "./header/HeaderLogo";
import HeaderSearch from "./header/HeaderSearch";
import HeaderIcons from "./header/HeaderIcons";
import HeaderAuth from "./header/HeaderAuth";

const CartPageHeader = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <Navbar
      fixed="top"
      className={`header ${scrolled ? "header-scrolled" : ""}`}
    >
      <Container>
        <HeaderHamburger />
        <HeaderLogo />

        <Nav className="ms-auto nav-icons">
          <div className="d-flex align-items-center gap-4">
            <Nav.Link className="" as={Link} to="/notifications">
              <FiBell size={28} color="yellow" />
            </Nav.Link>
            <HeaderAuth />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CartPageHeader;
