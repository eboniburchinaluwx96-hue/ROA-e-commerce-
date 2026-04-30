import { Badge, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { FiSearch, FiShoppingCart, FiBell } from "react-icons/fi";

const HeaderIcons = () => {
   const { user } = useAuthStore();

    if (user) {

      return (
        <>
          <div className="d-md-none ms-auto me-2">
            <FiSearch size={30} />
         </div>
          <Nav.Link as={Link} to="/notifications">
            <FiBell size={31} color="orange" />
          </Nav.Link>

          <Nav.Link as={Link} to="/cart">
            <FiShoppingCart size={36} /> <Badge bg="dark" pill>2</Badge>
          </Nav.Link>

        </>
      )
    }

    return (
      <>
      <div className="d-md-none ms-auto me-2">
        <FiSearch size={30} />
      </div>
      <Nav.Link as={Link} to="/cart">
          <FiShoppingCart size={36} /> <Badge bg="dark" pill>2</Badge>
      </Nav.Link>
      
      </>
    )

};

export default HeaderIcons;