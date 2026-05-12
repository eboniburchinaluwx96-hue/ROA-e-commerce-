import {Card, CardBody } from "react-bootstrap";

export default function ProductCard({ product }) {
  return(
    <Card className="product-card">
      <Card.Img src={product.image} />
      <CardBody>
        <div className="mb-4 product-name">{product.name}</div>

        <div className="meta align-items-center">
          <img  className="ratings-image" src={`/ratings/rating-${(product.rating.stars)*10}.png`} alt="" /> 
          <span>
            {product.rating.count.toLocaleString()}
          </span>
        </div>

        <p className="price mt-4">{((product.price)*10).toLocaleString()} Naira</p>
       
        
      </CardBody>
    </Card>
  )
}