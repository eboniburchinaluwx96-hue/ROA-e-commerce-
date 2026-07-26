import { Form } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export function StepTwo({ setStep, handleLogoChange, handleBannerChange }) {
  return (
    <>
      <div className="d-flex justify-content-between ">
        {" "}
        <div>
          <h3 className=" fs-3 mb-2">Branding</h3>
          <p className=" mb-5">Make your store attractive</p>
        </div>
        <div
          onClick={() => setStep(3)}
          style={{ cursor: "pointer", color: "#ffee00" }}
        >
          Skip
        </div>
      </div>

      <Form.Group>
        <Form.Label className="">Store Logo </Form.Label>
        <Form.Control
          accept="image/*"
          onChange={handleLogoChange}
          type="file"
        />
      </Form.Group>

      <Form.Group className="my-5">
        <Form.Label className="">Store Banner</Form.Label>
        <Form.Control
          accept="image/*"
          onChange={handleBannerChange}
          type="file"
        />
      </Form.Group>

      <div className="d-flex">
        <button
          onClick={() => setStep(3)}
          className="px-3 py-2 mt-5  ms-auto next-btn"
        >
          <BsArrowRight style={{ color: "#facc15", fontSize: "35px" }} />
        </button>
      </div>
    </>
  );
}
