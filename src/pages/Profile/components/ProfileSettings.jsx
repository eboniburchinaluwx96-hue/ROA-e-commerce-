import { Stack, Form } from "react-bootstrap";
import { FaBell, FaChevronRight } from "react-icons/fa";
import { FiBell, FiLock } from "react-icons/fi";

export const Settings = () => {
  return (
    <div
      className="my-5 px-4"
      style={{
        background: "rgba(12, 12, 12, 0.23)",
        borderRadius: "18px",
        maxWidth: "500px",
      }}
    >
      <div
        className="py-4"
        style={{
          borderBottom: "1px solid  rgba(233, 229, 4, 0.4)",
          color: "#ffffff98",
        }}
      >
        SETTINGS
      </div>

      <Stack className="py-4" direction="horizontal" gap={3}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "#96f0055d",
            color: "#96f005",
            borderRadius: "10px",
          }}
        >
          {" "}
          <FiLock size={18} />
        </div>
        <h6 className="text-light"> Change password</h6>
        <FaChevronRight className="d-flex ms-auto" />
      </Stack>

      <Stack className="py-4" direction="horizontal" gap={3}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "rgba(233, 229, 4, 0.44)",
            color: "#f0ec05",
            borderRadius: "10px",
          }}
        >
          {" "}
          <FiBell size={18} />
        </div>
        <h6 className="text-light"> Push notifications</h6>
        <Form.Check className="ms-auto" type="switch" />
      </Stack>

      <Stack className="py-4" direction="horizontal" gap={3}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "#ec04cd40",
            color: "#ec04cdbe",
            borderRadius: "10px",
          }}
        >
          {" "}
          <FiLock size={18} />
        </div>
        <h6 className="text-light"> Two-factor auth</h6>
        <Form.Check className="ms-auto" type="switch" />
      </Stack>
    </div>
  );
};
