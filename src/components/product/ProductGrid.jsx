import ProductCard from "./ProductCard";
import { Row, Col, Container } from "react-bootstrap";

const ProductGrid = ({
  selectProduct,
  sorted,
  CATEGORY_CONFIG,
  PRODUCT_TYPE_CONFIG,
  IsWish,
  handleAddToCart,
  handleWishlist,
  showWishlist,
}) => {
  return (
    <div>
      <Row className="gx-3">
        {sorted.map((p) => (
          <Col
            key={p.id}
            xxs={12}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className=""
            onClick={() => selectProduct(p)}
          >
            <ProductCard
              product={p}
              CATEGORY_CONFIG={CATEGORY_CONFIG}
              PRODUCT_TYPE_CONFIG={PRODUCT_TYPE_CONFIG}
              IsWish={IsWish}
              handleAddToCart={handleAddToCart}
              handleWishlist={handleWishlist}
              showWishlist={showWishlist}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductGrid;
