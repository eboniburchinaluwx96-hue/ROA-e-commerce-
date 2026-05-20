import { Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import ProfileDropdown from "../../dropdown/ProfileDropdown";

const HeaderAuth = ({ handleShow }) => {
  const { user } = useAuthStore();

  return (
    <>
      {user && (
        <Nav.Link>
          <Image
            onClick={() => handleShow}
            roundedCircle
            width={40}
            height={40}
            src="/images/profile.jpg"
          />
        </Nav.Link>
      )}

      {!user && (
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      )}
    </>
  );
};

export default HeaderAuth;
