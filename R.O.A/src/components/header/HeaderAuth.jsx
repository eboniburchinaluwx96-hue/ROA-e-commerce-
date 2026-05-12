import { Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import ProfileDropdown from "../../dropdown/ProfileDropdown";

const HeaderAuth = () => {
  const { user } = useAuthStore();


  return (
    <>
      {(user && (
      <Nav.Link as={Link} to="/account">
    <Image roundedCircle width={40} height={40} src="/images/profile.jpg" />
    </Nav.Link>
    ))}
    </>
  );
};


export default HeaderAuth;