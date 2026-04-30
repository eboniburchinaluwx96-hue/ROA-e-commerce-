import {Card, CardBody } from "react-bootstrap"

export default function ProductCard({ product, onClick}) {
  return(
    <Card className="product-card" onClick={onClick} >
      <Card.Img src={product.image} />
      <CardBody>
        <h5 className="mb-4">{product.name}</h5>
        <p className="price text-danger">{(product.price)*10} Naira</p>
        <div className="meta align-items-center">
          <img src={`/ratings/rating-${(product.rating.stars)*10}.png`} alt="" /> ({product.rating.count})
        </div>
        <h6 className="pt-4">Store: <span className="text-primary">{product.storeName}</span></h6>
      </CardBody>
    </Card>
  )
}