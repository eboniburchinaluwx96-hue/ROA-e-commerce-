import {
  Container,
  Row,
  Col,
  Stack,
  Badge,
  Button,
  Card,
} from "react-bootstrap";
import { useState } from "react";
import MainHeader from "../../components/MainHeader";
import { HeroSection } from "./components/HeroSection";
import { ApplicationForm } from "./components/ApplicationForm";
import { ApplicationStepper } from "./components/ApplicationStepper";
import { LivePreview } from "./components/LivePreview";
import { Footer } from "../Home/components/Footer";
import { fadeUp, zoomIn } from "../../animation";
import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";

export default function GetStore() {
  const [create, setCreate] = useState(false);
  const [step, setStep] = useState(1);

  const [storeData, setStoreData] = useState({
    Name: "",
    Slug: "",
    Category: "",
    tagline: "",
    Handle: "",
    description: "",

    logo: null,
    logoPreview: "",
    banner: null,
    bannerPreview: "",

    country: "",
    address: "",
    phone: "",
    city: "",
    state: "",
    delivery: "",
  });
  const [errors, setErrors] = useState({});
  const [isPublish, setIsPublish] = useState(false);

  return (
    <section>
      <MainHeader
        hamburger={false}
        showNotification={false}
        search={false}
        showSearchbtn={!true}
        showCart={!true}
        showAuth={!true}
        ownStore={true}
      />

      <HeroSection setCreate={setCreate} create={create} />

      <div>
        {create && (
          <section id="store_open" className="form_ref py-5">
            <Container>
              <ApplicationStepper step={step} setStep={setStep} />
              <Row className="g-5  align-items-center">
                <Col lg={6}>
                  <ApplicationForm
                    setStep={setStep}
                    step={step}
                    setStoreData={setStoreData}
                    storeData={storeData}
                    errors={errors}
                    setErrors={setErrors}
                    setIsPublish={setIsPublish}
                  />
                </Col>

                <Col lg={6}>
                  <h1 className="text-center mb-5 text-white">
                    Have a glimpse of how your{" "}
                    <span style={{ color: "#eeff00" }}> storefront</span> looks
                    like{" "}
                  </h1>
                  <LivePreview store={storeData} />
                </Col>
              </Row>
            </Container>
          </section>
        )}
      </div>

      {isPublish && (
        <div className="d-flex justify-content-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="text-center p-5 m-5"
            style={{ boxShadow: "0 0 22px #85831d5e" }}
          >
            <motion.div
              variants={zoomIn}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <BsCheckCircleFill size={200} className="text-success mb-5" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              <p className="my-5 fs-1 " style={{ color: "#02ffab" }}>
                CONGRATULATIONS !
              </p>
              <h1 className="text-white my-5 py-5">
                Your <span style={{ color: "#ffee00" }}>store</span> have been
                created
              </h1>

              <button
                className="border-0 p-3 fs-4 mb-5"
                style={{
                  background: "#fcf160",
                  fontWeight: 700,
                  borderRadius: "20px",
                }}
              >
                Go to Dashboard
              </button>
            </motion.div>
          </motion.div>
        </div>
      )}

      <Footer />
    </section>
  );
}
