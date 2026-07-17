import { Card, CardBody, Row, Col } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";
import { FaHeart, FaStore, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [IsWish, setIsWish] = useState(true);
  return (
    <Card className="product-card">
      <div style={{ position: "relative" }}>
        <Card.Img src={product.image} />
        <Row g-5 style={{ position: "relative", top: -270, height: "0" }}>
          <Col className="col-8 col-auto">
            {product.store && (
              <div
                style={{
                  background: "rgba(22, 22, 22, 0.73)",
                  backdropFilter: "blur(15px)",
                  padding: "6px 7px",
                  borderRadius: "7px",
                  color: "#dbbc08",
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <FaStore style={{ fontSize: "clamp(12px, 2.5vw, 35px)" }} />
                  <p
                    style={{
                      lineHeight: "20px",
                      letterSpacing: "1px",
                    }}
                  >
                    {product.store}
                  </p>
                </div>
              </div>
            )}
          </Col>

          <Col className=" col-auto ms-2 ms-md-4 ms-lg-0 g-lg-2 g-0 ">
            <div
              className={IsWish ? "wishlist-active" : ""}
              onClick={() => {
                setIsWish(!true);
              }}
              style={{
                background: "rgba(22, 22, 22, 0.73)",
                padding: "8px",
                borderRadius: "50%",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              <FaHeart />
            </div>
          </Col>
        </Row>
        {product.stock && (
          <div
            style={{
              position: "absolute",
              left: 5,
              bottom: 25,
              border: "1px solid #e6e5e56e",
              background: "rgba(41, 40, 40, 0.73)",
              backdropFilter: "blur(15px)",
              padding: "3px 7px",
              borderRadius: "12px",
              color: "#e6e5e5bb",
            }}
          >
            {" "}
            Out of stock
          </div>
        )}
      </div>
      <CardBody>
        <div>
          <div className="mb-1 product_name">{product.name}</div>

          <div className="meta align-items-center">
            <img
              className="ratings-image"
              src={`/ratings/rating-${product.rating.stars * 10}.png`}
              alt=""
            />
            <span>({product.rating.count.toLocaleString()})</span>
          </div>

          <div className="d-flex align-items-center mt-3 gap-2 price-container">
            <div className="price">
              &#8358;{(product.price * 10).toLocaleString()}
            </div>
            {product.oldPrice && (
              <div>
                <div className="old-price">
                  &#8358;{product.oldPrice.toLocaleString()}
                </div>
              </div>
            )}
          </div>

          <button
            className="px-4 py-2 d-flex align-items-center gap-2 mx-auto my-2"
            style={{
              border: "1px solid #b3ff0069",
              background: "#51ff0070",
              color: "#b3ff00",
              borderRadius: "12px",
            }}
          >
            <FaShoppingCart /> Add to cart
          </button>
        </div>
      </CardBody>
    </Card>
  );
}
