import ProductCard from "./WishlistProductCard";
import { Row, Col, Container } from "react-bootstrap";
import products from "../../../js/products";

const ProductGrid = () => {
  return (
    <div className="mb-5">
      <Row>
        {products.length > 0 ? (
          products.map((p) => (
            <Col key={p.id} xxs={12} xs={6} sm={4} md={3} lg={2}>
              <ProductCard product={p} />
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
              No wishlist found
            </h2>
          </div>
        )}
      </Row>
    </div>
  );
};

export default ProductGrid;
