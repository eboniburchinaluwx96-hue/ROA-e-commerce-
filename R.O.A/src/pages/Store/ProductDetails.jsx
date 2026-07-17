import { useState } from "react";
import { Button, Offcanvas, Container, Row, Col } from "react-bootstrap";

export default function ProductDetails({ product, onHide, show, onClose }) {
  const [activeSize, setActiveSize] = useState([]);
  const [activeColor, setActiveColor] = useState([]);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  if (!product) return null;

  return (
    <Offcanvas
      show={show}
      onHide={onHide}
      placement="end"
      className="product-details offcanvas-product-details"
    >
      <Offcanvas.Body className="p-0">
        <Container className="text-white p-0">
          <div className="hero-image">
            <img src={product.image} alt={product.name} />
            <div className="details-eyebrow">
              {product.keywords.map((keyword, i) => {
                return (
                  <ul key={i}>
                    <li
                      style={{
                        color: i === 0 ? "#00e676" : "rgba(255,255,255,0.55)",
                      }}
                    >
                      {keyword}{" "}
                    </li>
                  </ul>
                );
              })}
              ;
            </div>
            <div className="close-btn" onClick={onClose}>
              x
            </div>
          </div>
          <div className="product-details">
            <div className="details-info">
              <h3 className="details-title">{product.name}</h3>

              {product.rating && (
                <div className="meta">
                  <img
                    className="ratings-image"
                    src={`/ratings/rating-${product.rating.stars * 10}.png`}
                    alt=""
                  />
                  <div className="details-count mb-2 ms-2">
                    {product.rating.count} review
                  </div>
                </div>
              )}

              <div className="details-price">
                <span className="new-price">
                  ${(product.price * 10).toLocaleString()}
                </span>
                {product.oldPrice && (
                  <div>
                    <div className="old-price">${product.oldPrice}</div>
                    <div
                      style={{
                        color: "#00e676",
                        fontSize: "0.82rem",
                        fontWeight: "700",
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      Save {product.oldPrice - product.price} (
                      {Math.round((1 - product.price / product.oldPrice) * 100)}
                      % off)
                    </div>
                  </div>
                )}
              </div>

              <p className="details-description mt-3">{product.description}</p>

              {product.sizes && (
                <div className="mb-4">
                  <div
                    style={{
                      color: "rgba(255,255,255,0.99)",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      fontFamily: "outfit",
                      margin: "20px 0 17px",
                    }}
                  >
                    Sizes
                  </div>
                  <Row g-5>
                    {product.sizes.map((s, i) => {
                      return (
                        <Col key={i} className="col-3">
                          <button
                            className={`size-btn ${activeSize === i ? "active" : ""}`}
                            onClick={() => setActiveSize(i)}
                          >
                            {s}
                          </button>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              )}

              {product.color && (
                <div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.99)",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      fontFamily: "outfit",
                      margin: "20px 0 10px",
                    }}
                  >
                    Colors
                  </div>
                  <Row g-5>
                    {product.colors.map((c, i) => {
                      return (
                        <Col key={i} className="col-3">
                          <button
                            className={`size-btn ${activeColor === i ? "active" : ""}`}
                            onClick={() => setActiveColor(i)}
                          >
                            {c}
                          </button>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              )}

              <Button
                onClick={handleAdd}
                className={`sticky-bottom ${added ? "added-btn" : "add-btn"}`}
              >
                {added ? " ADDED TO CART" : "ADD TO CART"}
              </Button>
            </div>
          </div>
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
