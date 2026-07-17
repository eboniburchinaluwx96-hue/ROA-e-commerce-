import { Form, InputGroup } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export function StepTwo({ setStep, handleFileChange }) {
  return (
    <>
      <h3 className=" fs-3 mb-2">Branding</h3>
      <p className=" mb-5">Make your store attractive</p>

      <Form>
        <Form.Group>
          <Form.Label className="">Store Logo *</Form.Label>
          <Form.Control
            accept="image/*"
            onChange={handleFileChange}
            required
            type="file"
          />
        </Form.Group>

        <Form.Group className="my-5">
          <Form.Label className="">Store Banner</Form.Label>
          <Form.Control onChange={handleFileChange} type="file" />
        </Form.Group>
      </Form>

      <div className="d-flex">
        <button
          onClick={() => setStep(1)}
          className="px-3 py-2 mt-5   next-btn"
        >
          <BsArrowLeft style={{ color: "#facc15", fontSize: "35px" }} />
        </button>

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
