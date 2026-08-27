import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Nav, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
// import WhatsAppFloat from "./WhatsappFloat";
import ProductPage from "../../components/product/ProductPage.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../../animation";
import {
  FiHeadphones,
  FiLoader,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";
import {
  FaArrowLeft,
  FaBus,
  FaLocationArrow,
  FaMoneyBill,
  FaMoneyCheck,
  FaWhatsapp,
} from "react-icons/fa";
import {
  Envelope,
  Instagram,
  Shield,
  ShieldCheck,
  TwitterX,
} from "react-bootstrap-icons";

const STORE_STATS = [
  { value: `${STORES.totalProducts}`, label: "Products" },
  { value: `${STORES.followers}`, label: "Followers" },
  { value: `${STORES.delivery}`, label: "Delivery" },
];

const STORE_POLICIES = [
  {
    Icon: FaBus,
    color: "#e0ee19",
    tag: "Delivery",
    value: `${STORES.shipping}`,
  },
  {
    Icon: FiLoader,
    tag: "Returns",
    color: "#1927ee",
    value: `${STORES.returns}`,
  },
  {
    Icon: Shield,
    color: "#ee19ee",
    tag: "Warranty",
    value: `${STORES.warranty}`,
  },
  {
    Icon: FaMoneyBill,
    color: "#19eec0",
    tag: "Payment",
    value: `${STORES.payment}`,
  },
  {
    Icon: FiHeadphones,
    color: "#19ee35",
    tag: "Support",
    value: `${STORES.support}`,
  },
  {
    Icon: FaLocationArrow,
    color: "#c0ee19",
    tag: "Location",
    value: `${STORES.location}`,
  },
];

const STORE_CONTACT = [
  {
    Icon: FaWhatsapp,
    color: "#19ee19",
    bg: "#19ee193a",
    tag: "Whatsapp",
    value: `${STORES.whatsapp}`,
  },
  {
    Icon: Envelope,
    color: "#7c19ee",
    bg: "#7c19ee3a",
    tag: "Email",
    value: `${STORES.email}`,
  },
  {
    Icon: Instagram,
    color: "#ee193c",
    bg: "#ee193c2d",
    tag: "instagram",
    value: `${STORES.instagram}`,
  },
  {
    Icon: TwitterX,
    color: "#ee193c",
    bg: "#ee193c2d",
    tag: "Twitter / X",
    value: `${STORES.twitterX}`,
  },
];

import { STORES, getProductsByStore } from "../../dummyData.js";

export default function StorePublicPage() {
  const [followed, setFollowed] = useState(false);
  const [tab, setTab] = useState("PRODUCTS");
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    const storeHero = document.querySelector(".store_Image");

    if (storeHero) {
      observer.observe(storeHero);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {" "}
        {scrolled && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0, ease: "easeInOut" }}
          >
            {" "}
            <div
              className="scroll_active fixed-top"
              style={{
                backgroundImage: `linear-gradient( #042c09e1 ) , url(${STORES.cover}) `,
              }}
            >
              {/* Topbar */}

              <Container>
                <div className="d-flex gap-4 gap-md-5  align-items-center py-3 scroll_content">
                  {" "}
                  <div
                    onClick={() => navigate(-1)}
                    className="d-flex align-items-center "
                    style={{
                      background: "#fff",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  >
                    <FaArrowLeft size={18} color="black" />
                  </div>
                  <div className="d-flex gap-3 gap-sm-3 align-items-center ">
                    <Image
                      roundedCircle
                      width={50}
                      height={50}
                      style={{ objectFit: "cover" }}
                      src="public/images/profile.jpg"
                    />

                    <h2
                      className="fw-bold"
                      style={{
                        color: "#f0f6fc",
                        lineHeight: 1.2,
                      }}
                    >
                      {STORES.name}
                    </h2>
                  </div>{" "}
                  <div className="d-flex gap-2 gap-sm-3 align-items-center ms-auto me-3">
                    <FiSearch size={24} />

                    <Nav.Link as={Link} to="/cart">
                      <FiShoppingCart size={24} />
                      <span
                        className="px-1 fw-bold"
                        style={{
                          background: "#d7e600",
                          color: "#000",
                          top: 20,
                          fontSize: "15px",
                          position: "absolute",
                          borderRadius: "50%",
                        }}
                      >
                        3
                      </span>
                    </Nav.Link>
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section>
        <div className="store_Image">
          <div
            style={{
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={STORES.cover}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "clamp(250px, 40vw, 450px)",
              }}
            />
            <div
              style={{
                background:
                  " linear-gradient(180deg, #05270a00 , #001a0400, #05270a00, #001a04)",
                position: "absolute",
                bottom: 0,
                paddingTop: "60px",
                width: "100%",
              }}
            />
            {/* Badge pill */}
            {STORES.verified && (
              <div>
                <small
                  className="p-2 my-3 mx-sm-4 px-sm-4 me-3 d-flex align-items-center gap-2"
                  style={{
                    background: "rgba(2, 22, 12, 0.82)",
                    color: "#00E676",
                    border: "1px solid rgba(0,230,118,0.3)",
                    borderRadius: 20,
                    position: "absolute",
                    top: 0,
                    right: 0,
                    letterSpacing: 1,
                    display: "inline-block",
                    zIndex: 1,
                  }}
                >
                  <ShieldCheck /> verified store
                </small>
              </div>
            )}

            {/* store category */}

            <small
              className="p-2 my-3 mx-sm-4 px-sm-4  ms-3"
              style={{
                background: "#131602d1",
                color: "#d7fd00d1",
                border: "1px solid #9db804d1",
                borderRadius: 20,
                position: "absolute",
                top: 0,
                left: 0,
                letterSpacing: 1,
                display: "inline-block",
              }}
            >
              {STORES.category}
            </small>
          </div>

          <Container>
            {" "}
            <div
              className="text-center"
              style={{
                marginTop: " clamp(-50px, 10vw, -200px)",
              }}
            >
              {/* Logo with glow ring + status dot */}
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <div className="store-logo-wrapper">
                  <img src={STORES.logo} className="store-logo" />
                </div>
                <span
                  style={{
                    position: "absolute",
                    bottom: 4,
                    right: 4,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background:
                      STORES.status === "active" ? "#00E676" : "#d60606",
                    border: "2.5px solid #0d1117",
                  }}
                />
              </div>

              {/* Store name */}
              <span
                className="my-4 mb-md-2"
                style={{
                  fontWeight: 800,
                  color: "#f0f6fc",
                  display: "block",
                  fontSize: "clamp(1.95rem, 6vw, 4.7em)",
                  lineHeight: 1.2,
                }}
              >
                {STORES.name}
              </span>
            </div>
          </Container>
        </div>

        <Container>
          <div className="text-center pb-5">
            {/* Meta */}
            <h6
              className="my-5"
              style={{
                lineHeight: 1.72,
              }}
            >
              {STORES.handle} &nbsp;·&nbsp; 📍 {STORES.state} , {STORES.country}{" "}
              &nbsp;·&nbsp; {STORES.joined}
            </h6>

            {/* Tagline */}
            <h6
              className="my-5 "
              style={{
                lineHeight: 1.72,
              }}
            >
              {STORES.tagline}
            </h6>

            {/* open */}
            {STORES.isOpen && (
              <div className="d-flex align-items-center gap-2 justify-content-center pb-4">
                {" "}
                <span
                  className=" inline-flex"
                  style={{
                    background: "#9cfc64",
                    borderRadius: "100%",
                    padding: "3px",
                  }}
                />
                <p style={{ color: "#9cfc64" }}>
                  Open now &nbsp;·&nbsp; Responds within 1 hr
                </p>
              </div>
            )}

            {/* CTAs */}

            <div>
              <button
                onClick={() => setFollowed((f) => !f)}
                className="text-dark text-center py-2 w-50 my-sm-3 my-md-5"
                style={{
                  background: followed ? "#00E676" : "transparent",
                  border: followed ? "none" : "#00e677d8",
                  borderRadius: 12,
                  fontSize: "0.92rem",
                  boxShadow: "0 8px 28px rgba(0,230,118,0.38)",
                  transition: "all 0.22s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                {followed ? "following..." : " ♡ Follow Store"}
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <Container>
        <div
          style={{
            border: "1px solid rgba(224, 253, 0, 0.74)",
            borderRadius: "100%",
          }}
        />
        <div className="py-5 d-flex gap-5 justify-content-center flex-wrap">
          {STORE_STATS.map(({ value, label }) => (
            <div key={label} className="d-flex flex-column text-center">
              <h5
                className="fw-bold mb-1"
                style={{
                  color: "#b5f506f6",
                  lineHeight: 1,
                }}
              >
                {value}
              </h5>
              <p style={{ letterSpacing: 1 }}>{label}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* ── TRUST STRIP ── */}

      <div className="trust-chip-container py-5 ">
        <Container>
          <div className="d-flex gap-4 flex-wrap justify-content-center">
            {["Verified Seller", "Secure Checkout", "24h Support"].map((t) => (
              <span key={t} className="trust-chip py-1 px-3">
                ✓ &nbsp;{t}
              </span>
            ))}
          </div>
        </Container>
      </div>

      {/* ── PROMO BANNER ── */}

      <div style={{ background: "#3c3d01" }}>
        <Container>
          <div
            className="py-3 d-flex "
            style={{ overflowX: "auto", color: "#fbff00" }}
          >
            🔥🔥 Flash Sale — Up to 30% off selected items this week only
          </div>
        </Container>
      </div>

      <Container>
        <div className="filter-tab d-flex gap-4 gap-sm-5 my-5 ">
          {[
            "PRODUCTS",
            "ABOUT",

            /* "REVIEWS"*/
          ].map((s) => {
            return (
              <div
                className="px-3 py-1"
                key={s}
                onClick={() => setTab(s)}
                style={{
                  cursor: "pointer",
                  border: `0.5px solid ${tab === s ? "#fbff00" : "#f0f0f0da"}`,
                  background: tab === s ? "#57580f70" : "",
                  color: tab === s ? "#d3e016" : "",
                  borderRadius: "18px",
                }}
              >
                {" "}
                <span>{s}</span>
              </div>
            );
          })}
        </div>

        {/* ── STORE_PRODUCTS ── */}
        {tab === "PRODUCTS" && (
          <>
            {" "}
            <h6
              className="mb-3 mb-sm-5"
              style={{
                color: "#00E676",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              STORE CATALOGUE
            </h6>
            <ProductPage
              filter={true}
              product={getProductsByStore("store-001")}
              count={!false}
            />
          </>
        )}

        {/* ── ABOUT ── */}

        {tab === "ABOUT" && (
          <>
            {" "}
            {/* about store */}
            <div
              className="mt-5 p-4"
              style={{
                border: "1px solid rgba(233, 229, 4, 0.4)",
                background: "rgba(12, 12, 12, 0.29)",
              }}
            >
              <div
                style={{
                  color: "rgb(255, 251, 5)",
                }}
              >
                ABOUT THIS STORE
                <div
                  style={{
                    borderBottom: "1px solid  rgba(233, 229, 4, 0.4)",
                    padding: "11px",
                  }}
                ></div>
              </div>

              <p className="py-4">{STORES.about}</p>
            </div>
            {/* store policies*/}
            <div
              className="mt-5 p-4"
              style={{
                border: "1px solid rgba(233, 229, 4, 0.4)",
                background: "rgba(12, 12, 12, 0.29)",
              }}
            >
              <div
                style={{
                  color: "rgb(255, 251, 5)",
                }}
              >
                STORE POLICIES
                <div
                  className="mb-4"
                  style={{
                    borderBottom: "1px solid  rgba(233, 229, 4, 0.4)",
                    padding: "11px",
                  }}
                ></div>
                {STORE_POLICIES.map((p) => {
                  return (
                    p.value && (
                      <Stack
                        key={p.value}
                        className="my-5 gap-4 gap-sm-5 "
                        direction="horizontal"
                      >
                        <p.Icon
                          style={{
                            color: p.color,
                            fontSize: "clamp(21px, 2vw, 24px)",
                          }}
                        />
                        <span style={{ color: "#b4b4b4b0", fontSize: "18px" }}>
                          {p.tag}
                        </span>
                        <p
                          className="text-white ms-auto text-end"
                          style={{ lineHeight: 1.4 }}
                        >
                          {p.value}
                        </p>
                      </Stack>
                    )
                  );
                })}
              </div>
            </div>
            {/* store contact info*/}
            <div
              className="mt-5 p-4"
              style={{
                border: "1px solid rgba(233, 229, 4, 0.4)",
                background: "rgba(12, 12, 12, 0.29)",
              }}
            >
              <div
                style={{
                  color: "rgb(255, 251, 5)",
                }}
              >
                CONTACT STORE
                <div
                  className="mb-4"
                  style={{
                    borderBottom: "1px solid  rgba(233, 229, 4, 0.4)",
                    padding: "11px",
                  }}
                ></div>
                {STORE_CONTACT.map((s) => {
                  return (
                    <div key={s.value}>
                      {" "}
                      {s.value && (
                        <Stack
                          className="my-5 align-items-start"
                          direction="horizontal"
                          gap={5}
                        >
                          <s.Icon
                            className="d-flex align-items-center justify-content-center p-2"
                            size={35}
                            style={{
                              color: s.color,
                              borderRadius: "9px",
                              background: s.bg,
                            }}
                          />
                          <div className="d-sm-none">
                            {" "}
                            <span
                              style={{ color: "#b4b4b4b08e", fontSize: "18px" }}
                            >
                              {s.tag}
                            </span>
                            <p className="text=white">{s.value}</p>
                          </div>
                          <span
                            className="d-none d-sm-block"
                            style={{ color: "#b4b4b4b0", fontSize: "18px" }}
                          >
                            {s.tag}
                          </span>
                          <p className="text=white d-none d-sm-block ms-auto">
                            {s.value}
                          </p>
                        </Stack>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </Container>

      {/* ── FOOTER ── */}
      <footer
        className="py-4 mt-5"
        style={{
          background: "#010500",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: "1rem",
              }}
            >
              © 2026 R. O . A Powering local stores online
            </span>
            <div style={{ display: "flex", gap: 22 }}>
              {["Support?", "Report Store"].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.26)",
                    fontSize: "0.75rem",
                    fontFamily: "'Outfit',sans-serif",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00E676")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.26)")
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </footer>

      {/* <WhatsAppFloat store={STORES.whatsapp} /> */}
    </>
  );
}
