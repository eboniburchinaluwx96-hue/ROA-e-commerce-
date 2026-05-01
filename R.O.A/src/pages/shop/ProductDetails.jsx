import { Button } from "react-bootstrap";

export default function ProductDetails({product}) {
  if (!product) return null;

  return(
    <div className="product-details">
      <img src={product.image} alt="" />
      <h4>{product.name}</h4>

      <p className="price">{(product.price)*10}Naira</p>
        <div className="meta">
          <img src={`/ratings/rating-${(product.rating.stars)*10}.png`} alt="" /> ({product.rating.count})
        </div>
        <div className="store">
          Sold by: {product.storeName}
        </div>
        <Button variant="dark" className="w-100 sticky-bottom" >
          Add to Cart
        </Button>
    </div>
  );
}