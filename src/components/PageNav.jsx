import { Container, Stack, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiBell, FiHeart } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";

export default function NavTop({ title, showSearchBtn = true }) {
  const navigate = useNavigate();

  return (
    <div
      className="  fixed-top"
      style={{
        background: "#000000",
        marginBottom: "100px",
        backdropFilter: " blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <Container>
        <div className="d-flex align-items-center justify-content-between py-2 py-sm-3">
          <div className="d-flex gap-3 gap-sm-5 align-items-center">
            {" "}
            <div
              onClick={() => navigate(-1)}
              className="d-flex align-items-center "
              style={{
                background: "#ffffff42",
                borderRadius: "100%",
                padding: "10px",
              }}
            >
              <FaArrowLeft size={15} />
            </div>
            <h4 style={{ lineHeight: 1.3 }}>
              <b>{title}</b>
            </h4>
          </div>
          {showSearchBtn && (
            <div>
              <FiSearch size={24} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
