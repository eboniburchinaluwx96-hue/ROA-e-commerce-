import { Container, Stack, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

export default function NavTop({ title }) {
  const navigate = useNavigate();

  return (
    <Nav fixed="top">
      <Stack className="mb-5 " direction="horizontal" gap={4}>
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

        <h3 className="text-light">
          <b>{title}</b>
        </h3>
      </Stack>
    </Nav>
  );
}
