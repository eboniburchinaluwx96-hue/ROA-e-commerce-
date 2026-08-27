import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductPage from "../../../components/product/ProductPage";
import products from "../../../js/products";

export function FeaturedProducts() {
  return (
    <Container>
      <div className="py-5">
        <div className="text-center py-5">
          <h2 className="text-center" style={{ color: "#fff025" }}>
            Featured Products
          </h2>
        </div>
        <div>
          <h5 className="text-start mt-5 mb-0">Trending products</h5>

          <ProductPage
            Store={false}
            filter={!true}
            product={products}
            count={false}
            showWishlist={false}
          />
        </div>

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
      </div>
    </Container>
  );
}
