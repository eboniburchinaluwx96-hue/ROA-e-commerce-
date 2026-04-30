import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderLogo = () => (
  <Navbar.Brand as={Link} to="/" className="mx-3">
    ROA <span className="text-danger">.</span>
  </Navbar.Brand>
);

export default HeaderLogo;