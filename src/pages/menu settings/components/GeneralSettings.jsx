import { Stack, Form } from "react-bootstrap";
import { FaChevronRight, FaLanguage } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";

export function General() {
  return (
    <>
      <h6
        className="py-4"
        style={{
          borderBottom: "1px solid  rgba(233, 229, 4, 0.4)",
          color: "#ffffff98",
        }}
      >
        GENERAL
      </h6>

      <Stack className="py-4" direction="horizontal" gap={4}>
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
          <FiMoon size={18} />
        </div>
        <div className="flex-column">
          <h6 className="text-light"> Dark mode</h6>
          <small>Always on</small>
        </div>
        <Form.Check className="ms-auto" type="switch" />
      </Stack>

      <Stack className="py-4" direction="horizontal" gap={4}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "#96f0053d",
            color: "#96f005a8",
            borderRadius: "10px",
          }}
        >
          {" "}
          <FaLanguage />
        </div>

        <h6 className="text-light">Language</h6>

        <div className="d-flex ms-auto align-items-center gap-2">
          EN <FaChevronRight />
        </div>
      </Stack>

      <Stack className="py-4" direction="horizontal" gap={4}>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            padding: "10px",
            background: "#f08a053d",
            color: "#f08a05",
            borderRadius: "10px",
          }}
        >
          <TbCurrencyNaira size={18} />
        </div>

        <h6 className="text-light">Currency</h6>

        <div className="d-flex ms-auto align-items-center gap-2">
          NGN <FaChevronRight />
        </div>
      </Stack>
    </>
  );
}
