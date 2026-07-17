export function ApplicationStepper({ step, setStep }) {
  return (
    <div className="d-flex mb-5" style={{ overflowX: "auto" }}>
      {[1, 2, 3, 4, 5, 6, 7].map((num) => {
        return (
          <div key={num} className="d-flex align-items-center">
            <div
              onClick={() => setStep(num)}
              className={`d-flex align-items-center justify-content-center text-white px-2 ${step === num ? "step_active" : ""}`}
              style={{
                border: "1px solid #facc15",
                borderRadius: "50%",
              }}
            >
              <p className="text-white">{num}</p>
            </div>

            <div
              className="me-2 "
              style={{
                flex: "1",
                padding: "3px",
                width: "30px",
                background: "#facc15",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
