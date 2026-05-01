import { Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { FiUser, FiHome, FiGrid, FiHeart, FiSettings, FiHelpCircle, FiPackage, FiMoon } from "react-icons/fi";

const MobileMenu = ({ show, handleClose }) => {
  const { user } = useAuthStore();

  return (
    <Offcanvas show={show} onHide={handleClose} placement="start">

      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column justify-content-between">

        <div>

          {/* 👤 ACCOUNT (mobile only) */}
          {user && (
            <>
             <div className="flex-column mb-3 d-lg-none">
               <Nav.Link as={Link} to="/account">
                <FiUser className="me-2" size={24} /> My Account
              </Nav.Link>
             </div>
            </>
          )}

          {/* 🏠 HOME */}
          <Nav className="flex-column mb-3">
            <Nav.Link as={Link} to="/">
              <FiHome className="me-2" size={24} /> Home
            </Nav.Link>

          </Nav>

          {/* 🧾 SHOP */}
          <Nav className="flex-column mb-3">
            <Nav.Link as={Link} to="/shopping">
              <FiGrid className="me-2" size={24} /> Shop
            </Nav.Link>
          </Nav>

          {/* 🧾 SUPPORT */}
          <Nav className="flex-column mb-3">
            <Nav.Link>
              <FiHelpCircle className="me-2" size={24} /> Help & Support
            </Nav.Link>
          </Nav>

          {/* ⚙️ SETTINGS */}
          
          <Nav className="flex-column">
            <Nav.Link>
              <FiSettings className="me-2" size={24} /> Settings
            </Nav.Link>
          </Nav>

        </div>


      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileMenu;