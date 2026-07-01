import { useState } from "react";
import { Stack, Form } from "react-bootstrap";

export const ProfileEdit = ({ field, value, i }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(value);

  return (
    <div>
      {open ? (
        <Stack
          className="py-2"
          direction="horizontal"
          gap={4}
          style={{
            color: "#ffffff83",
            borderBottom: "1px solid  rgba(233, 229, 4, 0.4)",
          }}
        >
          <Stack>
            <Form.Control
              className="my-2"
              type={field.type}
              value={input}
              placeholder={`Enter ${field.label.toLocaleLowerCase()}`}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              onClick={() => setOpen(false)}
              className="p-2 my-1 d-inline-flex me-auto"
              style={{
                background: "none",
                color: "#fffb05 ",
                fontSize: "14px",
                letterSpacing: 1.4,
              }}
            >
              Save
            </button>
          </Stack>

          <button
            onClick={() => setOpen(false)}
            className="p-2"
            style={{
              background: "none",
              color: "#fffb05 ",
              fontSize: "10px",
              letterSpacing: 1.4,
              border: "1px solid #fffb059d",
            }}
          >
            X{" "}
          </button>
        </Stack>
      ) : (
        <Stack
          className={`py-3 ${i === 3 ? "border-0" : ""}`}
          direction="horizontal"
          gap={4}
          style={{
            color: "#ffffff83",
            borderBottom: "1px solid  rgba(233, 229, 4, 0.4)",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center "
            style={{
              // background: `${field.bg}`,
              color: `${field.color}`,
              fontSize: "17px",
              borderRadius: "10px",
            }}
          >
            <field.Icon />
          </div>
          <Stack>
            <p>{field.label}</p>
            <h6 className="text-light">{value}</h6>
          </Stack>
          <button
            onClick={() => setOpen((p) => !p)}
            className="p-2"
            style={{
              background: "none",
              color: "#fffb05 ",
              fontSize: "10px",
              letterSpacing: 1.4,
              border: "1px solid #fffb059d",
            }}
          >
            Edit
          </button>
        </Stack>
      )}
    </div>
  );
};
