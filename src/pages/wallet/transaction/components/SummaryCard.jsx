import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaArrowDown, FaArrowUp } from "react-Icons/fa";

export function SummaryCard({ summary }) {
  const navigate = useNavigate();

  return (
    <div
      className=" p-5 mt-5"
      style={{
        background: "linear-gradient(135deg, #142714, #3e4b06)",
        border: "0.5px solid #19c019a9",
        borderRadius: 16,
        marginBottom: "100px",
      }}
    >
      <Row
        className="g-5 align-items-center pb-5"
        style={{ borderBottom: "0.5px solid rgba(255, 255, 255, 0.75)" }}
      >
        <Col className="col-12 col-md-5">
          <div>
            <h5
              style={{
                lineHeight: 2,
                textWrap: "nowrap",
                textOverflow: "ellipsis",
              }}
              className="mb-3"
            >
              Wallet balance
            </h5>
            <p
              className="fw-bold fs-5"
              style={{
                fontFamily: "Bebas+Neue",
                color: "#facc15",
              }}
            >
              ₦ {summary.balance.toLocaleString()}.00
            </p>
          </div>
        </Col>

        <Col>
          <div className="d-flex justify-content-md-end gap-4 gap-md-5">
            <button
              className="px-4 px-md-4"
              onClick={() => navigate("/wallet/topup")}
              style={{
                background: "#4d4d1671",
                border: "0.5px solid #f2f700",
                borderRadius: 8,
                color: "#f2f700",
              }}
            >
              <h6 style={{ lineHeight: "15px" }}>Top up</h6>
            </button>
            <button
              className="px-4 px-md-4"
              onClick={() => navigate("/wallet/withdraw")}
              style={{
                background: "rgba(11, 65, 48, 0.66)",
                border: "0.5px solid rgba(32, 199, 146, 0.3)",
                borderRadius: 8,
                color: "#0ec78c",
              }}
            >
              <h6>Withdraw</h6>
            </button>
          </div>
        </Col>
      </Row>

      <Row className="g-5 align-items-center my-3">
        {[
          {
            label: "Money in",
            amount: summary.moneyIn,
            count: summary.inCount,
            color: "#1D9E75",
            Icon: FaArrowDown,
          },
          {
            label: "Money out",
            amount: summary.moneyOut,
            count: summary.outCount,
            color: "#facc15",
            Icon: FaArrowUp,
          },
        ].map((s) => {
          return (
            <Col key={s.label} className="col-12 col-sm-6">
              <div
                className="p-3"
                style={{
                  boxShadow: "-0px -1px 10px #00e70057",
                  borderRadius: 12,
                }}
              >
                <h6
                  className="text-white mb-2"
                  style={{
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <s.Icon style={{ color: s.color }} />
                  {s.label}
                </h6>

                <p
                  className="fs-4 fw-bold mb-2"
                  style={{
                    color: s.color,
                  }}
                >
                  ₦{s.amount.toLocaleString()}
                </p>

                <p>{s.count} transactions</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
