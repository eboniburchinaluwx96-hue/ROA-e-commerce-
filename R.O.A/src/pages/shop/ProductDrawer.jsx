import { useState } from "react"
import { MdLocalShipping } from "react-icons/md";
import { Button, Offcanvas, Container, Row, Col} from "react-bootstrap";

export default function ProductDrawer({ show, onHide, product }) {

   const [activeSize, setActiveSize] = useState([]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd(){
    setAdded(true);
    setTimeout(()=> setAdded(false), 2000);
  }

  if (!product) return null;

  return (

    <Offcanvas
      show={show}
      onHide={onHide}
      placement="bottom"
      className="product-details offcanvas-product-details h-100 w-100"
    >
        
      <Offcanvas.Body className="p-0">
        <Container className="text-white p-0">

          <div className="hero-image">
           <img src={product.image} alt={product.name} />
          <div className="details-eyebrow">
            {product.keywords.map((keyword, i)=>{
              return(
                <ul key={i} >
                  <li style={{color: i===0 ? "#00e676" : "rgba(255,255,255,0.55)"}} >{keyword} </li>
                </ul>
              );
            })};
            
          </div>
          <Offcanvas.Header closeButton />
          </div>
          <div className="product-details">
            
            <div className="details-info" >
              <h3 className="details-title" >{product.name}</h3>

              <div className="meta">
                <img className="ratings-image" src={`/ratings/rating-${(product.rating.stars)*10}.png`} alt="" />
                <div className="details-count mb-2 ms-2">
                  {product.rating.count} review
                </div>
              </div>

              <div className="details-price">
                <span className="new-price" >{(product.price)*10 }</span>
                {product.oldPrice && (
                  <div>
                    <div className="old-price" >
                      {(product.oldPrice)*10}
                    </div>
                    <div style={{color: "#00e676", fontSize: "0.72rem", fontWeight:"700", fontFamily:"Outfit, sans-serif"}}>
                      Save {product.oldPrice - product.price} ({Math.round((1- product.price / product.oldPrice) * 100)}% off)
                    </div>
                  </div>
                )}
              </div>

              <p className="details-description mt-3">
                {product.description}
              </p>
            
              <div className="py-">
                <div style={{
                  color:"rgba(255,255,255,0.55)", fontSize:"0.75rem", fontWeight:"600", letterSpacing:"1", textTransform:"uppercase",fontFamily:"outfit", margin:"40px 0 20px"
                  }}>
                  Size
                </div>
                <Row>
                {product.sizes.map( (s, i)=> {
                return(
                  <Col key={i} className="col-3">
                    <button className={`size-btn ${activeSize === i ? "active" : ""}`} onClick= { ()=> setActiveSize(i) }>
                      {s}
                    </button>
                  </Col>
                );
                } )}
                </Row>
              </div>
              
              <Row className="mt-4 mb-5 align-items-center">
                <Col>
                  <div className="d-flex" >
                    <button onClick={()=>{setQty(Math.max(1, qty-1))}} className="increment-button" >-</button>
                    <button className="qty-button" >{qty}</button>
                    <button onClick={()=>{setQty(qty+1)}} className="increment-button" >+</button>
                  </div>
                </Col>
                <Col className="col-auto d-flex flex-column ">
                  <div style={{color:"rgba(255, 255, 255, 0.6)", fontSize:"17px",fontFamily:"outfit", marginLeft:"20px"}}>
                    Sold by
                  </div>
                  <div style={{color:"#fff", fontSize:"23px", fontWeight:"800",fontFamily:"outfit", marginTop:"18px"}} >
                    {product.store}
                  </div>
                </Col>
              </Row>

              <Button  onClick={handleAdd} className={`sticky-bottom ${added ? "added-btn" : "add-btn" }`} >
              {added ? " ADDED TO CART" : "ADD TO CART"}
            </Button>

            </div>
            
          </div>

        </Container>   
      </Offcanvas.Body>

    </Offcanvas>
    
      
    
  );
}