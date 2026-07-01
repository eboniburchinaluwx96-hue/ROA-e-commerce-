import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductFilter from "./ProductFilter";
import ProductGrid from "./ProductGrid";
import ProductDetails from "./ProductDetails";
import ProductDrawer from "./ProductDrawer";
import products from "../../js/products";
import MainHeader from "../../components/MainHeader";

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectkeyword, setSelectedKeyword] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);

    if (window.innerWidth < 768) {
      setShowDrawer(true);
      setShowDetails(false);
    }
  };

  const filterProduct = products.filter((p) => {
    const matchesKeyword =
      selectkeyword === "" || p.keywords.includes(selectkeyword);

    const matchesPrice =
      selectedPrice === "" ||
      (selectedPrice === "0-50" && p.price >= 0 && p.price <= 50) ||
      (selectedPrice === "50-100" && p.price > 50 && p.price <= 100) ||
      (selectedPrice === "100-200" && p.price > 100 && p.price <= 200) ||
      (selectedPrice === "200+" && p.price > 200);

    return matchesKeyword && matchesPrice;
  });

  const keywords = [...new Set(products.flatMap((p) => p.keywords))];

  return (
    <>
      <Container className="product-page">
        <MainHeader
          showAuth={!true}
          showCart={true}
          showSearchbtn={true}
          showWishlist={true}
        />

        {/* FILTERS */}
        <ProductFilter
          selectkeyword={selectkeyword}
          setSelectedKeyword={setSelectedKeyword}
          keywords={keywords}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />

        {/* GRID (animated resize) */}
        <ProductGrid
          selectProduct={selectProduct}
          filterProduct={filterProduct}
        />

        {/* DETAILS (desktop animated switching) */}

        <ProductDetails
          show={showDetails}
          onHide={() => {
            setShowDetails(false);
          }}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />

        {/* MOBILE DRAWER (drag enabled) */}
        <ProductDrawer
          show={showDrawer}
          onHide={() => setShowDrawer(false)}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </Container>
    </>
  );
}
