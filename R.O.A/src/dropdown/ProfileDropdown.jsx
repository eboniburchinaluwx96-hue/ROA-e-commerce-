import { NavDropdown } from "react-bootstrap";
import AccountSection from "./sections/AccountSection";
import ShopSection from "./sections/ShopSection";
import PersonalSection from "./sections/PersonalSection";
import SupportSection from "./sections/SupportSection";
import SettingsSection from "./sections/SettingsSection";
import SellerSection from "./sections/SellerSection";
import { useAuthStore } from "../store/authStore";


const ProfileDropdown = ({ user }) => {
  const { logout } = useAuthStore();

  return (
    <NavDropdown title={<BsPersonCircle size={36} color="black" />} align="end">

      <AccountSection />
      <ShopSection />
      <PersonalSection />
      <SupportSection />
      <SettingsSection />

      <SellerSection hasShop={user.hasShop} />

      <NavDropdown.Divider />
      <NavDropdown.Item onClick={logout}>
        Logout
      </NavDropdown.Item>

    </NavDropdown>
  );
};

export default ProfileDropdown;