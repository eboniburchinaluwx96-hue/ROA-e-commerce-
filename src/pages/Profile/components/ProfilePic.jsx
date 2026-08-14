import { Container, Image, Row, Col } from "react-bootstrap";
import { FaCheck, FaCameraRetro } from "react-icons/fa";

export const ProfilePic = () => {
  return (
    <div className="mt-4 ">
      <div
        className="hero-container cover-pic"
        style={{
          backgroundImage: `url(/images/profile.jpg)`,
          position: "relative",
        }}
      >
        <button className="px-3 py-1 cover-btn mt-3 me-3">
          <p>Edit cover</p>
        </button>
      </div>

      <div className="hero-content">
        <Row
          className="gx-sm-1 align-items-center"
          style={{
            marginTop: "clamp(-40px, 20vw, -135px)",
            marginLeft: "0px ",
            marginRight: "0px ",
            background:
              "linear-gradient(180deg, #05270a00  , #05270a , #05270afb, #05270a00)",
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
              g-5
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

          <Col className="col-7 col-sm-8 col-lg-9">
            <span
              className="text-white fw-bold mb-3"
              style={{
                // letterSpacing: 1.5,
                fontSize: "clamp(17px, 6vw, 65px)",
              }}
            >
              Adeolu Samuel
            </span>

            <div className="mt-3 mb-md-4">
              <div
                className="d-inline-flex align-items-center gap-3 px-2 py-1"
                style={{
                  border: "1px solid #31d8078a",
                  background: "#048b0f41",
                  color: "#37ff05ec",
                  alignItems: "center",
                  fontSize: "clamp(10px, 3vw, 25px)",
                }}
              >
                <div
                  style={{
                    background: "#37ff05ec",
                    borderRadius: "50%",
                    padding: "3px ",
                  }}
                ></div>

                <span
                  style={{
                    color: "#37ff05ec",
                  }}
                >
                  {" "}
                  BUYER & SELLER
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
