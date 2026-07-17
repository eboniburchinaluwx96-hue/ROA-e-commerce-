import { Container, Row, Col, Stack } from "react-bootstrap";
import { FaBus, FaGlobeAfrica } from "react-icons/fa";

import { FiLock, FiShoppingBag } from "react-icons/fi";
import { ChatDots } from "react-bootstrap-icons";

const cards = [
  {
    Icon: FiShoppingBag,
    bg: "#2ddf00",
    a: "Multi-Vendor Market",
    b: "Browse thousands of products from verified vendors across different categories",
  },
  {
    Icon: ChatDots,
    bg: "#fff",
    a: "Social Shopping",
    b: "Chat with sellers/agents, ask questions, negotiate, and shop with confidence.",
  },
  {
    Icon: FiLock,
    bg: "#cf0808",
    a: "Safe & Secure",
    b: "protected accounts, verified sellers, and secure transactons for ease of mind",
  },
  {
    Icon: FaBus,
    a: "Easy Order Management ",
    b: "Track your orders and manage purchases effortlessly from your account",
  },
  {
    Icon: FaGlobeAfrica,
    bg: "#1130e4",
    a: "Built For Communities",
    b: "Support local businesses while reaching customers across Nigeria",
  },
];

export function WhyUs() {
  return (
    <section style={{ background: "#fdfdfd73" }} className="pb-5">
      <Container>
        <div className="text-center py-5">
          <p
            className="text-dark"
            style={{
              fontSize: "25px",
              lineHeight: 1.4,
            }}
          >
            R.O.A is the platform that combine the power of social networking
            with online shopping, where sellers open powerful storefronts and
            buyers shop from anywhere - connected like a neighbourhood, reaching
            like a continent.
          </p>
        </div>

        <Row g-5 className="g-5">
          {cards.map((c) => {
            return (
              <Col key={c} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="align-items-start p-3 why_us_card"
                  style={{
                    boxShadow: "2px 12px 30px #000000b6",
                    borderRadius: "12px",
                  }}
                >
                  <c.Icon
                    className="mt-2"
                    size={28}
                    style={{ color: `${c.bg}`, width: "100%" }}
                  />

                  <div>
                    <h4 className="text-white mb-2">{c.a}</h4>
                    <p className="text-dark">{c.b}</p>
                  </div>
                </Stack>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
