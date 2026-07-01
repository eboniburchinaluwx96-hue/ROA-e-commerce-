import { Container, Image, Row, Col } from "react-bootstrap";
import { FaCheck, FaCameraRetro } from "react-icons/fa";

export const ProfilePic = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="cover-banner"></div>
      <Image className="cover-pic" src="/images/profile.jpg" />

      <button className="cover-btn">EDIT COVER</button>

      <Row
        className=" align-items-center gx-sm-1"
        style={{
          position: "relative",
          marginTop: "clamp(-60px, 20vw, -135px)",
          marginLeft: "0px ",
          marginRight: "0px ",
          background:
            "radial-gradient(circle,rgba(54, 54, 3, 0)20%, rgba(5, 54, 31, 0))",
          borderRadius: "45px 0",
          backdropFilter: "blur(40px)",
        }}
      >
        <Col
          className="col-5 col-sm-4 col-lg-3 p-0 m-0"
          style={{ position: "relative" }}
        >
          <div className="profile-pic-wrapper ">
            <Image className="profile-pic" src="/images/profile.jpg" />
          </div>

          <Row
            className="align-items-center gx-1 gx-md-0"
            style={{
              position: "relative",
              marginTop: -40,
              right: "clamp(30px, 4vw, 50px)",
            }}
          >
            <Col className="col-auto ms-auto d-flex align-items-center justify-content-center profile-pic-edit ">
              <FaCameraRetro size={20} />
            </Col>
          </Row>
        </Col>

        <Col className="col-7 col-sm-8 col-lg-9 py-md-5 py-sm-3 py-1">
          <div className=" d-flex flex-column">
            <Row className="align-items-center">
              <Col className="col-8 mb-2">
                {" "}
                <p
                  style={{
                    fontSize: "clamp(30px, 4.0vw, 60px)",
                    lineHeight: 1,
                    letterSpacing: 1,
                  }}
                >
                  Adeolu Samuel
                </p>
              </Col>
              <Col className="col-1 d-flex align-items-center">
                <div className="verified-badge bg-primary">
                  <FaCheck color="yellow" />
                </div>
              </Col>
            </Row>

            <p
              style={{
                fontSize: "clamp(13px, 2.5vw, 16px)",
                color: "rgba(255, 255, 255, 0.65)",
                marginBottom: "12px",
              }}
            >
              @Samklefboy12
            </p>

            <div className="d-block">
              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-1 "
                style={{
                  border: "1px solid #31d8078a",
                  background: "#048b0f41",
                  color: "#37ff05ec",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "#37ff05ec",
                    borderRadius: "50%",
                    padding: "3px ",
                  }}
                ></div>
                <div style={{ fontSize: "clamp(15px, 1.5vw, 22px)" }}>
                  BUYER & SELLER
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
