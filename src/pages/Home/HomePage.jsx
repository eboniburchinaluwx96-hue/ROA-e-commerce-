import { Container, Row, Col, Form } from "react-bootstrap";
import MainHeader from "../../components/MainHeader";
import { useState } from "react";
import { Footer } from "./component/Footer";
import { FaStar, FaStore, FaShoppingCart } from "react-icons/fa";

function HomePage() {
  const [heroSellBtn, setHeroSellBtn] = useState(true);

  const [heroShopBtn, setHeroShopBtn] = useState(false);

  return (
    <>
      <title>r. o. a.</title>

      <MainHeader showAuth={true} showCart={true} showSearchbtn={true} />

      <Container>
        <div
          className="align-items-center text-light text-center about-us text-light"
          style={{
            marginTop: "clamp(-40px, 20vh, 100px)",
          }}
        >
          <div>YOUR MARKET.</div>
          <div
            style={{
              color: "rgb(255, 238, 0)",
              fontStyle: "italic",
            }}
          >
            YOUR WORLD.
          </div>
          <div
            style={{
              border: "1px solid rgb(255, 238, 0) ",
              color: "rgb(255, 238, 0)",
              padding: "17px",
              fontSize: "clamp(11px, 3vw, 12px)",
              marginTop: "30px",
            }}
          >
            A PLACE WITH A HUMAN TOUCH
          </div>
        </div>
      </Container>

      <div
        style={{
          background: "rgba(0, 0, 0, 0.47)",
        }}
      >
        <Container>
          <Row className=" text-light align-items-center mt-5 py-5 px-3 ">
            <Col className=" text-center col-12 mb-4">
              <div className="d-flex flex-column justify-content-center">
                <p
                  style={{
                    color: "rgba(194, 194, 194, 0.83)",
                    fontSize: "25px",
                    lineHeight: "50px",
                  }}
                >
                  {" "}
                  R.O.A is the platform where sellers open powerful storefronts
                  and buyers shop from anywhere - connected like a
                  neighbourhood, reaching like a continent.
                </p>

                <div
                  className="d-flex mt-4 mb-5  mx-auto "
                  style={{ maxWidth: "350px", lineHeight: 1.4 }}
                >
                  <button
                    onClick={() => {
                      setHeroSellBtn(true);
                      setHeroShopBtn(false);
                    }}
                    className={`text-center p-3  ${heroSellBtn ? "hero-active" : "hero-btn"}`}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <FaStore /> <div>I WANT TO SELL</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setHeroShopBtn(true);
                      setHeroSellBtn(false);
                    }}
                    className={`text-center p-2  ${heroShopBtn ? "hero-active" : "hero-btn"}`}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <FaShoppingCart /> <div>I WANT TO SHOP</div>
                    </div>
                  </button>
                </div>

                <button className="mx-auto hero-btn p-3 mb-5">
                  SEE OUR FEATURES
                </button>
              </div>
            </Col>

            <Col>
              {heroSellBtn && (
                <div className="text-center">
                  <div>
                    <p
                      className="mb-4"
                      style={{
                        color: "rgb(255, 238, 0)",
                        letterSpacing: "2.5px",
                      }}
                    >
                      FOR SELLERS
                    </p>
                    <h1>
                      Commerce made{" "}
                      <span
                        style={{
                          color: "rgb(255, 238, 0)",
                        }}
                      >
                        beautifully simple
                      </span>
                    </h1>
                    <p
                      className="my-4"
                      style={{
                        color: "rgba(194, 194, 194, 0.83)",
                        letterSpacing: 1.2,
                      }}
                    >
                      From setting up your storefront to reaching customers
                      globally - R.O.A handles the complexity so you focus on
                      what you do best{" "}
                    </p>
                  </div>

                  <Row className="text-start g-5">
                    <Col className="col-12 col-sm-6">
                      <div
                        className="seller-info-card"
                        style={{
                          border: "1px solid rgba(233, 229, 4, 0.4)",
                          background: "rgba(0, 0, 0, 0.87)",
                          color: "rgba(194, 194, 194, 0.83)",
                          padding: "40px 25px",
                        }}
                      >
                        <h1
                          style={{
                            color: "#ffffff21",
                          }}
                        >
                          01
                        </h1>
                        <h4 className="text-light py-3">Create Your Store</h4>
                        <p>
                          Set up a branded storefront in minutes. customize your
                          profile, add products, and set your own pricing with
                          zero technical expertize needed.
                        </p>
                      </div>
                    </Col>

                    <Col className="col-12 col-sm-6">
                      <div
                        className="seller-info-card"
                        style={{
                          border: "1px solid rgba(233, 229, 4, 0.4)",
                          background: "rgba(0, 0, 0, 0.87)",
                          color: "rgba(194, 194, 194, 0.83)",
                          padding: "40px 25px",
                        }}
                      >
                        <h1
                          style={{
                            color: "#ffffff21",
                          }}
                        >
                          02
                        </h1>
                        <h4 className="text-light py-3">Get Discovered</h4>
                        <p>
                          Your store is visible to buyers across the platform
                          the moment you have a store with us. Customers find
                          you organically - no paid needed to get started.
                        </p>
                      </div>
                    </Col>

                    <Col className="col-12 col-sm-6">
                      <div
                        className="seller-info-card"
                        style={{
                          border: "1px solid rgba(233, 229, 4, 0.4)",
                          background: "rgba(0, 0, 0, 0.87)",
                          color: "rgba(194, 194, 194, 0.83)",
                          padding: "40px 25px",
                        }}
                      >
                        <h1
                          style={{
                            color: "#ffffff21",
                          }}
                        >
                          03
                        </h1>
                        <h4 className="text-light py-3">Sell Globally</h4>
                        <p>
                          Accept payments from anywhere, in any currency.
                          Customers from all states can patronze your store with
                          a single tap.
                        </p>
                      </div>
                    </Col>

                    <Col className="col-12 col-sm-6">
                      <div
                        className="seller-info-card"
                        style={{
                          border: "1px solid rgba(233, 229, 4, 0.4)",
                          background: "rgba(0, 0, 0, 0.87)",
                          color: "rgba(194, 194, 194, 0.83)",
                          padding: "40px 25px",
                        }}
                      >
                        <h1
                          style={{
                            color: "#ffffff21",
                          }}
                        >
                          04
                        </h1>
                        <h4 className="text-light py-3">Earn & Scale</h4>
                        <p>
                          Track orders, manage inventory, and watch revenue
                          grow. Built in analytics show you exactly what's
                          working and where your buyers are coming from.
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <button
                    style={{
                      border: "none",
                      background: "rgb(255, 238, 0)",
                      width: "100%",
                      marginTop: "50px",
                      padding: "12px 0",
                    }}
                  >
                    OPEN YOUR STORE FREE
                  </button>
                </div>
              )}

              {heroShopBtn && (
                <div className="text-center">
                  <div>
                    <p
                      className="mb-4"
                      style={{
                        color: "rgb(255, 238, 0)",
                        letterSpacing: "2.5px",
                      }}
                    >
                      FOR BUYERS
                    </p>
                    <h1>
                      Shop stores from {""}
                      <span
                        style={{
                          color: "rgb(255, 238, 0)",
                        }}
                      >
                        anywhere
                      </span>
                      {""} in the world
                    </h1>
                    <p
                      className="my-4"
                      style={{
                        color: "rgba(194, 194, 194, 0.83)",
                        letterSpacing: 1.2,
                      }}
                    >
                      R.O.A isn't just for sellers. If you're a buyer, you get
                      access to thousands of unique stores across fashion,
                      beauty, foods, crafts and more -- all in one place,you
                      just a tap away.
                    </p>
                  </div>

                  <Row className="text-start g-4">
                    <Col className="col-12 col-sm-6 col-auto">
                      <div
                        className="py-4 px-3 buyer-info-card"
                        style={{
                          border: "1px solid rgba(233, 229, 4, 0.4)",
                          background: "rgba(0, 0, 0, 0.87)",
                          color: "rgba(194, 194, 194, 0.83)",
                        }}
                      >
                        <Row className="align-items-start">
                          <Col className="col-auto">
                            <div
                              className="p-1 d-flex justify-content-center"
                              style={{
                                border: "2px solid rgb(255, 238, 0)",
                              }}
                            >
                              <div
                                className="p-1"
                                style={{
                                  background: "rgb(255, 238, 0)",
                                  border: "1px solid rgba(233, 229, 4, 0.4)",
                                }}
                              ></div>
                            </div>
                          </Col>

                          <Col
                            style={{
                              color: "rgba(194, 194, 194, 0.83)",
                            }}
                          >
                            <h5 className="text-light">
                              Follow Your Favourite Stores
                            </h5>

                            <p>
                              Follow stores you love and get notified when they
                              drop new products, or have something special lined
                              up.
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Col>

                    <Col className="col-12 col-sm-6 col-auto">
                      <div
                        className="py-4 px-3 buyer-info-card"
                        style={{
                          border: "1px solid rgba(233, 229, 4, 0.4)",
                          background: "rgba(0, 0, 0, 0.87)",
                          color: "rgba(194, 194, 194, 0.83)",
                        }}
                      >
                        <Row>
                          <Col className="col-auto">
                            <div
                              className="p-1 d-flex align-items-center justify-content-center"
                              style={{
                                border: "2px solid rgb(255, 238, 0)",
                              }}
                            >
                              <div
                                className="p-1"
                                style={{
                                  background: "rgb(255, 238, 0)",
                                  border: "1px solid rgba(233, 229, 4, 0.4)",
                                }}
                              ></div>
                            </div>
                          </Col>

                          <Col
                            style={{
                              color: "rgba(194, 194, 194, 0.83)",
                            }}
                          >
                            <h5 className="text-light">
                              Shop Across States, Effortlessly
                            </h5>

                            <p>
                              Pay with trusted, secure checkout. Whether the
                              seller is in Kano or Delta, buying is always
                              smooth
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Col>

                    <Col className="col-12 col-sm-6 col-auto">
                      <div
                        className="py-4 px-3 buyer-info-card"
                        style={{
                          border: "1px solid rgba(233, 229, 4, 0.4)",
                          background: "rgba(0, 0, 0, 0.87)",
                          color: "rgba(194, 194, 194, 0.83)",
                        }}
                      >
                        <Row>
                          <Col className="col-auto">
                            <div
                              className="p-1 d-flex align-items-center justify-content-center"
                              style={{
                                border: "2px solid rgb(255, 238, 0)",
                              }}
                            >
                              <div
                                className="p-1"
                                style={{
                                  background: "rgb(255, 238, 0)",
                                  border: "1px solid rgba(233, 229, 4, 0.4)",
                                }}
                              ></div>
                            </div>
                          </Col>

                          <Col
                            style={{
                              color: "rgba(194, 194, 194, 0.83)",
                            }}
                          >
                            <h5 className="text-light">
                              Discover Curated Stores
                            </h5>

                            <p>
                              Browse categories or let R.O.A. suggest stores
                              based on your interest. Every visit surfaces
                              something worth buying
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Col>

                    <Col className="col-12 col-sm-6">
                      <div
                        className="px-3 py-4 buyer-info-card"
                        style={{
                          border: "1px solid rgba(233, 229, 4, 0.4)",
                          background: "rgba(0, 0, 0, 0.87)",
                          color: "rgba(194, 194, 194, 0.83)",
                        }}
                      >
                        <Row>
                          <Col className="col-auto">
                            <div
                              className="p-1 d-flex align-items-center justify-content-center"
                              style={{
                                border: "2px solid rgb(255, 238, 0)",
                              }}
                            >
                              <div
                                className="p-1"
                                style={{
                                  background: "rgb(255, 238, 0)",
                                  border: "1px solid rgba(233, 229, 4, 0.4)",
                                }}
                              ></div>
                            </div>
                          </Col>

                          <Col
                            style={{
                              color: "rgba(194, 194, 194, 0.83)",
                            }}
                          >
                            <h5 className="text-light">
                              Wishlist & Price Alerts
                            </h5>

                            <p>
                              Save what you love and get notified when price
                              drop. Shopping on your terms, on your own timeline
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>

                  <button
                    style={{
                      border: "none",
                      background: "rgb(255, 238, 0)",
                      width: "100%",
                      marginTop: "50px",
                      padding: "12px 0",
                    }}
                  >
                    START SHOPING
                  </button>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row
          className="my-5 mx-auto align-items-center"
          style={{
            border: "1px solid rgba(233, 229, 4, 0.4)",
            color: "rgba(194, 194, 194, 0.83)",
          }}
        >
          <Col>
            <div
              className="store-milestone"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                borderRight: "1px solid rgba(233, 229, 4, 0.4)",
                padding: "25px",
              }}
            >
              <div
                style={{
                  color: "rgb(255, 238, 0)",
                  fontSize: "clamp(44px, 6vw, 48px)",
                }}
              >
                12<span style={{ fontSize: "75px" }}>k</span>+
              </div>
              <div>
                ACTIVE <br />
                STORES
              </div>
            </div>
          </Col>

          <Col>
            <div
              className="order-milestone"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                borderRight: "1px solid rgba(233, 229, 4, 0.4)",
                padding: "25px",
              }}
            >
              <div
                style={{
                  color: "rgb(255, 238, 0)",
                  fontSize: "clamp(44px, 6vw, 48px)",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                }}
              >
                <div>725</div>
                <div
                  style={{
                    fontSize: "62px",
                    marginBottom: "5px",
                  }}
                >
                  k
                </div>
              </div>
              <div>
                ORDERS <br />
                FULFILLED
              </div>
            </div>
          </Col>

          <Col>
            <div
              className="satisfactory-milestone"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                padding: "25px",
              }}
            >
              <div
                style={{
                  color: "rgb(255, 238, 0)",
                  fontSize: "clamp(44px, 6vw, 48px)",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                }}
              >
                <div>9</div>
                <div
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  8%
                </div>
              </div>
              <div>
                ORDERS <br />
                FULFILLED
              </div>
            </div>
          </Col>
        </Row>

        <div
          style={{
            color: " rgba(194, 194, 194, 0.83)",
            marginTop: "100px",
          }}
        >
          <p
            style={{
              color: "rgb(255, 238, 0)",
              fontSize: "23px",
              letterSpacing: "2.5px",
            }}
          >
            OUR FEATURES
          </p>

          <h2 className="text-light">
            Everything a{" "}
            <span style={{ color: "rgb(255, 238, 0)" }}>serious seller </span>
            needs
          </h2>

          <Row>
            <Col className="col-12 col-lg-4">
              <div className="features-card">
                <Row className="align-items-start">
                  <Col className="col-auto">
                    <div className="mt-2">
                      {" "}
                      <FaStar
                        className="p-1"
                        style={{ border: "2px solid rgba(255, 238, 0, 0.62)" }}
                        color="yellow"
                        size={25}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <h4 className="text-light">Branded Storefront</h4>
                      <p>
                        Your store is a fully branded page with custom name,
                        profile, product gallery and bio. It's yours, not just a
                        listing on someone else's platform
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col className="col-12 col-lg-4">
              <div className="features-card">
                <Row className="align-items-start">
                  <Col className="col-auto">
                    <div className="mt-2">
                      {" "}
                      <FaStar
                        className="p-1"
                        style={{ border: "2px solid rgba(255, 238, 0, 0.62)" }}
                        color="yellow"
                        size={25}
                      />
                    </div>
                  </Col>
                  <Col>
                    <h4 className="text-light">Smart Discovery Engine</h4>
                    <p>
                      R.O.A surfaces your products to buyers who already wants
                      what you sell based on their browsing history and
                      interests.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col className="col-12 col-lg-4">
              <div className="features-card">
                <Row className="align-items-start">
                  <Col className="col-auto">
                    <div className="mt-2">
                      {" "}
                      <FaStar
                        className="p-1"
                        style={{ border: "2px solid rgba(255, 238, 0, 0.62)" }}
                        color="yellow"
                        size={25}
                      />
                    </div>
                  </Col>
                  <Col>
                    <h4 className="text-light">Real-time Analytics</h4>
                    <p>
                      know your best sellers, top markets, and peak hours. make
                      decisions backed by data, not guesswork.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div
        className="mt-5"
        style={{
          borderTopRightRadius: "170px",
          background: "#308f0465",
          padding: "20px",
        }}
      >
        <Container>
          <div className="py-4">
            <div
              className="d-inline-flex gap-2 align-items-center"
              style={{
                border: "1px solid rgb(255, 238, 0)",
                borderBottom: "none",
                padding: "5px 10px ",
              }}
            >
              <div
                style={{
                  background: "rgb(255, 238, 0)",
                  padding: "4px",
                  borderRadius: "50%",
                }}
              ></div>

              <div style={{ color: "rgb(255, 238, 0)" }}>
                {" "}
                <h6 className="m-0">COMING SOON</h6>
              </div>
            </div>

            <h1 className="text-light my-4" style={{ fontStyle: "italic" }}>
              The{" "}
              <span
                style={{
                  color: "rgb(255, 238, 0)",
                }}
              >
                Neighbourhood
              </span>{" "}
              is coming
            </h1>

            <p
              style={{
                color: "rgba(194, 194, 194, 0.93)",
                fontSize: "21px",
                lineHeight: 2,
              }}
            >
              R.O.A. is more than a marketplace. We're building a neighbourhood
              - a social layer where non sellers stay engaged, feel connected,
              and need not feel like a stranger on here. Everyone belongs here
              not just the sellers.
            </p>

            <div
              style={{ color: "rgba(194, 194, 194, 0.93)", marginTop: "45px" }}
            >
              <ul>
                <li>
                  <h5>A live community feed of store activity and new drops</h5>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Follow stores and sellers like you follow people</h5>
                </li>
              </ul>

              <ul>
                <li>
                  <h5>Community reviews, reactions, and recommendation</h5>
                </li>
              </ul>
            </div>

            <div
              className="my-5"
              style={{
                color: "rgba(194, 194, 194, 0.83)",
              }}
            >
              <div className=" d-flex flex-column">
                <div className="d-flex waitlist-form justify-content-center">
                  <input type="email" placeholder="Your email address" id="" />
                  <button className="px-4">JOIN WAITLIST</button>
                </div>

                <p className="mt-2 mx-auto">
                  Be the first to access the neighbourhood when it launches
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── FOOTER ── */}
      <Footer />
    </>
  );
}

export default HomePage;
