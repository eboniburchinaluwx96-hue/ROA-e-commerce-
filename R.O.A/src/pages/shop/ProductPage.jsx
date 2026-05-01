import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import ProductDetailsSkeleton from "../shop/skeleton/ProductDetailsSkeleton";
import ProductGrid from "./ProductGrid";
import ProductDetails from "./ProductDetails";
import ProductDrawer from "./ProductDrawer";
import FiltersSidebar from "./productFilter";
import { Navigate } from "react-router";


export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);

  const selectProduct = (product) => {
    console.log(product);

    if (window.innerWidth < 768) {
      setShowDrawer(true);
    };

  };

  const MotionDiv = motion.div;

  return (
    <Container className="product-page">

      {/* FILTERS */}
      <div className="d-none d-md-block d-flex justify-content-center">
        <FiltersSidebar />
      </div>

      <Row>

        {/* GRID (animated resize) */}
        <Col md={selectedProduct ? 7 : 12}>
          <MotionDiv layout>
            
            <ProductGrid selectProduct={selectProduct} />
          
          </MotionDiv>
        </Col>

        {/* DETAILS (desktop animated switching) */}
        <Col md={5} className="d-none d-md-block">
          <AnimatePresence mode="wait">
            {selectedProduct && (<ProductDetails product={selectedProduct} />
            )}
          </AnimatePresence>
        </Col>
      </Row>

      {/* MOBILE DRAWER (drag enabled) */}
      <ProductDrawer
        show={showDrawer}
        onHide={() => setShowDrawer(false)}
        product={selectedProduct}
      />
    </Container>
  );
}