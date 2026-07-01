import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderLogo = () => (
  <Navbar.Brand as={Link} to="/" className="m-0 mx-sm-3">
    <span className="first-letter">r.</span>{" "}
    <span className="second-letter">o.</span>{" "}
    <span className="third-letter">a.</span>
  </Navbar.Brand>
);

export default HeaderLogo;
