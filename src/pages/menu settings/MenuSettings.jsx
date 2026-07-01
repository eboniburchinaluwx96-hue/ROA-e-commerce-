import { Container } from "react-bootstrap";
import { Support } from "./components/SupportSettings";
import Privacy from "./components/PrivacySettings";
import Notifications from "./components/NotificationSettings";
import { General } from "./components/GeneralSettings";
import Nav from "../../components/PageNav";

export default function MenuSettings() {
  return (
    <Container>
      <Nav title="Settings" />

      <section className="settings p-5 mb-5">
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
