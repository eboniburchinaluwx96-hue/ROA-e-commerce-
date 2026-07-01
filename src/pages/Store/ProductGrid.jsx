import ProductCard from "./ProductCard";
import { Row, Col, Container } from "react-bootstrap";

const ProductGrid = ({ selectProduct, product }) => {
  return (
    <Col
      key={product.id}
      className=" col-12 col-sm-4 col-md-3 col-lg-2"
      onClick={() => selectProduct(product)}
    >
      <ProductCard product={product} />
    </Col>
  );
};

export default ProductGrid;
