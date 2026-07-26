import { Container } from "react-bootstrap";
import { Support } from "./components/SupportSettings";
import Privacy from "./components/PrivacySettings";
import Notifications from "./components/NotificationSettings";
import { General } from "./components/GeneralSettings";
import NavTop from "../../components/PageNav";

export default function MenuSettings() {
  return (
    <Container>
      <NavTop title="Settings" />

      <section className="settings px-3 mb-5">
        {/* general settings */}
        <General />

        {/* privacy settings */}
        <Privacy />

        {/* notification settings */}
        <Notifications />

        {/* Support setings */}
        <Support />
      </section>
    </Container>
  );
}
