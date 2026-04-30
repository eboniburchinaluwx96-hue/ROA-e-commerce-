import { Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import ProfileDropdown from "../../dropdown/ProfileDropdown";
import { FiUser} from "react-icons/fi"

const HeaderAuth = () => {
  const { user } = useAuthStore();

  if (!user) {
    return (

      <Nav.Link as={Link} to="/login">
        <FiUser size={36} color="" />/Login
      </Nav.Link>
    );
  }

  return <Nav.Link as={Link} to="/account">
    <Image roundedCircle width={40} height={40} src="/images/profile.jpg" />
    </Nav.Link>
};

export default HeaderAuth;