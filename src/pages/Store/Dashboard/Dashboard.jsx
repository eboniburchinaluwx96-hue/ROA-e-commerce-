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
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
  FiBarChart,
  FiBell,
  FiHome,
  FiMenu,
  FiMessageCircle,
  FiPackage,
  FiSearch,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import {
  FaArrowLeft,
  FaMoneyBill,
  FaShoppingBasket,
  FaStore,
} from "react-icons/fa";
import { useState } from "react";

export const Dashboard = () => {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState("Overview");

  return (
    <>
      {/*   <NavTop title="Dashbaord" /> */}
      <div className="nav_bar py-2 fixed-top ">
        <Container>
          <div className="d-flex align-items-center gap-3 gap-sm-4 ">
            <h3 style={{ lineHeight: 1.5 }}>Annointed Chips</h3>

            <Image
              roundedCircle
              style={{
                objectFit: "cover",
                width: "clamp(35px, 10vw, 55px)",
                aspectRatio: "1/1",
              }}
              src="public/images/profile.jpg"
            />

            <div className="ms-auto gap-2 gap-sm-4 d-flex gap-md-5 align-items-center ">
              <FiArrowLeft
                style={{ fontSize: "clamp(30px, 4vw, 35px)" }}
                color="white"
                onClick={() => navigate(-1)}
              />

              <FiBell
                style={{ fontSize: "clamp(22px, 3vw, 30px)", color: "#ffee02" }}
              />
              <FiSettings
                style={{ fontSize: "clamp(22px, 3vw, 30px)", color: "#ffee02" }}
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
                          size={18}
                          style={{
                            color: selectedTab === s.a ? "#fbff01" : "#fff",
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
                className="side_bar py-5 px-3 "
                style={{
                  height: "100vh",
                  borderRight: "1px solid   #a5c70e69 ",
                }}
              >
                <div className="d-flex     flex-column  gap-5">
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
                          className="icon"
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
        </div>
        <Container>
          <div className="dashboard_body">
            {/* Overview session */}

            {selectedTab === "Overview" && (
              <>
                <Alert className="d-flex align-items-start gap-lg-5 gap-2 my-5">
                  <div>
                    <h6 style={{ color: "#c71818" }}>
                      Complete your registration to get verified, allowing you
                      to enjoy the full store fatures{" "}
                    </h6>

                    <button className="px-3 py-2 my-4">Get Verified</button>
                  </div>

                  <span
                    onClick={close}
                    className="fs-4"
                    style={{ color: "#c71818" }}
                  >
                    X
                  </span>
                </Alert>

                <div>
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
                <div className="earning_card my-5 p-4 ">
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
                <div className="">
                  <Row
                    className="g-0"
                    style={{
                      border: "1px solid #a5c70e65",
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
                        <Col className="">
                          <div
                            className="px-4 d-flex justify-content-center align-items-center"
                            style={{
                              border: "0.5px solid #a5c70e69",
                              borderLeft: "none",
                              height: "120px",
                              background: "#4241065b",
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
                <div></div>

                {/* Top selling product */}
                <h3 className="text-white mt-5 mb-4">Top selling Products</h3>

                <div
                  className="mb-5 d-flex gap-3 gap-md-4 "
                  style={{ flexWrap: "wrap" }}
                >
                  <div
                    className="card"
                    style={{
                      width: "clamp(110px, 10vw, 150px)",
                    }}
                  >
                    <img
                      src="images/profile.jpg"
                      alt=""
                      style={{ objectFit: "cover", aspectRatio: "1/1" }}
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
                      <span className="d-flex gap-1 align-items-center ">
                        {" "}
                        <p>unit sold:</p> <p>256</p>
                      </span>
                      <p className=" fw-bold"> &#8358; 24,500 .00</p>
                    </div>
                  </div>
                  <div
                    className=" card"
                    style={{
                      //  overflow: "hidden",
                      width: "clamp(110px, 10vw, 150px)",
                    }}
                  >
                    <img
                      src="images/profile.jpg"
                      alt=""
                      style={{ objectFit: "cover", aspectRatio: "1/1" }}
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
                      <span className="d-flex gap-1 align-items-center ">
                        {" "}
                        <p>unit sold:</p> <p>256</p>
                      </span>
                      <p className=" fw-bold"> &#8358; 24,500 .00</p>
                    </div>
                  </div>
                  <div
                    className=" card"
                    style={{
                      //  overflow: "hidden",
                      width: "clamp(110px, 10vw, 150px)",
                    }}
                  >
                    <img
                      src="images/profile.jpg"
                      alt=""
                      style={{ objectFit: "cover", aspectRatio: "1/1" }}
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
                      <span className="d-flex gap-1 align-items-center ">
                        {" "}
                        <p>unit sold:</p> <p>256</p>
                      </span>
                      <p className=" fw-bold"> &#8358; 24,500 .00</p>
                    </div>
                  </div>
                  <div
                    className="card d-flex justify-content-center align-items-center"
                    style={{
                      //  overflow: "hidden",
                      width: "clamp(110px, 10vw, 150px)",
                    }}
                  >
                    <h5>More ...</h5>
                  </div>
                </div>

                <h3 className="text-white mb-4 ">Store Performance</h3>

                <div
                  className="px-3"
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
