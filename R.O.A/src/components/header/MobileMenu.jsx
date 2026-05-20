import { Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import {
  FiHome,
  FiHeart,
  FiSettings,
  FiHelpCircle,
  FiPackage,
  FiMoon,
  FiShoppingBag,
  FiMessageSquare,
} from "react-icons/fi";

const MobileMenu = ({ show, handleClose }) => {
  const { user, shopOwner } = useAuthStore();

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="start"
      className="off-canvas-header"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column justify-content-between pt-4">
        <div>
          {/* 🏠 HOME */}

          <Nav className="flex-column py-3">
            <Nav.Link as={Link} to="/">
              <FiHome className="me-2" size={24} /> Home
            </Nav.Link>
          </Nav>

          {/* 🧾 SHOP */}
          <Nav className="flex-column py-3">
            <Nav.Link as={Link} to="/shopping">
              <FiShoppingBag className="me-2" size={24} /> Shop
            </Nav.Link>
          </Nav>

          {/* 🧾 SUPPORT */}
          <Nav className="flex-column py-3">
            <Nav.Link>
              <FiHelpCircle className="me-2" size={24} /> Help & Support
            </Nav.Link>
          </Nav>

          {user && (
            <>
              <Nav className="flex-column py-3 d-lg-none">
                <Nav.Link as={Link} to="/account">
                  <FiMessageSquare className="me-2" size={24} /> Notifications
                </Nav.Link>
              </Nav>
            </>
          )}

          {shopOwner && (
            <>
              <Nav className="flex-column py-3 d-lg-none">
                <Nav.Link as={Link} to="/account">
                  <FiMessageSquare className="me-2" size={24} /> Notifications
                </Nav.Link>
              </Nav>
            </>
          )}

          {shopOwner && (
            <>
              <Nav className="flex-column py-3">
                <Nav.Link as={Link} to="/store-admin">
                  My Store
                </Nav.Link>
              </Nav>
            </>
          )}

          {/* ⚙️ SETTINGS */}

          <Nav className="flex-column py-3">
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
