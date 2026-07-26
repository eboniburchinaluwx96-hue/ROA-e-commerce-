import { Container } from "react-bootstrap";
import MainHeader from "../../components/MainHeader";
import ProductGrid from "./component/WishlistProductGrid";
import { Footer } from "../Home/components/Footer";

export const Wishlist = () => {
  return (
    <>
      <title> My Wishlist</title>

      <MainHeader title={Wishlist} showAuth={!true} showSearchbtn={!true} />

      <section>
        <Container>
          <div className="wishlist">
            <div>
              <h6>4 saved items</h6>
              <div className="d-flex justify-content-between mt-2">
                <h1 className="text-light">My wishlist</h1>
              </div>
            </div>

            <div
              className="d-flex align-items-center my-4 px-4 py-3 justify-content-between"
              style={{
                background: "#00000057",
                borderRadius: "20px",
                maxWidth: "600px",
              }}
            >
              <div>
                <h6>Total value</h6>
                <h4 className="text-light">&#8358;33,500</h4>
              </div>

              <button
                className="px-2 py-2"
                style={{
                  background: "none",
                  fontSize: "17px",
                  color: "rgba(255, 255, 255, 0.664)",
                  borderRadius: "11px",
                }}
              >
                Add all to cart
              </button>
            </div>

            <ProductGrid />
          </div>
        </Container>

        <Footer />
      </section>
    </>
  );
};
