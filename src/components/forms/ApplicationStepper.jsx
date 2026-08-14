import { useEffect, useRef } from "react";

const ADD_PRODUCT_STEPPER = [1, 2, 3, 4, 5, 6, 7];

export function ApplicationStepper({ step, setStep, addProduct }) {
  const stepRefs = useRef({});

  useEffect(() => {
    stepRefs.current[step]?.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [step]);
  return (
    <div
      className="d-flex mb-5"
      style={{ overflowX: "auto", scrollbarWidth: "none" }}
    >
      {(addProduct ? ADD_PRODUCT_STEPPER : [1, 2, 3, 4]).map((num) => {
        return (
          <div
            key={num}
            ref={(el) => (stepRefs.current[num] = el)}
            className="d-flex align-items-center flex-shrink-0"
            onClick={() => setStep(num)}
          >
            <div
              className={`d-flex align-items-center justify-content-center text-white px-3 py-1 ${step === num ? "step_active" : ""}`}
              style={{
                border: "1px solid #facc15",
                borderRadius: "50%",
              }}
            >
              <p className="" style={{ color: step === num ? "#000" : "#fff" }}>
                {num}
              </p>
            </div>

            <div
              className="me-2 "
              style={{
                flex: "1",
                padding: "3px",
                width: "150px",
                background: "#facc15",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
