import ProductCard from "./ProductCard";
import { Row, Col, Container } from "react-bootstrap";

const ProductGrid = ({ selectProduct, filterProduct }) => {
  return (
    <div>
      <Row g-5>
        {filterProduct.length > 0 ? (
          filterProduct.map((p) => (
            <Col
              key={p.id}
              xxs={12}
              xs={6}
              sm={6}
              md={4}
              lg={2}
              onClick={() => selectProduct(p)}
            >
              <ProductCard product={p} filterProduct={filterProduct} />
            </Col>
          ))
        ) : (
          <div style={{ textAlign: "center", padding: "70px 0" }}>
            <h2
              style={{
                fontSize: "1.2rem",
                color: "#fff",
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              No products found
            </h2>
          </div>
        )}
      </Row>
    </div>
  );
};

export default ProductGrid;
