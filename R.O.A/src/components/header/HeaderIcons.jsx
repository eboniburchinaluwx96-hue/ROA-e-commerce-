import { Badge, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { FiSearch, FiShoppingCart, FiBell } from "react-icons/fi";

const HeaderIcons = () => {
  const { user } = useAuthStore();

  return (
    <>
      {user && (
        <div className="header-icons">
          <Nav.Link className="d-md-none ms-auto">
            <FiSearch size={27} color="white" />
          </Nav.Link>
          <Nav.Link className="d-none d-lg-block" as={Link} to="/notifications">
            <FiBell size={27} color="orange" />
          </Nav.Link>

          <Nav.Link as={Link} to="/cart">
            <FiShoppingCart size={27} />
            <Badge pill bg="warning">
              2
            </Badge>
          </Nav.Link>
        </div>
      )}

      {!user && (
        <div className="header-icons ">
          <div className="d-md-none">
            <FiSearch size={27} />
          </div>
          <Nav.Link as={Link} to="/cart">
            <FiShoppingCart size={27} />{" "}
            <Badge pill bg="warning">
              2
            </Badge>
          </Nav.Link>
        </div>
      )}
    </>
  );
};

export default HeaderIcons;
