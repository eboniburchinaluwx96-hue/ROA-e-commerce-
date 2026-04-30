import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const PersonalSection = () => {
  return (
    <>

    <NavDropdown.Header>💼 PERSONAL</NavDropdown.Header>
    <NavDropdown.Item as={Link} to="/wishlist">Wishlist</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/settings">Saved Items</NavDropdown.Item>
    <NavDropdown.Divider />

    </>

  );
};

export default PersonalSection;