import { Stack, Form } from "react-bootstrap";
import { FiBell, FiMail, FiTag } from "react-icons/fi";

export default function Notifications() {
  return (
    <>
      <h6
        className="py-4"
        style={{
          borderBottom: "1px solid  rgba(233, 229, 4, 0.4)",
          color: "#ffffff98",
        }}
      >
        NOTIFICATIONS
      </h6>

      <Stack className="py-4" direction="horizontal" gap={4}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "#e9043d2e",
            color: "#e9043d",
            borderRadius: "10px",
          }}
        >
          {" "}
          <FiBell size={18} />
        </div>

        <div className="flex-column">
          <h6 className="text-light"> Push notifications</h6>
        </div>

        <Form.Check className="ms-auto" type="switch" />
      </Stack>

      <Stack className="py-4" direction="horizontal" gap={4}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "#e9e9e725",
            color: "#e9e9e7ee",
            borderRadius: "10px",
          }}
        >
          {" "}
          <FiMail size={18} />
        </div>

        <h6 className="text-light">Email notifications</h6>

        <Form.Check className="ms-auto" type="switch" />
      </Stack>

      <Stack className="py-4" direction="horizontal" gap={4}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "rgba(233, 229, 4, 0.18)",
            color: "#f0ec05",
            borderRadius: "10px",
          }}
        >
          {" "}
          <FiTag size={18} />
        </div>
        <div className="flex-column">
          <h6 className="text-light">Promo alerts</h6>
        </div>

        <Form.Check className="ms-auto" type="switch" />
      </Stack>
    </>
  );
}
