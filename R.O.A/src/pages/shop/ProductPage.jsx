import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AnimatePresence, } from "framer-motion";
import ProductFilter from "./ProductFilter";
import ProductGrid from "./ProductGrid";
import ProductDetails from "./ProductDetails";
import ProductDrawer from "./ProductDrawer";
import FiltersSidebar from "./productFilter";
import { Navigate } from "react-router";
import MainHeader from "../../components/MainHeader";


export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);

    if (window.innerWidth < 768) {
      setShowDrawer(true);
      setShowDetails(false);
    };

  };

  return (
    <>
      <MainHeader />
      <Container className="product-page">

        {/* FILTERS */}
          <ProductFilter />
          
        {/* GRID (animated resize) */}
          <ProductGrid selectProduct={selectProduct} />

        {/* DETAILS (desktop animated switching) */}
          <div>
          
            {selectedProduct && (<ProductDetails 
            show={showDetails} 
            onHide={()=> {setShowDetails(false)}} 
            onClose={()=> setSelectedProduct(null)}
            product={selectedProduct} />
            )}
          </div>

        {/* MOBILE DRAWER (drag enabled) */}
          {selectedProduct && (
            <ProductDrawer
            show={showDrawer}
            onHide={() => setShowDrawer(false)}
            product={selectedProduct}
            onClose={()=> setSelectedProduct(null)}
            />
          )}
    </Container>
    </>
  );
}