import { Container, Image, Row, Col } from "react-bootstrap";
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMap,
  FaArrowLeft,
} from "react-icons/fa";
import { ProfileSlider } from "./components/ProfileSlider";
import { ProfileInfo } from "./components/ProfileInfo";
import { ProfileEdit } from "./components/ProfileEdit";
import { ProfilePic } from "./components/ProfilePic";
import { Overview } from "./components/ProfileOverview";
import { Settings } from "./components/ProfileSettings";
import { Footer } from "../Home/components/Footer";
import NavTop from "../../components/PageNav";

const profile = [
  {
    Icon: FaUser,
    color: "#ffd103",
    bg: "#ffd10341",
    label: "Full name",
    val: "Samuel Adeolu",
    key: "full name",
    type: "text",
  },
  {
    Icon: FaEnvelope,
    color: "#0379ffc9",
    bg: "#0385ff3a",
    label: "Email",
    val: "sam***@gmail.com",
    key: "email",
    type: "text",
  },
  {
    Icon: FaPhone,
    color: "#ffffffb9",
    bg: "#313030cc",
    label: "Phone",
    val: "+234*** *** 1234",
    key: "phone",
    type: "tel",
  },
  {
    Icon: FaMap,
    color: "#f80707e1",
    bg: "#e70e0e31",
    label: "Default address",
    val: "lagos,Nigeria",
    key: "address",
    type: "text",
  },
];

function ProfilePage() {
  const [overview, setOverview] = useState(true);
  const [wishlist, setWishlist] = useState(false);
  const [orders, setOrders] = useState(false);
  return (
    <>
      <div className="profile-container">
        <Container>
          <NavTop title="My Profile" />

          <ProfilePic />

          {/* profile */}
          <div
            className="mt-5 px-4"
            style={{
              border: "1px solid rgba(233, 229, 4, 0.16)",
              borderRadius: "12px",
              background: "rgba(12, 12, 12, 0.29)",
              maxWidth: "600px",
            }}
          >
            <div
              className="py-4"
              style={{
                color: "#fffb05",
                borderBottom: "1px solid  rgba(233, 229, 4, 0.4)",
              }}
            >
              PROFILE
            </div>
            {profile.map((field, i) => {
              return (
                <ProfileEdit
                  key={field.key}
                  field={field}
                  value={[field.val]}
                  i={i}
                />
              );
            })}
          </div>

          <ProfileInfo />

          <ProfileSlider
            overview={overview}
            setOverview={setOverview}
            wishlist={wishlist}
            setWishlist={setWishlist}
            orders={orders}
            setOrders={setOrders}
          />

          {overview && <Overview />}

          <Settings />
        </Container>

        {/* Footer */}

        <Footer />
      </div>
    </>
  );
}

export default ProfilePage;
