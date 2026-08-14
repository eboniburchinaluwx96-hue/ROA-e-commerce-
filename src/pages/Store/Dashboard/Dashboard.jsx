import {
  Container,
  Stack,
  Row,
  Col,
  Card,
  CardBody,
  FormControl,
  Alert,
  Image,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavTop from "../../../components/PageNav";
import { Link } from "react-router-dom";
import {
  FiAlertTriangle,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
  FiBarChart,
  FiBell,
  FiHome,
  FiMenu,
  FiMessageCircle,
  FiPackage,
  FiPlus,
  FiSearch,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import {
  FaArrowLeft,
  FaCheck,
  FaMoneyBill,
  FaShoppingBasket,
  FaStore,
} from "react-icons/fa";
import { useState } from "react";
import ProductPage from "../../../components/product/ProductPage";
import products from "../../../js/products";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Overview");

  return (
    <>
      {/*   <NavTop title="Dashbaord" /> */}
      <div
        className=" py-2 py-lg-3 fixed-top"
        style={{
          background: "#058f333a",
          backdropFilter: "blur(30px)",
          borderBottom: "1px solid #a5c70e65",
        }}
      >
        <Container>
          <div className="d-flex align-items-center gap-3 gap-sm-4 nav_bar py-1">
            <h3
              style={{
                lineHeight: 1.5,
                color: "#ffee02",
                fontStyle: "oblique",
              }}
            >
              Annointed Chips
            </h3>

            <Image
              roundedCircle
              style={{
                objectFit: "cover",
                width: "clamp(20px, 5vw, 55px)",
                aspectRatio: "1/1",
              }}
              src="public/images/profile.jpg"
            />

            <div className="ms-auto gap-2 gap-sm-5 d-flex  align-items-center ">
              <FiArrowLeft
                style={{
                  fontSize: "clamp(30px, 4vw, 35px)",
                  cursor: "pointer",
                }}
                color="white"
                onClick={() => navigate(-1)}
              />

              <FiBell
                style={{
                  fontSize: "clamp(22px, 3vw, 30px)",
                  color: "#ffee02",
                  cursor: "pointer",
                }}
              />
              <FiSettings
                style={{
                  fontSize: "clamp(22px, 3vw, 30px)",
                  color: "#ffee02",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </Container>
      </div>

      <section className="dashboard mt-5">
        {" "}
        <div>
          <div className="fixed-bottom d-xxl-none side_bar">
            <Container>
              <div
                className=" py-3 px-3 "
                style={{ borderTop: "1px solid #a5c70e69" }}
              >
                <div className="d-flex  align-items-center  justify-content-between">
                  {[
                    { Icon: FiHome, a: "Overview" },
                    { Icon: FiPackage, a: "Products" },
                    { Icon: FaShoppingBasket, a: "Orders" },
                    { Icon: FaMoneyBill, a: "Earnings" },
                    { Icon: FaStore, a: "Store" },
                  ].map((s, i) => {
                    return (
                      <div
                        onClick={() => setSelectedTab(s.a)}
                        className="d-flex flex-column align-items-center gap-2"
                        key={i}
                      >
                        <s.Icon
                          className="icon"
                          style={{
                            color: selectedTab === s.a ? "#fbff01" : "#fff",
                            fontSize: "clamp(22px, 3vw, 30px)",
                          }}
                        />
                        <span
                          style={{
                            color: selectedTab === s.a ? "#fff" : "",
                            fontSize: "10px",
                          }}
                        >
                          {s.a}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Container>
          </div>

          <div style={{ position: "fixed" }}>
            <div className="d-none d-xxl-flex">
              <div
                className="side_bar py-5 px-3 d-flex flex-column justify-content-between"
                style={{
                  height: "100vh",
                  borderRight: "1px solid   #a5c70e69 ",
                }}
              >
                {[
                  { Icon: FiHome, a: "Overview" },
                  { Icon: FiPackage, a: "Products" },
                  { Icon: FaShoppingBasket, a: "Orders" },
                  { Icon: FaMoneyBill, a: "Earnings" },
                  { Icon: FiBarChart, a: "Analytics" },
                  { Icon: FaStore, a: "Store" },
                ].map((s, i) => {
                  return (
                    <div
                      onClick={() => setSelectedTab(s.a)}
                      className="d-flex flex-column align-items-center my-2"
                      key={i}
                    >
                      <s.Icon
                        className="icon mb-1"
                        size={30}
                        style={{
                          color: selectedTab === s.a ? "#fbff01" : "#fff",
                        }}
                      />
                      <p
                        style={{
                          color: selectedTab === s.a ? "#fff" : "",
                        }}
                      >
                        {s.a}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* dashbaord body */}
        <Container>
          <div className="dashboard_body " style={{ paddingBottom: "200px" }}>
            {/* Overview session */}

            {selectedTab === "Overview" && (
              <>
                <Alert
                  className={` my-5 justify-content-between p-3 pt-0 pb-3 gap-3 gap-sm-4 ${alert ? "d-flex" : "d-none"}`}
                >
                  <div>
                    <h5
                      className="d-flex  align-items-center gap-2"
                      style={{ color: "#f89500" }}
                    >
                      <FiAlertTriangle />
                      Complete your registration to get verified{" "}
                    </h5>

                    <button
                      onClick={() => setAlert(false)}
                      className="px-3 py-1 mt-3 "
                      style={{ background: "#f89500", border: "none" }}
                    >
                      Get Verified <FiArrowRight />
                    </button>
                  </div>

                  <span
                    onClick={() => setAlert(!true)}
                    className="fs-4"
                    style={{ color: "#f89500" }}
                  >
                    x
                  </span>
                </Alert>

                <div className="my-5">
                  <h2 className="">Good morning Samuel</h2>

                  <span
                    className="d-inline-flex align-items-center gap-2 px-3 my-4 "
                    style={{
                      border: "0.5px solid #07f3ac",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      className="p-1"
                      style={{ background: "#07f3ac", borderRadius: "50%" }}
                    />
                    <h5 style={{ color: "#07f3ac" }}>Store is open</h5>
                  </span>
                </div>
                {/* earning card */}
                <div className="earning_card mt-5  p-4">
                  <h2>Total earning this month</h2>

                  <h3
                    className="text-white my-3 my-sm-4 my-md-5 fw-bold"
                    style={{ letterSpacing: 1.3 }}
                  >
                    &#8358; 284,500 .00
                  </h3>

                  <span className="d-flex align-items-center gap-1 mb-4 mb-sm-5">
                    <FiArrowUp />
                    <p>+24%</p> <p className="ms-3">from last month</p>
                  </span>

                  <button className="px-3 py-2 cta">
                    withdraw earning <FiArrowRight />
                  </button>
                </div>

                {/* stats card */}
                <div className="my-5">
                  <Row
                    className="g-0"
                    style={{
                      border: "1px solid #d0ff00f1",
                      borderBottom: "none",
                      borderRight: "none",
                      borderTop: "none",
                    }}
                  >
                    {[
                      { a: "Today's sales", b: "45,000" },
                      { a: "Orders", b: "47" },
                      { a: "Products", b: "47" },
                      { a: "Followers", b: "1,200" },
                      { a: "Low stock", b: "2" },
                      { a: "Pending orders", b: "8" },
                    ].map((s) => {
                      return (
                        <Col className="col-auto">
                          <div
                            className="px-4 py-3 d-flex justify-content-center align-items-center"
                            style={{
                              border: "0.5px solid #d0ff00f1",
                              borderLeft: "none",
                              background: "#d0ff0023",
                            }}
                          >
                            <div className="text-center">
                              <h5
                                style={{ lineHeight: 1.2 }}
                                className="text-white mb-2"
                              >
                                {s.a}
                              </h5>
                              <h3 style={{ color: "#e6ff02" }}>{s.b}</h3>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>

                {/* Revenue chart */}
                <div className="mb-5"></div>

                {/* Top selling product */}
                <h3 className="text-white mb-3">Top selling Products</h3>

                <div
                  className="mb-5 d-flex gap-3 gap-md-4 pb-5"
                  style={{ flexWrap: "wrap" }}
                >
                  <div className="top_products pb-3">
                    <div>
                      <img
                        src="images/profile.jpg"
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          aspectRatio: "1/1",
                        }}
                      />
                      <div className="px-2">
                        <h6
                          className="text-white"
                          style={{
                            fontStyle: "italic",
                          }}
                        >
                          Black and Gray Athletic Cotton Socks{" "}
                        </h6>
                        <span className="d-flex  align-items-center gap-3 py-1">
                          {" "}
                          <p style={{ lineHeight: 1 }}>unit sold:</p> <p>256</p>
                        </span>
                        <p className=" fw-bold"> &#8358; 24,500.00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* recent order */}

                <div className="mb-5">
                  <h3 className="text-white mb-3">Recent Orders</h3>

                  <div className="d-flex flex-wrap gap-5 mb-5 ">
                    <div
                      className="text-center p-3"
                      style={{
                        boxShadow: "0 0  5px #e1f71b",
                      }}
                    >
                      <h6 className="text-white"># ROA-102</h6>
                      <h6 className="text-white">James</h6>
                      <h6 className="text-white"> &#8358; 8,000</h6>
                      <div className="d-flex gap-1 align-items-center justify-content-center">
                        <FaCheck size={12} style={{ color: "#56d61b" }} />
                        <h6 className="text-white">paid</h6>
                      </div>
                    </div>
                  </div>

                  <button className=" px-3 py-2 btn_button">
                    View all orders <FiArrowRight />
                  </button>
                </div>

                {/* store performance */}
                <h3 className="text-white mb-3 ">Store Performance</h3>

                <div
                  className="px-3 mb-4"
                  style={{
                    border: "0.5px solid #a5c70e69",
                    background: "#00000060",
                  }}
                >
                  {[
                    { a: "Offer Rates", b: "124%" },
                    { a: "listing Views", b: "1,352" },
                    { a: "Response Time", b: "< 1hr" },
                    { a: "Completed sales", b: "31" },
                  ].map((sp, i) => {
                    return (
                      <div
                        key={i}
                        className="d-flex justify-content-between align-items-center py-1 py-sm-2 py-md-3"
                        style={{
                          borderBottom:
                            i === 3 ? "none" : "0.5px solid #a5c70e69",
                        }}
                      >
                        <p>{sp.a}</p>
                        <p>{sp.b}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* product tab session */}

            {selectedTab === "Products" && (
              <div>
                <div
                  className="mb-5 mt-4 mt-sm-5 pt-md-5 pt-3 "
                  style={{
                    top: 55,
                    display: "flex",
                  }}
                >
                  <div className="ms-auto ">
                    <Link to="/add_product">
                      <button className="px-2 px-sm-3 py-1 py-sm-2 d-flex align-items-center gap-1 btn_button">
                        <FiPlus /> Add new product
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="my-5">
                  <div
                    className="d-flex align-items-center gap-3 px-4 py-3"
                    style={{ background: "#000" }}
                  >
                    <FiSearch />
                    <FormControl
                      className="py-1"
                      type="text"
                      placeholder="search products..."
                    />
                  </div>
                </div>

                <div>
                  <ProductPage
                    Shop={false}
                    product={products}
                    showWishlist={false}
                  />
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
