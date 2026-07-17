import { Form, InputGroup, Modal } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export function StepFour({ setStep, handleChange, storeData }) {
  return (
    <>
      <h3 className=" fs-3 mb-2">Delivery</h3>

      <Form>
        <Form.Group className=" mt-5">
          <Form.Label>Delivery Range *</Form.Label>
          <Form.Control
            name="delivery"
            value={storeData.delivery}
            onChange={handleChange}
            required
            type="text"
            placeholder="e.g 1-2 business days"
          />
        </Form.Group>
      </Form>

      <div className="d-flex">
        <button
          onClick={() => setStep(3)}
          className="px-3 py-2 mt-5   next-btn"
        >
          <BsArrowLeft style={{ color: "#facc15", fontSize: "35px" }} />
        </button>

        <button
          onClick={() => setStep(5)}
          className="px-3 py-2 mt-5  ms-auto next-btn"
        >
          <BsArrowRight style={{ color: "#facc15", fontSize: "35px" }} />
        </button>
      </div>
    </>
  );
}
