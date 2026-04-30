import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";  

const SupportSection = () => {
  return (
    <>
      <NavDropdown.Header>🧾 SUPPORT</NavDropdown.Header>
      <NavDropdown.Item as={Link} to="/help-center">
        Help Center
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/contact">
        Contact Support
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/returns">
        Returns & Refunds
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/terms">
        Terms & Policies
      </NavDropdown.Item>
    </>
  );
}

export default SupportSection;