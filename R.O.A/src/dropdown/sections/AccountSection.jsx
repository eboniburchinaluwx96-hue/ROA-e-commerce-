import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccountSection = () => (
  <>
    <NavDropdown.Header>👤 ACCOUNT</NavDropdown.Header>
    <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/orders">My Orders</NavDropdown.Item>
    <NavDropdown.Divider />
  </>
);

export default AccountSection;