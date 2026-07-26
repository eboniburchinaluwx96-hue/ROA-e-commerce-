import { Container, Stack, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

export default function NavTop({ title }) {
  const navigate = useNavigate();

  return (
    <div
      className="  fixed-top"
      style={{
        background: "#00000077",
        borderRadius: 12,
        marginBottom: "100px",
        backdropFilter: " blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <Container>
        <div className="d-flex align-items-center gap-5 p-4 py-4">
          <div
            onClick={() => navigate(-1)}
            className="d-flex align-items-center "
            style={{
              background: "#ffffff42",

              borderRadius: "100%",
              padding: "10px",
            }}
          >
            <FaArrowLeft size={15} />
          </div>

          <h4 className="text-light">
            <b>{title}</b>
          </h4>
        </div>
      </Container>
    </div>
  );
}
