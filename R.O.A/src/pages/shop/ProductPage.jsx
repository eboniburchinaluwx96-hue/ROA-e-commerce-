import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import ProductDetailsSkeleton from "../shop/skeleton/ProductDetailsSkeleton";
import ProductGrid from "./ProductGrid";
import ProductDetails from "./ProductDetails";
import ProductDrawer from "./ProductDrawer";
import FiltersSidebar from "./FiltersSidebar";

import "./product.scss";

export default function ProductPage() {
  const [selected, setSelected] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSelect = (product) => {
    setSelected(product);

    if (window.innerWidth < 768) {
      setShowDrawer(true);
    }
  };

  return (
    <Container fluid className="product-page">
      <Row>
        {/* FILTERS */}
        <Col lg={2} className="d-none d-lg-block">
          <FiltersSidebar />
        </Col>

        {/* GRID (animated resize) */}
        <Col lg={selected ? 7 : 12} md={selected ? 7 : 12}>
          <motion.div layout>
            <ProductGrid onSelect={handleSelect} />
          </motion.div>
        </Col>

        {/* DETAILS (desktop animated switching) */}
        <Col md={5} lg={5} className="d-none d-md-block d-lg-block">
          <AnimatePresence mode="wait">
            {selected && (
              loading ? <ProductDetailsSkeleton /> : <ProductDetails product={selected} />
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