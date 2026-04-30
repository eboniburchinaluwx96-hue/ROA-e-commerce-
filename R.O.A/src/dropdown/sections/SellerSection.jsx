import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const SellerSection = ({ hasShop }) => {
  if (hasShop) {
    return (
      <>
        <NavDropdown.Header>🚀 SELL / GROWTH</NavDropdown.Header>
        <NavDropdown.Item as={Link} to="/seller/dashboard">
          My Store
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/seller/products">
          Manage Products
        </NavDropdown.Item>
        <NavDropdown.Divider />
      </>
    );
  }

  return (
    <>
      <NavDropdown.Item as={Link} to="/become-seller">
        Become a Seller
      </NavDropdown.Item>
      <NavDropdown.Divider />
    </>
  );
};

export default SellerSection;