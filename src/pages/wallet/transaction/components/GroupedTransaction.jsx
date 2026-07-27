import { Spinner, Stack } from "react-bootstrap";

export function GroupedTransaction({
  grouped,
  TX_CONFIG,
  isFailed,
  isIncoming,
  setSelected,
  loading,
}) {
  return (
    <>
      {" "}
      {loading ? (
        <Spinner />
      ) : (
        Object.entries(grouped).map(([date, items]) => (
          <div key={date}>
            <p
              style={{
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              {date}
            </p>
            {items.map((tx) => {
              const config = TX_CONFIG[tx.type];
              const incoming = isIncoming(tx.type);
              const failed = isFailed(tx.type);
              return (
                <Stack
                  direction="horizontal"
                  key={tx.id}
                  onClick={() => setSelected(tx)}
                  className="align-items-center pb-3 mb-3 pb-md-4 mb-md-4 pb-lg-5 mb-lg-5 gap-4 gap-md-5"
                  style={{
                    borderBottom: "0.5px solid #787e0a",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="p-3 d-flex "
                    style={{ background: config.bg, borderRadius: 12 }}
                  >
                    <config.Icon style={{ color: config.color }} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4
                      className="text-white fw-bold "
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {tx.title}
                    </h4>
                    <p>{tx.subtitle}</p>
                  </div>

                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <h5
                      className="fw-bold mb-1"
                      style={{
                        letterSpacing: 1.1,
                        color: incoming
                          ? { "#13a86f": incoming === "REFUND" && "#378ADD" }
                          : failed
                            ? "#9e0f0f"
                            : "#bd9b12",
                      }}
                    >
                      {incoming ? "+" : failed ? "" : "-"} ₦
                      {tx.amount.toLocaleString()}
                    </h5>

                    <p
                      className="px-2"
                      style={{
                        borderRadius: 10,
                        background:
                          tx.status === "COMPLETED"
                            ? "rgba(29,158,117,0.1)"
                            : tx.status === "PENDING"
                              ? "rgba(201,168,76,0.1)"
                              : "rgba(192,57,43,0.1)",
                        color:
                          tx.status === "COMPLETED"
                            ? "#13a86f"
                            : tx.status === "PENDING"
                              ? "#bd9b12"
                              : "#9e0f0f",
                      }}
                    >
                      {tx.status === "COMPLETED"
                        ? "Completed"
                        : tx.status === "PENDING"
                          ? "Pending"
                          : "Failed"}
                    </p>
                  </div>
                </Stack>
              );
            })}
          </div>
        ))
      )}
    </>
  );
}
