import { Card, Container } from "react-bootstrap";

export function LivePreview({ store }) {
  return (
    <>
      <Card
        style={{
          overflowY: "auto",
          boxShadow: "-2px 1px 22px #0e0d0d",
          background: "none",
        }}
      >
        <section
          style={{
            padding: "5rem 0 4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -55,
              right: -150,
              width: 540,
              height: 540,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(196, 230, 0, 0.28) ,transparent 58%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 100,
              left: 230,
              width: 520,
              height: 540,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(180, 200, 0, 0.15),transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "5%",
              left: "-20%",
              width: "90%",
              height: "90%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(0,230,118,0.1)5% ,transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: -380,
              width: "90%",
              height: "90%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(0,230,118,0.1) ,transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <Container fluid>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  className="hero-in"
                  style={{ maxWidth: 780, width: "100%", textAlign: "center" }}
                >
                  {/* Badge pill */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <span
                      style={{
                        background: "rgba(0,230,118,0.12)",
                        color: "#00E676",
                        border: "1px solid rgba(0,230,118,0.3)",
                        borderRadius: 20,
                        padding: "10px 18px",
                        fontWeight: 700,
                        fontSize: "13px",
                        letterSpacing: 1.4,
                        fontFamily: "'Outfit',sans-serif",
                        display: "inline-block",
                      }}
                    >
                      ✦ &nbsp;VERIFIED SELLER &nbsp;·&nbsp; {store.handle}
                    </span>
                  </div>

                  {/* Logo with glow ring + status dot */}
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: 96,
                        height: 96,
                        borderRadius: 24,
                        overflow: "hidden",
                        margin: "0 auto",
                        border: "2.5px solid rgba(0,230,118,0.35)",
                        boxShadow:
                          "0 0 0 5px rgba(0,230,118,0.07),0 18px 50px rgba(0,0,0,0.65)",
                      }}
                    >
                      <img
                        src={store.logo}
                        alt={store.logo}
                        className="img-fluid"
                      />
                    </div>
                    <span
                      style={{
                        position: "absolute",
                        bottom: 4,
                        right: 4,
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: "#00E676",
                        border: "2.5px solid #0d1117",
                      }}
                    />
                  </div>

                  {/* Store name */}
                  <h1
                    style={{
                      fontWeight: 800,
                      color: "#f0f6fc",
                      fontSize: "clamp(2.7rem,6vw,3.8rem)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.99px",
                      marginBottom: "11px",
                    }}
                  >
                    {store.name}
                  </h1>

                  {/* Meta */}
                  <p
                    style={{
                      color: "#c2c2c2e5 ",
                      fontSize: "14px",
                      marginBottom: "33px",
                    }}
                  >
                    📍 {store.location} &nbsp;·&nbsp;
                    {store.state} &nbsp;·&nbsp; {store.city}
                  </p>

                  {/* Tagline */}
                  <p
                    style={{
                      color: "#c2c2c2e5 ",
                      fontSize: "20px",
                      lineHeight: 1.72,
                      margin: "45px auto",
                      maxWidth: 480,
                    }}
                  >
                    {store.tagline}
                  </p>

                  {/* CTAs */}
                  <div
                    className="hero-ctas"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 12,
                      flexWrap: "wrap",
                      marginBottom: "38px",
                    }}
                  >
                    <button
                      style={{
                        background: "#00E676",
                        border: "none",
                        color: "#000",
                        borderRadius: 12,
                        fontFamily: "'Outfit',sans-serif",
                        fontWeight: 700,
                        fontSize: "0.92rem",
                        padding: "15px",
                        boxShadow: "0 8px 28px rgba(0,230,118,0.38)",
                        transition: "all 0.22s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "translateY(-2px)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "none")
                      }
                    >
                      Shop All STORE_PRODUCTS
                    </button>

                    <button className="py-2" style={{ background: "#00E676" }}>
                      {" "}
                      "♡ Follow Store"
                    </button>
                  </div>

                  {/* Stats strip */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "22px",
                      borderTop: "1px solid rgba(255,255,255,0.07)",
                      paddingTop: "22px",
                      lineHeight: "10px",
                    }}
                  >
                    <div style={{ maxWidth: 780 }}>
                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: "23px",
                          color: "#f0f6fcf6",
                          lineHeight: 1,
                        }}
                      >
                        Delivery
                      </div>
                      <div
                        style={{
                          color: "rgba(255, 255, 255, 0.53)",
                          fontSize: "10px",
                          marginTop: 10,
                          letterSpacing: "1px",
                        }}
                      >
                        {store.delivery}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Card>
    </>
  );
}
