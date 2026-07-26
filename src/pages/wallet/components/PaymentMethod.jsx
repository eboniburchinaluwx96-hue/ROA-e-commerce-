import { Row, Col, Stack } from "react-bootstrap";

export function PaymentMethod({ method, setMethod, PAYMENT_METHOD }) {
  return (
    <div style={{ margin: "110px 0" }}>
      <h5 className="mb-4">Pay with</h5>

      <Row className="g-5">
        {PAYMENT_METHOD.map((m) => {
          return (
            <Col key={m.id} className="col-auto" xs={6}>
              <div
                className="p-3"
                onClick={() => setMethod(m.id)}
                style={{
                  background: "#4aa14a3b",
                  border: `0.5px solid ${method == m.id ? "#c9a84c" : ""}`,
                  borderRadius: "22px",
                }}
              >
                <Stack className="text-center">
                  <h1>{m.icon}</h1>
                  <h3 className="my-4 fw-bold text-white">{m.label}</h3>
                  <h6>{m.sub}</h6>
                </Stack>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
