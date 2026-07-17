import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { BsArrowRight, BsSortDown } from "react-icons/bs";

export function StepOne({ setStep, storeData, handleChange }) {
  const [select, setSelect] = useState(false);

  return (
    <>
      <h3 className=" fs-3 mb-2">Store Details</h3>
      <p className=" mb-5">Let's create your store identity</p>

      <Form>
        <Form.Group>
          <Form.Label className="">Store Name *</Form.Label>
          <Form.Control
            name="storeName"
            value={storeData.storeName}
            onChange={handleChange}
            required
            type="text"
            placeholder="e.g  Annointed Chips"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className=" mt-5">Store URL / Slug *</Form.Label>
          <InputGroup>
            <InputGroup.Text>r.o.a/store/</InputGroup.Text>
            <Form.Control
              name="slug"
              value={storeData.slug}
              onChange={handleChange}
              required
              placeholder="annointed-chips"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <Form.Label className="mt-5">Handle *</Form.Label>
          <Form.Control
            name="handle"
            value={storeData.handle}
            onChange={handleChange}
            required
            type="text"
            placeholder="e.g  @sportZone"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className=" mt-5">Business Category *</Form.Label>
          <Form.Select
            name="category"
            value={storeData.category}
            onChange={handleChange}
            required
            onClick={() => setSelect(!false)}
          >
            <option className={`${select ? "d-none" : ""}`}>
              Select Category
            </option>
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
            ].map((c) => {
              return <option value={c}>{c}</option>;
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label className=" mt-5">Store Tagline</Form.Label>
          <Form.Control
            name="tagline"
            value={storeData.tagline}
            onChange={handleChange}
            type="text"
            placeholder="One short sentence about your store."
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className=" mt-5">Store Description *</Form.Label>
          <Form.Control
            name="description"
            value={storeData.description}
            onChange={handleChange}
            required
            as="textarea"
            rows={5}
            placeholder="Tell customers about your business..."
          />
        </Form.Group>
      </Form>

      <div className="d-flex">
        <button
          onClick={() => setStep(2)}
          className="px-3 py-2 mt-5  ms-auto next-btn"
        >
          <BsArrowRight style={{ color: "#facc15", fontSize: "35px" }} />
        </button>
      </div>
    </>
  );
}
