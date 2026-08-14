import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderLogo = () => (
  <Navbar.Brand as={Link} to="/" className="me-3">
    <div style={{ display: "inline-flex", gap: 5 }}>
      <h2 className="first-letter">r.</h2> <h2 className="second-letter">o.</h2>{" "}
      <h2 className="third-letter">a.</h2>
    </div>
  </Navbar.Brand>
);

export default HeaderLogo;
