import { Nav, Image, Offcanvas, Container, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { Bag, Heart, Person, Gear, Shop } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const HeaderAuth = () => {
  const { user } = useAuthStore();

  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {user && (
        <Nav className="py-2">
          <NavDropdown
            onClick={() => setShowProfile(true)}
            align="end"
            title={
              <Image
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                roundedCircle
                width={37}
                height={39}
                src="/images/profile.jpg"
              />
            }
          />
        </Nav>
      )}

      <Offcanvas
        show={showProfile}
        onHide={() => setShowProfile(false)}
        placement="end"
        className="profile-dropdown"
      >
        <div className="my-5 ps-3">
          <div className="d-flex gap-3 align-items-center mb-3">
            <Image
              roundedCircle
              width={70}
              height={80}
              src="/images/profile.jpg"
            />

            <div className="flex-column">
              <h5
                style={{
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "24px",
                  letterSpacing: "-0.7px",
                  marginBottom: "8px",
                  color: "#000",
                }}
              >
                Samuel Adeolu
              </h5>
              <p
                style={{
                  fontSize: "15px",
                  color: "#000",
                }}
              >
                @samklefboy
              </p>
            </div>
          </div>
        </div>
        <div className="flex-column nav-items">
          <NavDropdown.Item>
            <Nav.Link as={Link} to="/profile">
              <span>
                <Person className="me-2" /> Profile
              </span>
            </Nav.Link>
          </NavDropdown.Item>

          <NavDropdown.Item>
            <Nav.Link as={Link} to="/wishlist" className="tet-dark">
              <span>
                <Heart className="me-2" />
                Wishlist
              </span>
            </Nav.Link>
          </NavDropdown.Item>

          <NavDropdown.Item>
            <Nav.Link as={Link} to="/orders">
              <span>
                <Bag className="me-2" /> My Orders{" "}
              </span>
            </Nav.Link>
          </NavDropdown.Item>

          {/*  {user.hasShop && (
              <>
                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/store/dashboard">
                    <span>
                      <Shop className="me-2" />
                      Creator Studio (My Store)
                    </span>
                  </Nav.Link>
                </NavDropdown.Item>
              </>
            )} */}

          <NavDropdown.Item>
            <Nav.Link as={Link} to="/settings" className="">
              <span>
                <Gear className="me-2" /> Account Settings{" "}
              </span>
            </Nav.Link>
          </NavDropdown.Item>
        </div>
      </Offcanvas>

      {!user && (
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      )}
    </>
  );
};

export default HeaderAuth;
