import { Navbar, Container, Nav } from "react-bootstrap";
import HeaderHamburger from "./header/HeaderHamburger";
import HeaderLogo from "./header/HeaderLogo";
import HeaderSearch from "./header/HeaderSearch";
import HeaderIcons from "./header/HeaderIcons";
import HeaderAuth from "./header/HeaderAuth";

const MainHeader = () => {
  return (
    <Navbar fluid className="header shadow-sm ">
      <Container fluid>
        <HeaderHamburger />
        <HeaderLogo />
        <HeaderSearch />

        <Nav className="ms-auto nav-icons">
          <HeaderIcons />
          <div className="d-none d-lg-block">
            <HeaderAuth />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainHeader;