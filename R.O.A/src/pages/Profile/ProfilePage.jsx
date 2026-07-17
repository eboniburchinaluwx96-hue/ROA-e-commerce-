import { Container, Image, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from " swiper/modules";
import MainHeader from "../../components/MainHeader";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function ProfilePage() {
  return (
    <>
      <div className="profile-container">
        <MainHeader />

        <Container>
          <div
            className="mb-5"
            style={{ fontWeight: 800, fontSize: "30px", marginTop: "120px" }}
          >
            <p> My Profile </p>
          </div>

          <div style={{ position: "relative" }}>
            <div className="cover-banner"></div>
            <Image className="cover-pic" src="/images/profile.jpg" />

            <button className="cover-btn">EDIT COVER</button>

            <Row g-5 className=" align-items-center g-2 g-sm-4 g-md-4">
              <Col
                className="col-5 col-sm-4 col-md-4 col-lg-3"
                style={{
                  position: "absolute",
                  top: "clamp(10px, 20vw, 170px)",
                }}
              >
                <Image
                  className=" img-fluid"
                  roundedCircle
                  src="/images/profile.jpg"
                />
              </Col>

              <Col
                className="col-7 col-sm-8 col-md-8 mt-4 mt-sm-3 mt-md-3 col-lg-9"
                style={{
                  position: "absolute",
                  top: "clamp(22px, 8px + 25vw, 250px)",
                  right: "0",
                }}
              >
                <Row g-5>
                  <Col>
                    <Row
                      g-5
                      className="align-items-center  mb-1 mb-sm-2 mt-sm-1 mt-md-4 g-sm-3"
                    >
                      <Col className="col-6 col-sm-auto">
                        <p
                          style={{
                            fontSize: "clamp(15px, 3.5vw, 40px)",
                            lineHeight: 1.1,
                          }}
                        >
                          Adeolu Samuel
                        </p>
                      </Col>
                      <Col className="col-auto ">
                        <div className="verified-badge mt-3 mt-sm-0"></div>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    className="col-12 mb-1 mb-sm-2 mb-md-3"
                    style={{
                      fontSize: "clamp(11px, 2.2vw, 15px)",
                      color: "rgba(255, 255, 255, 0.65)",
                    }}
                  >
                    @Samklefboy12
                  </Col>
                  <Col className="col-auto mt-1">
                    <div
                      className="d-flex align-items-center gap-2 "
                      style={{
                        border: "1px solid #31d8078a",
                        background: "#048b0f41",
                        color: "#37ff05ec",
                        alignItems: "center",
                        padding: "8px",
                      }}
                    >
                      <div
                        style={{
                          background: "#37ff05ec",
                          borderRadius: "50%",
                          padding: "5px ",
                        }}
                      ></div>
                      <div style={{ fontSize: "12px" }}>BUYER & SELLER</div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <div
            style={{
              marginTop: "clamp(15px, 33vw, 350px)",
            }}
          >
            <Row g-5 className="g-3">
              <Col className="col-auto">
                <button
                  className="btn btn-outline"
                  style={{
                    border: "1px solid #fffb1493",
                    color: "#fff",
                  }}
                >
                  EDIT PROFILE
                </button>
              </Col>
              <Col className="col-auto">
                <button
                  className="btn btn-outline"
                  style={{
                    background: "#fffb14be",
                    color: "#000",
                  }}
                >
                  VIEW MY STORE
                </button>
              </Col>
            </Row>
          </div>

          <div
            className="mt-5"
            style={{
              borderTop: "1px solid rgba(245, 229, 2, 0.25)",
              borderBottom: "1px solid rgba(245, 229, 2, 0.25)",
            }}
          >
            <Row
              g-5
              className="py-4 py-md-5 p-sm- g-4 g-sm-5"
              style={{
                fontSize: "16px",
                color: "#ffffff70",
              }}
            >
              <Col className="col-auto">
                <FaMapMarkerAlt color="red" /> Lagos, Nigeria{" "}
                <span
                  style={{
                    border: "",
                    borderRight: "1px solid #c6c909f6",
                    margin: "13px",
                    padding: "6px",
                  }}
                ></span>
              </Col>

              <Col className="col-auto">
                <FaCalendarAlt color="blue" /> Joined May, 2026
                <span
                  style={{
                    border: "",
                    borderRight: "1px solid #c6c909f6",
                    margin: "13px",
                    padding: "6px",
                  }}
                ></span>
              </Col>

              <Col className="col-auto">
                <div className="d-inline-flex align-items-center gap-2">
                  <div>
                    <span className="text-light">28</span> Following
                  </div>
                  <div
                    style={{
                      marginBottom: "12px",
                      color: "#fff",
                      fontSize: "25px",
                    }}
                  >
                    .
                  </div>
                  <div>
                    <span className="text-light">1.2K</span> Followers
                  </div>
                </div>
                <span
                  style={{
                    border: "",
                    borderRight: "1px solid #c6c909f6",
                    margin: "13px",
                    padding: "6px",
                  }}
                ></span>
              </Col>
            </Row>
          </div>

          <div></div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;
