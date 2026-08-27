import {
  Container,
  Image,
  Row,
  Col,
  Offcanvas,
  Modal,
  Form,
  FormCheck,
} from "react-bootstrap";
import {
  FaArrowLeft,
  FaSearch,
  FaStar,
  FaStore,
  FaShoppingCart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
  FaChevronDown,
  FaShoppingBag,
} from "react-icons/fa";
import { Slider } from "./components/OrderPageSlider";
import OrderDetails from "./components/OrderDetails";
import { Footer } from "../Home/components/Footer";
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import OrderStatusBadge, {
  ORDER_STATUS_CONFIG,
} from "../../pages/Store/Dashboard/orders/components/OrderStatusBadge";
import { fadedown, container } from "../../../../animation";
import MainHeader from "../../components/MainHeader";
import { X } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Prev } from "react-bootstrap/esm/PageItem";

import { getOrdersByBuyer } from "../../dummyData";

const SORT_OPTIONS = [
  { key: "newest", label: "Newest first" },
  { key: "oldest", label: "Oldest first" },
  { key: "highest", label: "Highest value" },
  { key: "lowest", label: "Lowest value" },
];

const SORT_FNS = {
  newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  highest: (a, b) => b.total - a.total,
  lowest: (a, b) => a.total - b.total,
};

const FILTER_TABS = [
  { key: "ALL", label: "All" },
  { key: "PENDING", label: "New" },
  { key: "CONFIRMED", label: "Confirmed" },
  { key: "IN_DELIVERY", label: "In delivery" },
  { key: "DELIVERED", label: "Delivered" },
  { key: "CANCELLED", label: "Cancelled" },
];

