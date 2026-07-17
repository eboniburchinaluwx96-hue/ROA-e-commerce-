import { useState } from "react";
import { Form, InputGroup, Modal } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export function StepThree({ setStep, handleChange, storeData }) {
  const [select, setSelect] = useState(false);

  return (
    <>
      <h3 className=" fs-3 mb-2">Location</h3>

      <Form>
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
            required
            onClick={() => setSelect(!false)}
          >
            <option className={`${select ? "d-none" : ""}`}>
              Select State
            </option>
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
                return (
                  <option style={{ overflow: "scroll" }} value={c}>
                    {c}
                  </option>
                );
              })}
            </div>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label className="">City *</Form.Label>
          <Form.Control
            name="city"
            value={storeData.city}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Form.Label className="">Address *</Form.Label>
          <Form.Control
            name="address"
            value={storeData.address}
            onChange={handleChange}
            required
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Form>

      <div className="d-flex">
        <button
          onClick={() => setStep(2)}
          className="px-3 py-2 mt-5   next-btn"
        >
          <BsArrowLeft style={{ color: "#facc15", fontSize: "35px" }} />
        </button>

        <button
          onClick={() => setStep(4)}
          className="px-3 py-2 mt-5  ms-auto next-btn"
        >
          <BsArrowRight style={{ color: "#facc15", fontSize: "35px" }} />
        </button>
      </div>
    </>
  );
}
