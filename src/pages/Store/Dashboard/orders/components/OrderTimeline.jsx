import { ArrowReturnLeft, CheckCircle, XCircle } from "react-bootstrap-icons";
import { FaShoppingBag, FaTruckPickup } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

const TIMELINE_STEPS = [
  { status: "PENDING", label: "Order placed", Icon: FaShoppingBag },
  { status: "CONFIRMED", label: "Order confirmed", Icon: CheckCircle },
  { status: "IN_DELIVERY", label: "In delivery", Icon: FaTruckPickup },
  { status: "DELIVERED", label: "Delivered", Icon: FiHome },
];

const STATUS_ORDER = ["PENDING", "CONFIRMED", "IN_DELIVERY", "DELIVERED"];

export default function OrderTimeline({ currentStatus, timestamps = {} }) {
  const currentIndex = STATUS_ORDER.indexOf(currentStatus);
  const isCancelled = currentStatus === "CANCELLED";
  const isReturned = currentStatus === "RETURNED";

  if (isCancelled || isReturned) {
    return (
      <div
        className="d-flex align-items-center gap-3"
        style={{
          background: isCancelled
            ? "rgba(192,57,43,0.06)"
            : "rgba(255,255,255,0.03)",
          border: `0.5px solid ${isCancelled ? "rgba(192,57,43,0.2)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: 12,
          padding: 14,
        }}
      >
        {isCancelled ? (
          <XCircle style={{ fontSize: 20, color: "#c0392b" }} />
        ) : (
          <ArrowReturnLeft style={{ fontSize: 20 }} />
        )}

        <div>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: isCancelled ? "#c0392b" : "",
              marginBottom: 2,
            }}
          >
            Order {isCancelled ? "cancelled" : "returned"}
          </p>
          <p style={{ fontSize: 11 }}>
            {timestamps[currentStatus]
              ? new Date(timestamps[currentStatus]).toLocaleString("en-NG")
              : "—"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {TIMELINE_STEPS.map((step, index) => {
        const isDone = index <= currentIndex;
        const isCurrent = index === currentIndex;
        const isLast = index === TIMELINE_STEPS.length - 1;

        return (
          <div
            key={step.status}
            className="d-flex flex-col align-items-start gap-4"
          >
            {/* Left — icon + line */}
            <div
              className="d-flex flex-column align-items-center "
              style={{
                flexShrink: 0,
              }}
            >
              <div
                className="d-flex align-items-center  justify-content-center"
                style={{
                  width: "clamp(45px, 3px + 5vw, 60px)",
                  aspectRatio: 1 / 1,
                  borderRadius: "50%",
                  background: isDone
                    ? "#1D9E75"
                    : isCurrent
                      ? "#ddc917"
                      : "#1a2a1a",
                  border: `2px solid ${
                    isDone ? "#1D9E75" : isCurrent ? "#c5b62d" : "#ffffff14"
                  }`,
                  transition: "all 0.3s",
                }}
              >
                <step.Icon
                  style={{
                    fontSize: 20,
                    color: isDone ? "#fff" : "",
                  }}
                />
              </div>

              {/* Connecting line */}
              {!isLast && (
                <div
                  style={{
                    width: 5,
                    flex: 1,
                    minHeight: 40,
                    background: index < currentIndex ? "#1D9E75" : "",
                    margin: "5px 0",
                    transition: "background 0.3s",
                  }}
                />
              )}
            </div>

            {/* Right — label + timestamp */}
            <div style={{ paddingBottom: isLast ? 0 : 16, paddingTop: 4 }}>
              <h6
                className="mb-1 mb-sm-2"
                style={{
                  fontWeight: isCurrent ? 600 : 400,
                  color: isDone ? (isCurrent ? "#e7eb0af5" : "#ddd") : "",
                  lineHeight: 1,
                  display: "inline-block",
                }}
              >
                {step.label}
                {isCurrent && (
                  <span
                    className="py-1"
                    style={{
                      marginLeft: 10,
                      color: "#cbce14f3",
                      background: "#c6c93a48",
                      borderRadius: 20,
                      padding: "1px 7px",
                      fontSize: "10px",
                      letterSpacing: 1,
                    }}
                  >
                    Current
                  </span>
                )}
              </h6>
              <p>
                {timestamps[step.status]
                  ? new Date(timestamps[step.status]).toLocaleString("en-NG")
                  : isDone
                    ? "—"
                    : "Pending"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
