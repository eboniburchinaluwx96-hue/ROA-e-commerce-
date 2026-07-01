import { Stack, Form } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import { FiEye, FiMapPin } from "react-icons/fi";

export default function Privacy() {
  return (
    <>
      <h6
        className="py-4"
        style={{
          borderBottom: "1px solid  rgba(233, 229, 4, 0.4)",
          color: "#ffffff98",
        }}
      >
        PRIVACY
      </h6>

      <Stack className="py-4" direction="horizontal" gap={4}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "#0460e921",
            color: "#0460e9fa",
            borderRadius: "10px",
          }}
        >
          {" "}
          <FiEye size={18} />
        </div>
        <div className="flex-column">
          <h6 className="text-light">Profile visibility</h6>
          <small>public</small>
        </div>

        <FaChevronRight className="d-flex ms-auto" />
      </Stack>

      <Stack className="py-4" direction="horizontal" gap={4}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "#96f00528",
            color: "#96f005f1",
            borderRadius: "10px",
          }}
        >
          {" "}
          <FiMapPin />
        </div>

        <h6 className="text-light">Location access</h6>

        <Form.Check className="ms-auto" type="switch" />
      </Stack>
    </>
  );
}
