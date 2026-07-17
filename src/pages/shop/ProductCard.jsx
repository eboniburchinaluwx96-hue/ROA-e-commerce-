import { useState } from "react";
import { Card, CardBody, Row, Col } from "react-bootstrap";
import { FaHeart, FaStore, FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const [IsWish, setIsWish] = useState("");

  return (
    <Card className="product-card">
      <div style={{ position: "relative" }}>
        <Card.Img src={product.image} />
        <div
          className="d-inline-flex d-flex align-items-center ms-2"
          style={{ position: "relative", top: -265, height: "0" }}
        >
          <div
            className={`${IsWish ? "wishlist-active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsWish((P) => !P);
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
        </div>
      </div>
      <CardBody>
        <div className="mb-3 product-name">{product.name}</div>

        <div className="meta align-items-center">
          <img
            className="ratings-image"
            src={`/ratings/rating-${product.rating.stars * 10}.png`}
            alt=""
          />
          <span>{product.rating.count.toLocaleString()}</span>
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
      </CardBody>
    </Card>
  );
}
