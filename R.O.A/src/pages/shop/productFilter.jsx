import { Row, Col, Form } from "react-bootstrap";

function ProductFilter() {
  return (
    <div className="pt-3 mb-5">
      <Row className="g-4 justify-content-center">
        
        {/* Category Filter */}
        <Col className="col-4">
          <Form.Group>
            <Form.Label className="fw-semibold">
              Categories
            </Form.Label>

            <Form.Select>
              <option value="">All Categories</option>
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="phones">Phones</option>
              <option value="gaming">Gaming</option>
            </Form.Select>
          </Form.Group>
        </Col>

        {/* Price Range Filter */}
        <Col className="col-4" >
          <Form.Group>
            <Form.Label className="fw-semibold">
              Price Range
            </Form.Label>

            <Form.Select>
              <option value="">All Prices</option>
              <option value="0-50">$0 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-500">$100 - $500</option>
              <option value="500+">$500+</option>
            </Form.Select>
          </Form.Group>
        </Col>

      </Row>
    </div>
  );
}

export default ProductFilter;