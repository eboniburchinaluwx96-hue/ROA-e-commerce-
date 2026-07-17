import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductFilter from "./ProductFilter";
import ProductGrid from "./ProductGrid";
import ProductDetails from "./ProductDetails";
import ProductDrawer from "./ProductDrawer";
import products from "../../js/products";
import MainHeader from "../../components/MainHeader";

const product = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    store: "Moda House",
    rating: {
      stars: 4.5,
      count: 87,
    },

    description:
      "Breathable linen blend with adjustable wrap silhouete. perfect for all kind of utilities in the kitchen",
    delivery: "2-3 days",
    sizes: ["XS", "S", "M", "L"],

    price: 1090,
    oldPrice: 1200,
    keywords: ["socks", "sports", "apparel"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127,
    },
    price: 2095,
    store: "Mide's Gem",
    keywords: ["sports", "basketballs"],
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    store: "Annointed Chips",
    price: 799,
    keywords: ["tshirts", "apparel", "mens"],
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.jpg",
    name: "Blackout Curtains Set - Beige",
    rating: {
      stars: 4.5,
      count: 232,
    },
    price: 4599,
    keywords: ["bedroom", "curtains", "home"],
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/women-summer-jean-shorts.jpg",
    name: "Women's Summer Jean Shorts",
    rating: {
      stars: 4,
      count: 160,
    },
    price: 1699,
    keywords: ["shorts", "apparel", "womens"],
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-steel-hot-water-kettle-white.jpg",
    name: "Electric Hot Water Kettle - White",
    rating: {
      stars: 5,
      count: 846,
    },
    price: 5074,
    keywords: ["water kettle", "appliances", "kitchen"],
  },
];

export default function ProductPage({
  showHeader = true,
  filter = true,
  showFilterProduct,
}) {
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
        {showHeader && (
          <MainHeader
            showAuth={!true}
            showCart={true}
            showSearchbtn={true}
            showWishlist={true}
          />
        )}

        {/* FILTERS */}
        {filter && (
          <ProductFilter
            selectkeyword={selectkeyword}
            setSelectedKeyword={setSelectedKeyword}
            keywords={keywords}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
        )}

        {/* GRID (animated resize) */}
        <ProductGrid
          selectProduct={selectProduct}
          filterProduct={filterProduct}
          featuredProduct={product}
          showFilterProduct={showFilterProduct}
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
