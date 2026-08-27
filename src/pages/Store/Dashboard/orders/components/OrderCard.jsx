// components/OrderCard.jsx

import OrderStatusBadge from "../components/OrderStatusBadge";
import { FiMessageCircle } from "react-icons/fi";
import { ArrowRight } from "react-bootstrap-icons";

function timeAgo(dateString) {
  const diff = Date.now() - new Date(dateString).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(dateString).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
  });
}

export default function OrderCard({
  order,
  onActionClick,
  handleSelectedOrder,
}) {
  const isNew = order.status === "PENDING";
  const isDelivered = order.status === "DELIVERED";
  const isCancelled = order.status === "CANCELLED";

  // primary action button per status
  const getAction = () => {
    switch (order.status) {
      case "PENDING":
        return {
          label: "Confirm order",
          color: "#d8c51b",
          bg: "#bdaf2f25",
          border: "#bdaf2f4f",
          nextStatus: "CONFIRMED",
        };
      case "CONFIRMED":
        return {
          label: "mark as in-delivery",
          color: "#a411df",
          bg: "rgba(156, 89, 182, 0.17)",
          border: "#9733b675",
          nextStatus: "IN_DELIVERY",
        };

      case "IN_DELIVERY":
        return {
          label: "Mark as delivered",
          color: "#13dd9d",
          bg: "#1d9e7527",
          border: "#1d9e755d",
          nextStatus: "DELIVERED",
        };
      default:
        return null;
    }
  };

  const action = getAction();

  return (
    <div
      style={{
        background: "#090e09d5",
        border: `1.5px solid ${isNew ? "#fffb008a" : "#1f3d1f"}`,
        borderRadius: 14,
        overflow: "hidden",
        position: "relative",
        transition: "border-color 0.2s",
      }}
    >
      {/* New order pulse indicator */}
      {isNew && (
        <div
          className=""
          style={{
            position: "absolute",
            top: -20,
            right: -5,
          }}
        >
          <FaShoppingBasket
            size={40}
            style={{
              color: " #fffb00",
            }}
          />
        </div>
      )}

      <div className="p-3 p-sm-4 p-lg-5">
        {/* Top row — order number + time + status */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <p>{timeAgo(order.createdAt)}</p>
            <h6 className="fw-bold text-white">{order.orderNumber}</h6>
          </div>
          <OrderStatusBadge status={order.status} />
        </div>

        {/* Order items */}
        {order.items?.slice(0, 2).map((item, i) => (
          <div className="d-flex align-items-center gap-4 mb-4" key={i}>
            {/* Product image */}
            <div
              style={{
                width: 65,
                aspectRatio: 1 / 1,
                borderRadius: 8,
                background: "#1a2a1a",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              {item.product?.images?.[0] ? (
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaShoppingBasket style={{ fontSize: 25 }} />
                </div>
              )}
            </div>

            {/* Item info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                className="text-white mb-2"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.product?.name}
              </p>

              <div>
                <div className="d-flex align-items-center flex-wrap gap-2 gap-sm-3 gap-lg-4">
                  <h6>Qty: {item.quantity}</h6>
                  {item.variant && (
                    <p
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: 5,
                        padding: "1px 6px",
                      }}
                    >
                      {Object.values(item.variant).join(" · ")}
                    </p>
                  )}
                </div>
                <p
                  className="ms-auto fw-bold"
                  style={{
                    color: "#58c22e",
                  }}
                >
                  ₦{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* More items indicator */}
        {order.items?.length > 2 && (
          <p
            className="text-center"
            style={{
              fontSize: 11,
              marginBottom: 10,
            }}
          >
            +{order.items.length - 2} more item
            {order.items.length - 2 !== 1 ? "s" : ""}
          </p>
        )}

        {/* Buyer + delivery info */}
        <div
          className="d-flex  justify-content-between py-2"
          style={{
            alignItems: "flex-start",
            borderTop: "0.5px solid #1c441c",
          }}
        >
          <div>
            <p>Buyer</p>
            <p className="text-white fs-5">{order.buyer?.name}</p>
            <p>
              📍 {order.deliveryAddress?.city}, {order.deliveryAddress?.state}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p>Order total</p>
            <p
              className="fs-5 fw-bold"
              style={{
                color: "#c9c74c",
              }}
            >
              ₦{order.total?.toLocaleString()}
            </p>
            <p style={{ color: "#1D9E75" }}>Paid · {order.paymentMethod}</p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div
        className="flex-column  d-flex gap-4 p-3 "
        style={{
          borderTop: "0.5px solid #1c441c",
        }}
      >
        {/* Contact buyer */}
        <button
          className="d-flex align-items-center gap-3 justify-content-center"
          type="button"
          //  onClick={() => navigate(`/seller/chat/${order.buyer?.id}`)}
          style={{
            flex: 1,
            padding: "9px 0",
            background: "rgba(255, 255, 255, 0.1)",
            border: "0.5px solid #ffffff4a",
            borderRadius: 10,
          }}
        >
          <FiMessageCircle className="text-white" style={{ fontSize: 20 }} />
          <p className="text-white"> Contact buyer</p>
        </button>

        {/* Primary action */}
        {action && !isCancelled && !isDelivered && (
          <button
            className="fw-bold align-items-center justify-content-center d-flex gap-2"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onActionClick(order.id, action.nextStatus);
            }}
            style={{
              flex: 1,
              padding: "9px 0",
              background: action.bg,
              border: `0.5px solid ${action.border}`,
              borderRadius: 10,
              color: action.color,
            }}
          >
            <ArrowRight style={{ fontSize: 20 }} />
            {action.label}
          </button>
        )}

        {/* Delivered — show rate buyer */}
        {isDelivered && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleSelectedOrder(order);
            }}
            style={{
              flex: 1,
              padding: "9px 0",
              background: "#1d9e7534",
              border: "0.5px solid #1d9e75ab",
              borderRadius: 10,
            }}
          >
            <p className="fw-bold " style={{ color: "#0fc78d" }}>
              {" "}
              <span style={{ fontSize: 20 }}>✓</span> Completed
            </p>
          </button>
        )}

        {/* Cancelled — show refund info */}
        {isCancelled && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleSelectedOrder(order);
            }}
            style={{
              flex: 1.5,
              padding: "9px 0",
              background: "rgba(192, 58, 43, 0.2)",
              border: "0.5px solid rgba(192, 58, 43, 0.65)",
              borderRadius: 10,
            }}
          >
            <p className="fw-bold" style={{ color: "#e6210b" }}>
              {" "}
              View details
            </p>
          </button>
        )}
      </div>
    </div>
  );
}
