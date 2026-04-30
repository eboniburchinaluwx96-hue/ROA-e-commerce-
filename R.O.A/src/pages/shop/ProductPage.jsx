import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import ProductDetailsSkeleton from "../shop/skeleton/ProductDetailsSkeleton";
import ProductGrid from "./ProductGrid";
import ProductDetails from "./ProductDetails";
import ProductDrawer from "./ProductDrawer";
import FiltersSidebar from "./productFilter";


export default function ProductPage() {
  const [selected, setSelected] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleSelect = (product) => {
    setSelected(product);

    if (window.innerWidth < 768) {
      setShowDrawer(true);
    }
  };

  const MotionDiv = motion.div;

  return (
    <Container fluid className="product-page">

      {/* FILTERS */}
      <div className="d-none d-md-block">
        <FiltersSidebar />
      </div>

      <Row>

        {/* GRID (animated resize) */}
        <Col lg={selected ? 7 : 12} md={selected ? 7 : 12}>
          <MotionDiv layout>
            <ProductGrid onSelect={handleSelect} />
          </MotionDiv>
        </Col>

        {/* DETAILS (desktop animated switching) */}
        <Col md={5} lg={5} className="d-none d-md-block d-lg-block">
          <AnimatePresence mode="wait">
            {selected && (<ProductDetails product={selected} />
            )}
          </AnimatePresence>
        </Col>
      </Row>

      {/* MOBILE DRAWER (drag enabled) */}
      <ProductDrawer
        show={showDrawer}
        onHide={() => setShowDrawer(false)}
        product={selected}
      />
    </Container>
  );
}