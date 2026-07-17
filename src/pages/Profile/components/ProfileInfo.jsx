import { Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export const ProfileInfo = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="mt-5 mx-auto"
        style={{
          borderTop: "1px solid rgba(245, 229, 2, 0.25)",
          borderBottom: "1px solid rgba(245, 229, 2, 0.25)",
        }}
      >
        <Row
          g-5
          className="py-4 py-md-4 g-4 g-sm-5  justify-content-between mx-auto  "
          style={{
            fontSize: "clamp (17px, 2vw, 20px)",
            color: "#ffffff8e",
          }}
        >
          <Col className=" d-flex justify-content-between align-items-center ">
            <div className="d-flex align-items-center gap-2 ">
              <FaCalendarAlt color="blue" />
              Joined May, 2026{" "}
            </div>
            <div>
              <span
                style={{
                  border: "",
                  borderRight: "1px solid #c6c909f6",
                  padding: "6px 0",
                }}
              ></span>
            </div>
          </Col>

          <Col className="d-flex justify-content-between align-items-center ">
            <div>
              <div className="d-flex align-items-center gap-2">
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
            </div>
            <div>
              <span
                style={{
                  border: "",
                  borderRight: "1px solid #c6c909f6",
                  margin: "13px",
                  padding: "6px",
                }}
              ></span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
