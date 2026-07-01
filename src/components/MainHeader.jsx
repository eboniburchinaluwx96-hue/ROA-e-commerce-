import { Navbar, Container, Nav, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderHamburger from "./header/HeaderHamburger";
import { FaArrowLeft } from "react-icons/fa";
import HeaderLogo from "./header/HeaderLogo";
import HeaderSearch from "./header/HeaderSearch";
import HeaderIcons from "./header/HeaderIcons";
import HeaderAuth from "./header/HeaderAuth";

const MainHeader = ({
  title,
  showAuth = true,
  showCart = true,
  showWishlist = false,
  showSearchbtn = true,
}) => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const [showProfile, setShowProfile] = useState(false);

  const handleShow = () => {
    setShowProfile(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        fixed="top"
        className={`header ${scrolled ? "header-scrolled" : ""} ${title ? "py-3" : ""}`}
      >
        <Container>
          <div className=" d-flex align-items-center gap-3">
            {title ? (
              <>
                <div
                  className="d-inline-flex"
                  onClick={() => navigate(-1)}
                  style={{
                    background: "#ffffff42",
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                >
                  <FaArrowLeft size={15} className="text-dark" />
                </div>

                <div className="text-light" style={{ letterSpacing: 1 }}>
                  <h4>Hello Samuel</h4>
                </div>
              </>
            ) : (
              <>
                <HeaderHamburger />
                <HeaderLogo />
              </>
            )}
          </div>

          {!title && <HeaderSearch />}

          <div className=" nav-icons">
            <HeaderIcons
              showCart={showCart}
              showWishlist={showWishlist}
              showSearchbtn={showSearchbtn}
              title
            />
            {showAuth && (
              <HeaderAuth
                handleShow={handleShow}
                show={showProfile}
                onHide={() => setShowProfile(false)}
                scrolled={scrolled}
              />
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default MainHeader;
