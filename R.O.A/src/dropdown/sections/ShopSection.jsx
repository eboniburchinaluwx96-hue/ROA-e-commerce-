import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Bag } from "react-bootstrap-icons";


const ShopSection = () => {
  return (
    <>
    <Link to="/shop"> <Bag size={20}/> Shop</Link>
    </>
  );
};
export default ShopSection;