import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import HeaderHamburger from "./header/HeaderHamburger";
import HeaderLogo from "./header/HeaderLogo";
import HeaderSearch from "./header/HeaderSearch";
import HeaderIcons from "./header/HeaderIcons";
import HeaderAuth from "./header/HeaderAuth";

const CartPageHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  
    useEffect( ()=> {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    },[]);
  return (
    <Navbar fixed="top" className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <Container >
        <HeaderHamburger />
        <HeaderLogo />
       

        <Nav className="ms-auto nav-icons">
          
          <div>
            <HeaderAuth />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CartPageHeader;