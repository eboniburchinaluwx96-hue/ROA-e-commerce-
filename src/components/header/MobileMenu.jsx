import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import {
  FiHome,
  FiSettings,
  FiHelpCircle,
  FiShoppingBag,
  FiMessageSquare,
} from "react-icons/fi";

const MobileMenu = ({ show, handleClose }) => {
  const { user } = useAuthStore();

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="start"
      className="off-canvas-header"
    >
      <Offcanvas.Header>
        <Offcanvas.Title>Menu</Offcanvas.Title>
        <div className="ms-auto fs-5" onClick={handleClose}>
          X
        </div>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column justify-content-between pt-4">
        <div>
          {/* 🏠 HOME */}

          <div className="flex-column py-3 ">
            <Link to="/">
              <FiHome className="me-3" size={24} style={{ color: "#b4e600" }} />{" "}
              Home
            </Link>
          </div>

          {/* 🧾 SHOP */}
          <div className="flex-column py-3 ">
            <Link to="/shop">
              <FiShoppingBag
                className="me-3"
                size={24}
                style={{ color: "#b4e600" }}
              />{" "}
              Shop
            </Link>
          </div>

          {/* 🧾 SUPPORT */}
          <div className="flex-column py-3 ">
            <Link to="/help_support">
              <FiHelpCircle
                className="me-3"
                size={24}
                style={{ color: "#b4e600" }}
              />{" "}
              Help & Support
            </Link>
          </div>

          {user && (
            <>
              <div className="flex-column py-3 d-md-none ">
                <Link to="/notification">
                  <FiMessageSquare
                    className="me-3"
                    size={24}
                    style={{ color: "#b4e600" }}
                  />{" "}
                  Notifications
                </Link>
              </div>
            </>
          )}

          {/*  {user.shopOwner && (
            <>
              <div className="flex-column py-3">
                <Link  to="/store-admin">
                  My Store
                </Link>
              </div>
            </>
          )} */}

          {/* ⚙️ SETTINGS */}

          <div className="flex-column py-3 ">
            <Link to="/settings">
              <FiSettings
                className="me-3"
                size={24}
                style={{ color: "#b4e600" }}
              />{" "}
              Settings
            </Link>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileMenu;
