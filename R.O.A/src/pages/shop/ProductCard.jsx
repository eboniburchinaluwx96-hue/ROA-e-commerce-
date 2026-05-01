import {Card, CardBody } from "react-bootstrap";

export default function ProductCard({ product }) {
  return(
    <Card className="product-card">
      <Card.Img src={product.image} />
      <CardBody>
        <h5 className="mb-4 product-name">{product.name}</h5>
        <p className="price text-danger">{(product.price)*10} Naira</p>
        <div className="meta align-items-center">
          <img  className="ratings-image" src={`/ratings/rating-${(product.rating.stars)*10}.png`} alt="" /> ({product.rating.count})
        </div>
        
      </CardBody>
    </Card>
  )
}