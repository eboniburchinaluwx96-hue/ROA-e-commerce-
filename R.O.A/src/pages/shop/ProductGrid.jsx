import ProductCard from "./ProductCard";
import {products} from "../../js/products"
import {Row, Col, Container} from "react-bootstrap"


const ProductGrid= ({onSelect}) => {

   return (
    <Row>
      {products.map(product => {
        return (
          <Col key={product.id}>
          <ProuctCard product={product} onClick={onSelect} />
        </Col>
        )
      })}
    </Row>
   )
};

export default ProductGrid;