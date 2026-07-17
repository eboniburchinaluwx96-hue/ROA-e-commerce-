import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductPage from "../../../pages/shop/ProductPage";

export function FeaturedProducts() {
  return (
    <Container>
      <div className="text-center pt-5">
        <h2 className="text-center" style={{ color: "#fff025" }}>
          Featured Products
        </h2>
        <h5 className="text-start mt-3">Trending products</h5>
      </div>

      <ProductPage
        filter={!true}
        showHeader={!true}
        showFilterProduct={!true}
      />

      <Link to="/shopping">
        {" "}
        <Button
          className="mt-5 border-0 p-3"
          style={{
            background: "#00e677",
          }}
        >
          <h5 className="text-dark"> Show All Products</h5>
        </Button>
      </Link>
    </Container>
  );
}
