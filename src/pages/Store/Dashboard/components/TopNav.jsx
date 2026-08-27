import { Container, Image } from "react-bootstrap";
import { FiArrowLeft, FiBell, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ArrowUpShort, SortAlphaDown } from "react-bootstrap-icons";

export function TopNav({ title, setSortOpen }) {
  const navigate = useNavigate();
  return (
    <>
      {" "}
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

            <div className="ms-auto gap-4 gap-sm-5 d-flex  align-items-center ">
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
      {title && (
        <>
          <div
            className="d-flex align-items-center gap-3 gap-sm-4  p-3 p-sm-4   mt-2 mt-sm-4 mt-lg-5 "
            style={{
              position: "sticky",
              top: "clamp(55px,   5px + 7.5vw, 95px )",
              zIndex: 1030,
              background: "#000e05",
            }}
          >
            <h2 className="text-white">{title}</h2>
            <div className="ms-auto">
              {" "}
              <button
                className="d-flex align-items-center gap-3 px-2  "
                type="button"
                onClick={() => setSortOpen(true)}
                style={{
                  background: "rgba(210, 224, 22, 0.157)",
                  borderRadius: 8,
                  border: "none",
                  color: "rgb(216, 231, 6)",
                }}
              >
                <SortAlphaDown size={20} />
                <h6 style={{ color: "rgb(216, 231, 6)" }}>Sort</h6>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
