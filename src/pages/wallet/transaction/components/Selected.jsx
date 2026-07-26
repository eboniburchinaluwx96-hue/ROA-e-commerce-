import { Offcanvas } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeUp } from "../../../../animation";

export function Selected({
  setSelected,
  TX_CONFIG,
  show,
  isIncoming,
  isFailed,
  selected,
}) {
  const incoming = isIncoming[selected.type];
  const failed = isFailed[selected.type];
  const config = TX_CONFIG[selected.type];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <offCanvas
        show={show}
        onHide={() => setSelected(false)}
        placement="bottom"
        style={{ height: "80%", background: "#000000b3" }}
      >
        <offCanvas.Header>
          <p
            className="d-flex ms-auto text-white fs-5"
            onClick={() => setSelected(false)}
          >
            X
          </p>

          <offCanvas.Body>
            <div className="text-center">
              <div
                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: config.bg,
                }}
              >
                <config.Icon />
              </div>
              <p className="text-white fw-bold mb-3">{selected.title}</p>
              <h2
                className="mb-4 "
                style={{
                  fontFamily: "'Bebas+Neue',sans-serif",
                  fontWeight: 800,
                  color: incoming ? "#13a86f" : failed ? "#9e0f0f" : "#bd9b12",
                }}
              >
                {incoming ? "+" : failed ? "" : "-"} ₦
                {selected.amount.toLocaleString()}
              </h2>
              <p
                className="p-1"
                style={{
                  borderRadius: 10,
                  background:
                    selected.status === "COMPLETED"
                      ? "#1d9e751a"
                      : selected.status === "PENDING"
                        ? "#c9a84c1a"
                        : "#c0392b1a",
                  color:
                    selected.status === "COMPLETED"
                      ? "#13a86f"
                      : selected.status === "PENDING"
                        ? "#bd9b12"
                        : "#9e0f0f",
                }}
              >
                {selected.status === "COMPLETED"
                  ? "Completed"
                  : selected.status === "PENDING"
                    ? "Pending"
                    : "Failed"}
              </p>
            </div>

            <div className="px-2" style={{ background: "#1a2a1a" }}>
              {[
                { label: "Type", val: config.label },
                { label: "Description", val: selected.description },
                {
                  label: "Date & time",
                  val: new Date(selected.createdAt).toLocaleString("en-NG"),
                },
                { label: "Reference", val: selected.reference, gold: true },
                { label: "Status", val: selected.status },
              ].map((row) => (
                <div
                  className="d-flex justify-content-between"
                  key={row.label}
                  style={{
                    borderBottom: "0.5px solid #515227",
                  }}
                >
                  <p>{row.label}</p>
                  <h6
                    style={{
                      color: row.gold ? "#facc15" : "#fff",
                      textAlign: "right",
                      maxWidth: "60%",
                    }}
                  >
                    {row.val}
                  </h6>
                </div>
              ))}
            </div>
          </offCanvas.Body>
        </offCanvas.Header>
      </offCanvas>
    </motion.div>
  );
}
