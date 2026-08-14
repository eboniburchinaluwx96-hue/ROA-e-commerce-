import { Form } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export function StepFour({ handleChange, formData }) {
  return (
    <>
      <h3 className=" fs-3 mb-2">Delivery</h3>

      <Form.Group className=" mt-5">
        <Form.Label>Delivery Range </Form.Label>
        <Form.Control
          name="delivery"
          value={formData.delivery}
          onChange={handleChange}
          required
          type="text"
          placeholder="e.g 1-2 business days"
        />
      </Form.Group>
    </>
  );
}
