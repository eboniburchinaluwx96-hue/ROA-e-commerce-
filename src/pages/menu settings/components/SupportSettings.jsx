import { Stack } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import { FiFile, FiHelpCircle } from "react-icons/fi";

export function Support() {
  return (
    <>
      <h6
        className="py-4"
        style={{
          borderBottom: "1px solid  rgba(233, 229, 4, 0.4)",
          color: "#ffffff98",
        }}
      >
        SUPPORT
      </h6>

      <Stack className="py-4" direction="horizontal" gap={4}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "#04e95023",
            color: "#04e950",
            borderRadius: "10px",
          }}
        >
          {" "}
          <FiHelpCircle size={18} />
        </div>
        <div className="flex-column">
          <h6 className="text-light">Help & Support</h6>
        </div>

        <FaChevronRight className="d-flex ms-auto" />
      </Stack>

      <Stack className="py-4" direction="horizontal" gap={4}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "#e0e6e215",
            color: "#e5ece898",
            borderRadius: "10px",
          }}
        >
          {" "}
          <FiFile size={18} />
        </div>
        <div className="flex-column">
          <h6 className="text-light">Terms & Privacy Policy</h6>
        </div>

        <FaChevronRight className="d-flex ms-auto" />
      </Stack>
    </>
  );
}
