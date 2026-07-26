import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export function StepThree({
  setStep,
  handleChange,
  storeData,
  errors,
  setErrors,
}) {
  const [select, setSelect] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!storeData.country.trim()) {
      newErrors.Name = "store name is required";
    }

    if (!storeData.state.trim()) {
      newErrors.state = "please choosea a state";
    }

    if (!storeData.city.trim()) {
      newErrors.city = "your city is required";
    }

    if (!storeData.address.trim()) {
      newErrors.address = "store address is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (!validate()) return;

    setStep(4);
  };

  return (
    <>
      <h3 className=" fs-3 mb-2">Location</h3>

      <Form.Group className=" mt-5">
        <Form.Label className="">Country</Form.Label>
        <Form.Select
          name="country"
          value={storeData.country}
          onChange={handleChange}
        >
          <option defaultValue value="nigeria">
            Nigeria
          </option>
        </Form.Select>
      </Form.Group>

      <Form.Group className=" my-5">
        <Form.Label>State *</Form.Label>
        <Form.Select
          name="state"
          value={storeData.state}
          onChange={handleChange}
          isInvalid={!!errors.state}
          onClick={() => setSelect(!false)}
        >
          <option className={`${select ? "d-none" : ""}`}>Select State</option>
          <div>
            {[
              "Autombile",
              "Groceries",
              "Phones & Accessories",
              "Home & kitchen",
              "Health & Beauty",
              "Fashion",
              "Real Estate",
              "Electronics",
              "Services",
              "Autombile",
              "Groceries",
              "Phones & Accessories",
              "Home & kitchen",
              "Health & Beauty",
              "Fashion",
              "Real Estate",
              "Electronics",
              "Services",
            ].map((c) => {
              return <option value={c}>{c}</option>;
            })}
          </div>
        </Form.Select>
        <Form.Control.Feedback
          className="text-danger d-block mt-2"
          type="Invalid"
        >
          {errors.state}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label className="">City *</Form.Label>
        <Form.Control
          name="city"
          value={storeData.city}
          onChange={handleChange}
          isInvalid={errors.city}
        />
        <Form.Control.Feedback
          className="text-danger d-block mt-2"
          type="Invalid"
        >
          {errors.city}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mt-5">
        <Form.Label className="">Address *</Form.Label>
        <Form.Control
          name="address"
          value={storeData.address}
          onChange={handleChange}
          required
          as="textarea"
          isInvalid={errors.address}
          rows={3}
        />
        <Form.Control.Feedback
          className="text-danger d-block mt-2"
          type="Invalid"
        >
          {errors.address}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="d-flex">
        <button
          onClick={() => setStep(2)}
          className="px-3 py-2 mt-5   next-btn"
        >
          <BsArrowLeft style={{ color: "#facc15", fontSize: "35px" }} />
        </button>

        <button onClick={next} className="px-3 py-2 mt-5  ms-auto next-btn">
          <BsArrowRight style={{ color: "#facc15", fontSize: "35px" }} />
        </button>
      </div>
    </>
  );
}
