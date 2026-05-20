import { Card, CardBody } from "react-bootstrap";

export default function ProductCard({ product }) {
  return (
    <Card className="product-card">
      <div style={{ position: "relative" }}>
        <Card.Img src={product.image} />
      </div>
      <CardBody>
        <div className="mb-4 product-name">{product.name}</div>

        <div className="meta align-items-center">
          <img
            className="ratings-image"
            src={`/ratings/rating-${product.rating.stars * 10}.png`}
            alt=""
          />
          <span>{product.rating.count.toLocaleString()}</span>
        </div>

        <div className="d-flex align-items-center mt-4 gap-2 price-container">
          <div className="price">${(product.price * 10).toLocaleString()}</div>
          {product.oldPrice && (
            <div>
              <div className="old-price">
                ${product.oldPrice.toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
