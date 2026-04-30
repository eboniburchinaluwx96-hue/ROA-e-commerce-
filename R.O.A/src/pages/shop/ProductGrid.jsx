import ProductCard from "./ProductCard";
import ProductCardSkeleton from "../shop/skeleton/ProductCardSkeleton";
import { useState } from "react";
import {products} from "../../js/products"
import {Row, Col, Container} from "react-bootstrap"


const ProductGrid= ({onSelect}) => {

  const [loading, setLoading] = useState(true);

   return (
    <Row>
      {loading ? (Array(8).fill().map((_, i) => {
        <Col>
          <ProductCardSkeleton />
        </Col>
      })) : products.map(product => {
        return (
          <Col key={product.id}>
          <ProuctCard product={product} />
        </Col>
        )
      })}
    </Row>
   )
};

export default ProductGrid;