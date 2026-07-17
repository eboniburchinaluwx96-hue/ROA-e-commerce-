import {
  Container,
  Row,
  Col,
  Stack,
  Badge,
  Button,
  Card,
} from "react-bootstrap";
import { useState, useRef } from "react";
import MainHeader from "../../components/MainHeader";
import { HeroSection } from "./components/HeroSection";
import { ApplicationForm } from "./components/ApplicationForm";
import { LivePreview } from "./components/LivePreview";

export default function GetStore() {
  const [create, setCreate] = useState(false);
  const [step, setStep] = useState(1);
  const formRef = useRef(null);
  const [storeData, setStoreData] = useState({
    storeName: "",
    slug: "",
    category: "",
    tagline: "",
    handle: "",
    description: "",
    logo: null,
    logoPreview: "",
    banner: null,
    bannerPreview: "",
    country: "",
    address: "",
    bankName: "",
    accountName: "",
    accountNo: "",
    phone: "",
    email: "",
    facebook: "",
    website: "",
    instagram: "",
    tiktok: "",
    city: "",
    state: "",
    delivery: "",
    returnPolicy: "",
    warrantyInfo: "",
  });

  const scrollIntoView = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setCreate(!false);
  };
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

      <HeroSection scrollIntoView={scrollIntoView} />

      <div ref={formRef}>
        {create && (
          <section className="form_ref">
            <Container>
              <Row className="g-5 pt-5 align-items-center">
                <Col lg={7}>
                  <ApplicationForm
                    setStep={setStep}
                    step={step}
                    setStoreData={setStoreData}
                    storeData={storeData}
                  />
                </Col>

                <Col lg={5}>
                  <LivePreview store={storeData} />
                </Col>
              </Row>
            </Container>
          </section>
        )}
      </div>
    </section>
  );
}
