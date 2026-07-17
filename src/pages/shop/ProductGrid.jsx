import ProductCard from "./ProductCard";
import { Row, Col, Container } from "react-bootstrap";

const ProductGrid = ({
  selectProduct,
  filterProduct,
  featuredProduct,
  showFilterProduct = true,
}) => {
  return (
    <div>
      <Row g-5>
        {showFilterProduct &&
          filterProduct.map((p) => (
            <Col
              key={p.id}
              xxs={12}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              onClick={() => selectProduct(p)}
            >
              <ProductCard product={p} />
            </Col>
          ))}

        {featuredProduct &&
          featuredProduct.map((pp) => (
            <Col
              key={pp.id}
              xxs={12}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              onClick={() => selectProduct(pp)}
            >
              <ProductCard product={pp} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ProductGrid;
