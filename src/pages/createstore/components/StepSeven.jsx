import { Form } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export function StepSeven({ setStep, handleChange, formData }) {
  return (
    <>
      <h3 className=" fs-3 mb-2">Store Policies</h3>

      <Form>
        <Form.Group className=" mt-5">
          <Form.Label>Return Policy</Form.Label>
          <Form.Control
            name="returnPolicy"
            value={formData.returnPolicy}
            onChange={handleChange}
            as="textarea"
            rows={4}
          />
        </Form.Group>

        <Form.Group className=" my-5">
          <Form.Label>Refund Policy</Form.Label>
          <Form.Control
            name="refundPolicy"
            value={formData.refundPolicy}
            onChange={handleChange}
            as="textarea"
            rows={4}
          />
        </Form.Group>

        <Form.Group className=" mb-5">
          <Form.Label>Warranty Information</Form.Label>
          <Form.Control
            name="warrantyInfo"
            value={formData.warrantyInfo}
            onChange={handleChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>

        <div className="d-flex">
          <button
            onClick={() => setStep(6)}
            className="px-3 py-2 mt-5 next-btn"
          >
            <BsArrowLeft style={{ color: "#facc15", fontSize: "35px" }} />
          </button>

          <button
            type="submit"
            className="px-3 ms-auto py-2 mt-5 border-0"
            style={{
              backgroundColor: "#facc15",
              color: "#000",
              fontSize: "20px",
            }}
          >
            Submit
          </button>
        </div>
      </Form>
    </>
  );
}
