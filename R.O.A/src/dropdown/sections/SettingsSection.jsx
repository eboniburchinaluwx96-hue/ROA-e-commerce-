import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const SettingsSection = () => {
  const theme = () => {
    const current = document.documentElement.getAttribute("data-theme");

    document.documentElement.setAttribute ("data-theme", current === "light" ? "dark" : "light");
  };

  return (
    <>
      <NavDropdown.Header>⚙️ SETTINGS</NavDropdown.Header>
      <NavDropdown.item onClick={theme}>
        Dark Mode
        </NavDropdown.item>
    </>
  );
};
export default SettingsSection;