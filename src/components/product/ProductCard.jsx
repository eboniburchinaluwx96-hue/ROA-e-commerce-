import { Card, CardBody, Row, Col } from "react-bootstrap";
import { FaHeart, FaStore, FaShoppingCart } from "react-icons/fa";

export default function ProductCard({
  product,
  PRODUCT_TYPE_CONFIG,
  IsWish,
  handleWishlist,
  handleAddToCart,
  showWishlist,
  Store,
  Shop,
}) {
  const productTypeConfig = PRODUCT_TYPE_CONFIG[product.type || "REGULAR"];

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  const lowStock = product.stock < product.lowStock;
  const outOfStock = product.stock === 0;

  return (
    <Card className="product-card">
      <div style={{ position: "relative" }}>
        {/* Image area */}
        {product.image?.[0] && (
          <Card.Img src={product.image} alt={product.name} />
        )}

        {/* Discount badge */}
        {Shop && discount && (
          <small
            className="fw-bold text-white p-1"
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              background: "#c0392b",
              borderRadius: 7,
            }}
          >
            -{discount}%
          </small>
        )}

        {/* Out of stock  */}
        {(Shop && product.status === "OUT_OF_STOCK" && (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
            }}
          >
            <p
              className="px-3 py-1"
              style={{
                background: "#1a1a1a",
                border: "0.5px solid #2a2a2a",
                borderRadius: 6,
              }}
            >
              Out of stock
            </p>
          </div>
        )) ||
          (Store && outOfStock && (
            <>
              <div
                className="fw-bold text-white p-1 py-0"
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  background: "#f00800",
                  borderRadius: 7,
                }}
              >
                <small>Low stock</small>
              </div>
            </>
          ))}

        {/* low stock */}
        {Store && lowStock && (
          <div
            className="fw-bold text-white p-1 py-0"
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              background: "#f09c00",
              borderRadius: 7,
            }}
          >
            <small>Low stock</small>
          </div>
        )}

        {/* Wishlist button */}
        {showWishlist && (
          <div
            className="d-inline-flex d-flex align-items-center ms-2"
            style={{ position: "absolute", top: 8, right: 8 }}
          >
            <div
              className={`p-2 ${IsWish ? "wishlist-active" : ""}`}
              onClick={(e) => handleWishlist(e, product.id)}
              style={{
                background: "rgba(22, 22, 22, 0.73)",
                borderRadius: "50%",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              <FaHeart size={18} />
            </div>
          </div>
        )}
      </div>

      <CardBody className="py-0">
        {/* Store + Category */}
        <p
          style={{
            color: "#f9fd1b",
            lineHeight: 1.4,
          }}
        >
          {Shop && (
            <>
              <FaStore className="me-1" />
              {product.store?.name || product.store}{" "}
              <span className="mx-1 fw-bold">·</span>{" "}
            </>
          )}
          {product.category}
        </p>

        {/* Name */}
        <div className="my-2 product-name">{product.name}</div>

        {/* Rating */}
        {Shop && (
          <div className="meta align-items-center">
            <img
              className="ratings-image"
              src={`/ratings/rating-${product.rating.stars * 10}.png`}
              alt=""
            />
            <span>{product.rating.count.toLocaleString()}</span>
          </div>
        )}

        {/* CAR specs */}
        {Shop && product.type === "CAR" && product.listingMeta && (
          <div className="d-flex gap-4 mb-3 flex-wrap align-items-center">
            {[
              product.listingMeta.year,
              product.listingMeta.transmission,
              product.listingMeta.fuel,
            ]
              .filter(Boolean)
              .map((spec) => {
                return (
                  <p
                    className="px-2 py-1 text-dark"
                    key={spec}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "10px",
                    }}
                  >
                    {spec}
                  </p>
                );
              })}
          </div>
        )}

        {/* Price */}
        <div
          className="d-flex align-items-center mt-3 mb-4 gap-2 gap-md-3 flex-wrap "
          style={{ overflow: "hidden", lineHeight: 1 }}
        >
          <div className="price">&#8358; {product.price.toLocaleString()}</div>
          {Shop && product.oldPrice && (
            <small className="old-price " style={{ color: "#b4b4b4b0" }}>
              &#8358; {product.oldPrice.toLocaleString()}
            </small>
          )}
        </div>

        {/* stock and status */}
        {Store && (
          <>
            <div className="d-flex align-items-center gap-2">
              <p>Stock:</p> <p>24 units</p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-3">
              <p>Status:</p>{" "}
              <small
                className=" "
                style={{
                  color: "#61dd0f",
                }}
              >
                Active
              </small>
            </div>
          </>
        )}

        {/* CTA */}
        {(Shop && (
          <button
            onClick={(e) => handleAddToCart(e, product)}
            disabled={product.status === "OUT_OF_STOCK"}
            className=" py-1   mx-auto my-4 d-flex w-100 justify-content-center"
            style={{
              border: `1px solid ${product.status === "OUT_OF_STOCK" ? "#2a2a2a" : productTypeConfig.ctaColor}`,
              background:
                product.status === "OUT_OF_STOCK"
                  ? "#1a1a1ac0"
                  : productTypeConfig.ctaBg,
              color:
                product.status === "OUT_OF_STOCK"
                  ? "#555"
                  : productTypeConfig.ctaText,
              borderRadius: "10px",
              cursor: product.status === "OUT_OF_STOCK" ? "default" : "pointer",
              transition: "all 0.15s",
            }}
          >
            {product.status === "OUT_OF_STOCK"
              ? "Out of stock"
              : productTypeConfig.cta}
          </button>
        )) ||
          (Store && (
            <div>
              {[
                { a: "Edit", bg: "#149ec0e0", border: null },
                { a: "Pause", bg: "transparent", border: "#ffffff96" },
                { a: "Delete", bg: "#f00800de", border: null },
              ].map((cta) => {
                return !lowStock ? (
                  <button
                    className=" py-1  mx-auto my-4 d-flex w-100 justify-content-center "
                    style={{
                      background: cta.bg,
                      border: cta.border ? `0.5px solid ${cta.border}` : "none",
                      color: "#fff",
                      borderRadius: "12px",
                    }}
                  >
                    {cta.a}
                  </button>
                ) : (
                  <button
                    className=" py-1  mx-auto my-4 d-flex w-100 justify-content-center "
                    style={{
                      background: "#f00800",
                      border: "none",
                      color: "#fff",
                      borderRadius: "12px",
                    }}
                  >
                    {cta.a}
                  </button>
                );
              })}
            </div>
          ))}
      </CardBody>
    </Card>
  );
}