function OrderPage() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [sort, setSort] = useState("newest");
  const [sortLabel, setSortLabel] = useState("Newest first");
  const [sortOpen, setSortOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [cancelModal, setCancelModal] = useState(false);
  const [cancelLoad, setCancelLoad] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  //opens the details offcanvas
  const handleSelectedOrder = (order) => {
    setSelectedOrder(order);
    setShowDetails(true);
  };

  {
    /*  // fetch buyer orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/orders");
        setOrders(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [orders]);
 */
  }

  useEffect(() => {
    // development — use dummy data
    const myOrders = getOrdersByBuyer("user-001");
    setOrders(myOrders);
    setLoading(false);

    // production — use real API
    // const { data } = await axios.get("/api/buyer/orders");
    // setOrders(data);
  }, [orders]);

  // counts per status — useMemo
  const statusCounts = useMemo(() => {
    const counts = { ALL: orders.length };
    FILTER_TABS.slice(1).forEach((tab) => {
      counts[tab.key] = orders.filter((o) => o.status === tab.key).length;
    });
    return counts;
  }, [orders]);

  // filter + search + sort — useMemo chain
  const filtered = useMemo(() => {
    return orders.filter((order) => {
      const matchStatus = filter === "ALL" || order.status === filter;
      const matchSearch = search
        ? order.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
          order.buyer?.name.toLowerCase().includes(search.toLowerCase()) ||
          order.items?.some((i) =>
            i.product?.name.toLowerCase().includes(search.toLowerCase()),
          )
        : true;
      return matchStatus && matchSearch;
    });
  }, [orders, filter, search]);

  const sorted = useMemo(() => {
    return [...filtered].sort(SORT_FNS[sort]);
  }, [filtered, sort]);

  // active order — most recent non-delivered
  const activeOrder = useMemo(() => {
    return orders.find((o) =>
      ["PENDING", "CONFIRMED", "IN_DELIVERY"].includes(o.status),
    );
  }, [orders]);

  // cancel order — buyer can only cancel if PENDING
  const handleCancel = useCallback(async (orderId) => {
    try {
      setCancelLoad(true);
      const data = await axios.post(`/api/orders/${orderId}/cancel`);
      setOrders((Prev) => [...Prev, data]);
      setCancelModal(false);
    } catch (err) {
      console.error(err);
    } finally {
      setCancelLoad(false);
    }
  }, []);

  return (
    <>
      <MainHeader
        title="order"
        showAuth={!true}
        showCart={false}
        showSearchbtn={!true}
        search={false}
      />

      <Container>
        <section className="orders">
          {/* ACTIVE ORDER TRACKER */}
          {activeOrder && (
            <div
              className="my-5"
              onClick={() => handleSelectedOrder(activeOrder)}
              style={{
                background: "linear-gradient(135deg,#1a4a1a,#2d7a0a)",
                borderRadius: 14,
                cursor: "pointer",
              }}
            >
              <div className="d-flex align-items-center justify-content-between ">
                <div className="d-flex align-items-center gap-3">
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#c9c74c",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <p className="text-white">Active order</p>
                </div>
                <OrderStatusBadge status={activeOrder.status} />
              </div>

              <p className="text-white fs-5 my-2">{activeOrder.orderNumber}</p>
              <p>
                {activeOrder.store?.name} · {activeOrder.items?.length} item
                {activeOrder.items?.length !== 1 ? "s" : ""}
              </p>

              {/* Mini progress bar */}
              <div
                className="my-3"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: 3,
                  height: 4,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: 3,
                    background: "#cacc36",
                    width:
                      activeOrder.status === "PENDING"
                        ? "20%"
                        : activeOrder.status === "CONFIRMED"
                          ? "40%"
                          : activeOrder.status === "PROCESSING"
                            ? "60%"
                            : activeOrder.status === "IN_TRANSIT"
                              ? "80%"
                              : "100%",
                    transition: "width 0.4s ease",
                  }}
                />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <span style={{ fontSize: 11, color: "#ffffff80" }}>
                  {activeOrder.status === "IN_TRANSIT" &&
                  activeOrder.estimatedAt
                    ? `Est. delivery: ${new Date(activeOrder.estimatedAt).toLocaleDateString("en-NG", { day: "numeric", month: "short" })}`
                    : "Tap to track"}
                </span>
                <p
                  className="fw-bold"
                  style={{
                    color: "#c7c94c",
                  }}
                >
                  ₦{activeOrder.total?.toLocaleString()}
                </p>
              </div>
            </div>
          )}

          {/* SEARCH AND SORT  */}
          <Row className="align-items-center g-md-4 my-5">
            {/* SEARCH */}
            <Col className=" col-12 col-md-10 mb-4 mb-md-0">
              <div
                className="d-flex align-items-center px-3 py-3  gap-3 "
                style={{
                  background: "#0a0f0a",
                  border: "0.5px solid #1a2a1a",
                  borderRadius: 10,
                }}
              >
                <FaSearch size={20} />
                <Form.Control
                  style={{ fontSize: "14px" }}
                  className="py-2"
                  type="search"
                  placeholder="Search orders, stores or products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <X
                    size={18}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSearch("")}
                  />
                )}
              </div>
            </Col>

            {/* SORT */}
            <Col className="col-md-2  d-flex">
              <div className="ms-auto">
                <button
                  className="px-3 py-1"
                  onClick={() => setSortOpen(true)}
                  style={{
                    background: "#a7a40631",
                    border: "0.5px solid #a7a406cc",
                    borderRadius: 8,
                  }}
                >
                  <p style={{ color: "#eeea07" }}> {sortLabel}</p>{" "}
                  <FaChevronDown className="ms-2" />
                </button>{" "}
              </div>

              {/* ---- SORT BOTTOM SHEET ---- */}
              <AnimatePresence>
                {sortOpen && (
                  <Offcanvas
                    show={sortOpen}
                    onHide={() => setSortOpen(false)}
                    placement="bottom"
                    style={{
                      background: " #172417 ",
                      height: "35%",
                      overflowY: "scroll",
                    }}
                  >
                    <Container>
                      <Offcanvas.Title>
                        {" "}
                        <div className="d-flex align-items-center justify-content-between pt-3 ">
                          <h5 className="text-white">Sort orders</h5>
                          <button
                            className="d-flex align-items-center justify-content-center"
                            type="button"
                            onClick={() => setSortOpen(false)}
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: "50%",
                              background: "none",
                              border: "none",
                            }}
                          >
                            <X size={30} className="text-white" />
                          </button>
                        </div>
                      </Offcanvas.Title>

                      <Offcanvas.Body className="p-0 py-4 ">
                        {SORT_OPTIONS.map((opt) => (
                          <div className="py-2 px-2 " key={opt.key}>
                            <Form.Check
                              className="d-flex gap-3"
                              onChange={(e) => {
                                setSort(e.target.value);
                                setSortLabel(opt.label);
                                setSortOpen(false);
                              }}
                              value={opt.key}
                              label={
                                <p
                                  style={{
                                    color: sort === opt.key ? "#ddda0f" : "",
                                    fontWeight: sort === opt.key ? 600 : "",
                                  }}
                                >
                                  {opt.label}
                                </p>
                              }
                              checked={sort === opt.key}
                              type="radio"
                            />
                          </div>
                        ))}
                      </Offcanvas.Body>
                    </Container>
                  </Offcanvas>
                )}
              </AnimatePresence>
            </Col>
          </Row>

          {/* FILTER TABS */}
          <div
            className="pb-4 my-5"
            style={{
              display: "flex",
              gap: 15,
              padding: "10px 16px",
              overflowX: "auto",
              flexShrink: 0,
              msOverflowStyle: "none",
              scrollbarWidth: "thin",
            }}
            className="hide-scrollbar"
          >
            {FILTER_TABS.map((tab) => {
              const count = statusCounts[tab.key] || 0;
              const isActive = filter === tab.key;
              return (
                <button
                  className="d-flex align-items-center gap-2 px-2 "
                  key={tab.key}
                  type="button"
                  onClick={() => setFilter(tab.key)}
                  style={{
                    borderRadius: 17,
                    fontWeight: isActive ? 600 : 400,
                    whiteSpace: "nowrap",
                    transition: "all 0.15s",
                    border: `0.5px solid ${isActive ? "#cac838" : "rgba(255,255,255,0.08)"}`,

                    background: isActive ? "#c7c94c1a" : "transparent",
                  }}
                >
                  <p
                    style={{
                      color: isActive ? "#c4c714" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {" "}
                    {tab.label}
                  </p>
                  {count > 0 && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        padding: "1px 6px",
                        borderRadius: 10,
                        background: isActive
                          ? "#ccc9302c"
                          : "rgba(255,255,255,0.08)",
                        color: isActive ? "#c4c714" : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ORDER LIST */}
          <div className="my-5">
            {/* Loading */}
            {loading && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      height: 140,
                      background: "#111a11",
                      borderRadius: 14,
                      border: "0.5px solid #1a2a1a",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Empty state */}
            {!loading && filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <FaShoppingBag
                  style={{
                    fontSize: 48,

                    display: "block",
                    marginBottom: 14,
                  }}
                />
                <p className="mb-2">
                  {filter === "ALL"
                    ? "No orders yet"
                    : `No ${filter.toLowerCase().replace("_", " ")} orders`}
                </p>
                <p
                  className="mb-2"
                  style={{
                    lineHeight: 1.6,
                  }}
                >
                  {filter === "ALL"
                    ? "Your orders will appear here once you start shopping"
                    : "Orders in this status will appear here"}
                </p>
                {filter === "ALL" && (
                  <button
                    type="button"
                    onClick={() => navigate("/shop")}
                    style={{
                      padding: "11px 24px",
                      background: "#c9a84c",
                      border: "none",
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#1a1000",
                      cursor: "pointer",
                    }}
                  >
                    Start shopping →
                  </button>
                )}
              </div>
            )}

            {/* Orders */}
            {!loading && sorted.length > 0 && (
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {" "}
                <Row className="g-3">
                  {" "}
                  {sorted.map((order) => {
                    return (
                      <Col
                        key={order.id}
                        className="col-12 col-md-6 col-xl-4"
                        onClick={() => handleSelectedOrder(order)}
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        <motion.div variants={fadedown}>
                          <BuyerOrderCard order={order} />
                        </motion.div>
                      </Col>
                    );
                  })}
                </Row>
              </motion.div>
            )}
          </div>
        </section>

        {/* Order Details */}
        <OrderDetails
          show={showDetails}
          onHide={() => {
            setShowDetails(false);
          }}
          order={selectedOrder}
          loading={loading}
          handleCancel={handleCancel}
        />
      </Container>

      {/* ── FOOTER ── */}

      <Footer />
    </>
  );
}

export default OrderPage;
