import { useState, useCallback } from "react";
import { Row, Col, Form, Modal } from "react-bootstrap";
import { SortAlphaDown } from "react-bootstrap-icons";

const SORT_OPTIONS = [
  "Newest first",
  "Oldest first",
  "Price: low to high",
  "Price: high to low",
  "Top rated",
];

function ProductFilter({
  selectedCategory,
  setSelectedCategory,
  category,
  setSort,
  sort,
}) {
  const [sortOpen, setSortOpen] = useState(false);

  // handle sort apply — useCallback
  const handleSort = useCallback(
    (value) => {
      setSort(value);
      setSortOpen(false);
    },
    [setSort],
  );

  return (
    <Row className="align-items-center g-2">
      <Col className=" col-9 col-sm-8 ">
        {/* Category filter chips */}
        <div
          style={{
            display: "flex",
            gap: 12,
            overflowX: "auto",
          }}
          className="hide-scrollbar"
        >
          {category.map((f) => (
            <button
              className="px-3 py-1 "
              key={f}
              onClick={() => setSelectedCategory(f)}
              style={{
                borderRadius: 15,
                whiteSpace: "nowrap",
                transition: "all 0.15s",
                border: `0.5px solid ${selectedCategory === f ? "#d3e016" : "#ffffff1f"}`,
                color: selectedCategory === f ? "#d3e016" : "#b4b4b4b0",
                background:
                  selectedCategory === f ? "#d2e01623" : "transparent",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </Col>

      <Col className=" col-3 col-sm-4 d-flex">
        <div className="ms-auto ">
          <button
            onClick={() => setSortOpen(true)}
            style={{
              background: "#d2e01628",
              borderRadius: 10,
              color: "#d8e706",
              whiteSpace: "nowrap",
              letterSpacing: 1.2,
              padding: "9px 14px",
              border: "none",
            }}
          >
            {" "}
            <div className="d-flex align-items-center gap-2">
              <SortAlphaDown size={21} />
              <div className="d-none d-sm-block">
                {sort.split(":")[0].split(" ").slice(0, 2).join(" ")}
              </div>
            </div>
          </button>{" "}
        </div>

        <Modal
          show={sortOpen}
          onHide={() => setSortOpen(false)}
          centered
          style={{ background: "#111a11", borderRadius: "16px" }}
        >
          <div
            style={{
              width: 36,
              height: 4,
              background: "#1a2a1a",
              borderRadius: 2,
              margin: "12px auto 4px",
            }}
          />

          <Modal.Header
            closeButton
            style={{ borderBottom: "0.5px solid #1a2a1a" }}
          >
            <Modal.Title>Sort by</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {SORT_OPTIONS.map((opt) => {
                return (
                  <Form.Check
                    className="py-2"
                    style={{ fontSize: "20px" }}
                    key={opt}
                    id={opt}
                    type="radio"
                    label={opt}
                    name="sortGroup"
                    value={opt}
                    checked={sort === opt}
                    onChange={(e) => handleSort(e.target.value)}
                  />
                );
              })}
            </Form>
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
  );
}

export default ProductFilter;
