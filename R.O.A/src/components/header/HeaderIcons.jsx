import { Badge, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { FiSearch, FiShoppingCart, FiBell } from "react-icons/fi";

const HeaderIcons = () => {
   const { user } = useAuthStore();

    

    return (
      <>

        {user && (
          <>
            <div className="d-md-none ms-auto">
              <FiSearch size={30} />
              </div>
              <Nav.Link className="d-none d-lg-block" as={Link} to="/notifications">
                <FiBell size={31} color="orange" />
              </Nav.Link>

            <Nav.Link as={Link} to="/cart">
              <FiShoppingCart size={36} /> <Badge bg="dark" pill>1</Badge>
            </Nav.Link>
          </>
        )}
        
        {!user && (
          <div className="header-icons ">
            <div className="d-md-none">
              <FiSearch size={30} />
            </div>
            <Nav.Link as={Link} to="/cart">
                <FiShoppingCart size={36} /> <Badge bg="dark" pill>1</Badge>
            </Nav.Link>
            <Link to="/login">
              <button className="login-btn">
              Login
              </button>
            </Link>
          </div>
        )}
      
      </>
    )

};

export default HeaderIcons;