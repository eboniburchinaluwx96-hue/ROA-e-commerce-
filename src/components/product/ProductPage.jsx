import { useState, useMemo, useCallback } from "react";
import { Container } from "react-bootstrap";
import ProductFilter from "./ProductFilter";
import ProductGrid from "./ProductGrid";
import ProductDetails from "./ProductDetails";
import ProductDrawer from "./ProductDrawer";
import {
  FaCouch,
  FaFootballBall,
  FaHandSparkles,
  FaMobile,
  FaShirtsinbulk,
  FaShoePrints,
  FaTools,
  FaUtensils,
} from "react-icons/fa";
import { Book, Building, CarFront, Leaf } from "react-bootstrap-icons";

// config per product TYPE
const PRODUCT_TYPE_CONFIG = {
  REGULAR: {
    cta: "Add to cart",
    ctaColor: "#ecf01f",
    ctaBg: "#202001e8",
    ctaText: "#fbff00",
    showStock: true,
    showSpecs: false,
  },
  CAR: {
    cta: "Contact seller",
    ctaColor: "#29f7b6",
    ctaBg: "transparent",
    ctaText: "#00ffae",
    showStock: false,
    showSpecs: true, // shows km, transmission etc
  },
  REAL_ESTATE: {
    cta: "Schedule visit",
    ctaColor: "#6df84a",
    ctaBg: "transparent",
    ctaText: "#33fd00",
    showStock: false,
    showSpecs: true, // shows beds, baths etc
  },
};
// config per CATEGORY — controls Icon and color

const SORT_CONFIG = {
  "Newest first": (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  "Oldest first": (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  "Price: low to high": (a, b) => a.price - b.price,
  "Price: high to low": (a, b) => b.price - a.price,
};

export default function ProductPage({
  filter = true,
  product,
  count = true,
  Store = true,
  Shop = true,
  showWishlist = true,
  showBtn = true,
}) {
  // const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("Newest first");
  const [IsWish, setIsWish] = useState("");

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);

    if (window.innerWidth < 750) {
      setShowDrawer(true);
      setShowDetails(false);
    }
  };

  // filtering by category and search
  const filtered = useMemo(() => {
    return product.filter((p) => {
      const matchCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchSearch = search
        ? p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.keywords?.some((k) =>
            k.toLowerCase().includes(search.toLowerCase()),
          )
        : true;
      return matchCategory && matchSearch;
    });
  }, [product, search, selectedCategory]);

  // sorting filtered results
  const sorted = useMemo(() => {
    return [...filtered].sort(SORT_CONFIG[sort]);
  }, [filtered, sort]);

  // handle add to cart — useCallback
  const handleAddToCart = useCallback((e, product) => {
    e.stopPropagation();
    console.log("Add to cart:", product.id);
  }, []);

  // handle wishlist — useCallback
  const handleWishlist = useCallback((e, product) => {
    e.stopPropagation();
    setIsWish((p) => !p);
    console.log("Toggle wishlist:", product);
  }, []);

  const category = ["All", ...new Set(product.flatMap((p) => p.category))];

  const STORE_FILTER = ["All", "Active", "Out of stock"];

  return (
    <>
      <div className="product-page">
        {/* FILTERS */}
        {filter && (
          <ProductFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            category={category}
            setSort={setSort}
            sort={sort}
            STORE_FILTER={STORE_FILTER}
            Shop={Shop}
            Store={Store}
          />
        )}

        {/* Results count */}
        {count && (
          <div className="py-3 py-lg-5 d-flex align-items-center gap-4">
            <h6>
              {sorted.length} product{sorted.length !== 1 ? "s" : ""}
            </h6>
          </div>
        )}

        {/* GRID */}
        <ProductGrid
          selectProduct={selectProduct}
          sorted={sorted}
          IsWish={IsWish}
          handleAddToCart={handleAddToCart}
          handleWishlist={handleWishlist}
          PRODUCT_TYPE_CONFIG={PRODUCT_TYPE_CONFIG}
          showWishlist={showWishlist}
          showBtn={showBtn}
          Store={Store}
          Shop={Shop}
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
      </div>
    </>
  );
}
