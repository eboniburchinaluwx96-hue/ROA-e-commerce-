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
                  gap={4}
                  className="align-items-center"
                  key={tx.id}
                  onClick={() => setSelected(tx)}
                  style={{
                    borderBottom: "0.5px solid #35361f",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="p-3 d-flex config-icon"
                    style={{ background: config.bg }}
                  >
                    <config.Icon />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h6
                      className="text-white fw-bold mb-2"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {tx.title}
                    </h6>
                    <p>{tx.subtitle}</p>
                  </div>

                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <h5
                      className="mb-2 fw-bold"
                      style={{
                        color: incoming
                          ? "#13a86f"
                          : failed
                            ? "#9e0f0f"
                            : "#bd9b12",
                      }}
                    >
                      {incoming ? "+" : failed ? "" : "-"} ₦
                      {tx.amount.toLocaleString()}
                    </h5>

                    <p
                      className="p-1"
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
