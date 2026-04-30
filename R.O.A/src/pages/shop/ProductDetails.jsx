import { Button, Carousel } from "react-bootstrap";

export default function ProductDetails({product}) {
  if (!product) return null;

  return(
    <div className="product-details">
      <Carousel interval={null} className="product-carousel"> 
        {product.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} alt="" />
          </Carousel.Item>
        ))}
      </Carousel>

      <h4>{product.name}</h4>

      <p className="price">{(product.price)*10}Naira</p>
        <div className="rating">
          <img src={`/ratings/rating-${(product.rating.star)*10}.png`} alt="" /> ({product.rating.count})
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