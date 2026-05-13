import ProductCard from "./ProductCard";
import {products} from "../../js/products"
import {Row, Col, Container} from "react-bootstrap"


const ProductGrid= ({ selectProduct }) => {

   return (
    <div>
      <Row>
      {products.map(product => {
        return (
          <Col  className="col-12 col-sm-4 col-md-3 col-lg-2" key={product.id} onClick={()=> selectProduct(product)} >
          <ProductCard product={product} />
        </Col>
        )
      })}
    </Row>
    </div>
   )
};

export default ProductGrid;