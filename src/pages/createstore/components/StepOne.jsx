import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { BsArrowRight, BsSortDown } from "react-icons/bs";

export function StepOne({
  setStep,
  formData,
  handleChange,
  errors,
  setErrors,
}) {
  const [select, setSelect] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.Name.trim()) {
      newErrors.Name = "store name is required";
    }

    if (!formData.Slug.trim()) {
      newErrors.Slug = "store slug is required";
    }

    if (!formData.Handle.trim()) {
      newErrors.Handle = "store handle is required";
    }

    if (!formData.Category.trim()) {
      newErrors.category = "please choose a category";
    }

    if (!formData.tagline.trim()) {
      newErrors.tagline = " tagline is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "store description is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (!validate()) return;

    setStep(2);
  };

  return (
    <>
      <h3 className=" fs-3 mb-2">Store Details</h3>
      <p className=" mb-5">Let's create your store identity</p>

      <Form.Group>
        <Form.Label className="">Store Name *</Form.Label>
        <Form.Control
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          required
          type="text"
          placeholder="e.g  Annointed Chips"
          isInvalid={!!errors.Name}
        />
        <Form.Control.Feedback
          className="text-danger d-block mt-2"
          type="Invalid"
        >
          {errors.Name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label className=" mt-5">Store URL / Slug *</Form.Label>
        <InputGroup>
          <InputGroup.Text>r.o.a/store/</InputGroup.Text>
          <Form.Control
            name="Slug"
            value={formData.Slug}
            onChange={handleChange}
            required
            placeholder="annointed-chips"
            isInvalid={!!errors.Slug}
          />
        </InputGroup>
        <Form.Control.Feedback className="text-danger mt-2 " type="Invalid">
          {errors.Slug}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label className="mt-5">Handle *</Form.Label>
        <Form.Control
          name="Handle"
          value={formData.Handle}
          onChange={handleChange}
          required
          type="text"
          placeholder="e.g  @sportZone"
          isInvalid={!!errors.Handle}
        />
        <Form.Control.Feedback
          className="text-danger d-block mt-2"
          type="Invalid"
        >
          {errors.Handle}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label className=" mt-5">Business Category *</Form.Label>
        <Form.Select
          name="Category"
          value={formData.Category}
          onChange={handleChange}
          required
          isInvalid={errors.Category}
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
        <Form.Control.Feedback
          className="text-danger d-block mt-2"
          type="Invalid"
        >
          {errors.Category}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label className=" mt-5">Store Tagline *</Form.Label>
        <Form.Control
          name="tagline"
          value={formData.tagline}
          onChange={handleChange}
          type="text"
          isInvalid={!!errors.tagline}
          required
          placeholder="One short sentence about your store."
        />
        <Form.Control.Feedback
          className="text-danger d-block mt-2"
          type="Invalid"
        >
          {errors.tagline}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label className=" mt-5">Store Description *</Form.Label>
        <Form.Control
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          as="textarea"
          rows={5}
          isInvalid={!!errors.description}
          placeholder="Tell customers about your business..."
        />
        <Form.Control.Feedback
          className="text-danger d-block mt-2"
          type="Invalid"
        >
          {errors.description}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="d-flex">
        <button onClick={next} className="px-3 py-2 mt-5  ms-auto next-btn">
          <BsArrowRight style={{ color: "#facc15", fontSize: "35px" }} />
        </button>
      </div>
    </>
  );
}
