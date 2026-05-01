import ProductCard from "./ProductCard";
import {products} from "../../js/products"
import {Row, Col, Container} from "react-bootstrap"


const ProductGrid= ({ selectProduct }) => {

   return (
    <div className="product-grid">
      <Row>
      {products.map(product => {
        return (
          <Col key={product.id} onClick={()=> selectProduct(product)} >
          <ProductCard product={product} />
        </Col>
        )
      })}
    </Row>
    </div>
   )
};

export default ProductGrid;