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
import { useState } from "react";
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
} from "react-icons/fa";
import { Slider } from "./components/OrderPageSlider";
import OrderDetails from "./components/OrderDetails";
import { Prev } from "react-bootstrap/esm/PageItem";
import { Footer } from "../Home/component/Footer";
import MainHeader from "../../components/MainHeader";

const SORT_OPTIONS = [
  "Newet first",
  "Oldest first",
  "low to high",
  "high to low",
];

function OrderPage() {
  //const [orders, setOrders] = useState("initailOrders");
  const [viewDetails, setViewDetails] = useState(false);
  const [sortShow, setSortShow] = useState(false);
  const [sortLabel, setSortLabel] = useState("Newest first");

  function handleSort(value) {
    setSortLabel(value);
    setSortShow(false);

    setOrders((prev) =>
      [...prev].sort((a, b) => {
        if (value === "Newest first")
          return new Date(b.date) - new Date(a.date);
        if (value === "Oldest first")
          return new Date(a.date) - new Date(b.date);
        if (value === "low to high") return a.price - b.price;
        if (value === "high to low") return b.price - a.price;

        return 0;
      }),
    );
  }

  return (
    <>
      <MainHeader title="Orders" showAuth={!true} showSearchbtn={!true} />

      <Container>
        <section className="orders">
          <div style={{ borderBottom: "1px solid  rgba(255, 238, 0, 0.42)" }}>
            <h1 className="text-light my-4" style={{ letterSpacing: 1 }}>
              My Orders
            </h1>
            <p className="mb-4">All your orders placed across R.O.A stores</p>
          </div>

          <Row className="align-items-center">
            <Col className="col-12 col-sm-8 ">
              <div
                className="d-inline-flex align-items-center  gap-3 ps-3 my-4 w-100"
                style={{ border: "1px solid  rgba(255, 238, 0, 0.42)" }}
              >
                <FaSearch />
                <input
                  className="py-3 w-100"
                  type="search"
                  name=""
                  id=""
                  placeholder="Search orders, stores, items..."
                />
              </div>
            </Col>

            <Col>
              <div className="my-4">
                <button
                  onClick={() => setSortShow(true)}
                  style={{
                    background: "transparent",
                    color: "rgba(194, 194, 194, 0.83)",
                    padding: " 10px",
                  }}
                >
                  {sortLabel} <FaChevronDown className="ms-2" />
                </button>{" "}
              </div>

              {/* Modal */}
              <Modal show={sortShow} onHide={() => setSortShow(false)} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Sort by</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    {SORT_OPTIONS.map((opt) => {
                      return (
                        <Form.Check
                          className="py-2"
                          style={{ fontSize: "20px" }}
                          key={opt}
                          id={opt}
                          type="radio"
                          label={opt}
                          name="sortGroup"
                          value={opt}
                          checked={sortLabel === opt}
                          onChange={(e) => handleSort(e.target.value)}
                        />
                      );
                    })}
                  </Form>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>

          <Slider />

          <Row>
            <Col className="col-12 col-md-6 col-lg-4">
              <div
                className="mt-5 "
                style={{
                  border: "1px solid  rgba(255, 238, 0, 0.42)",
                  borderLeft: "5px solid #e2960a",
                  background: "#00000044",
                  height: "400px",
                }}
              >
                <div
                  className="py-3 py-md-0"
                  style={{
                    borderBottom: "1px solid  rgba(255, 238, 0, 0.12)",
                  }}
                >
                  <div className="px-3 py-2">
                    <div className="d-flex align-items-center p-2">
                      <div
                        style={{ color: "rgb(255, 251, 5)", letterSpacing: 1 }}
                      >
                        <span style={{ fontSize: "22px" }}>#ROA</span>
                        -2026-00881
                      </div>

                      <div className="mx-auto">12 Jun 2026</div>
                    </div>

                    <div className="d-flex align-items-center gap-5 p-2 ">
                      <div
                        className="d-inline-flex align-items-center gap-2 px-3 py-1"
                        style={{
                          background: "#6d48043b",
                          border: "1px solid #e2960a",
                          color: "#e2960a",
                        }}
                      >
                        <div
                          style={{
                            background: " #e2960a",
                            borderRadius: "50%",
                            padding: "3px",
                          }}
                        ></div>
                        <div>IN TRANSIT</div>
                      </div>

                      <div
                        className="mx-auto"
                        style={{ color: "rgb(255, 251, 5)" }}
                      >
                        &#8358;14,300
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{ borderBottom: "1px solid  rgba(255, 238, 0, 0.42)" }}
                >
                  <div className="px-4 py-2">
                    <Row className="align-items-center">
                      <Col>
                        <div className="d-flex gap-2">
                          <Image
                            style={{ objectFit: "cover", aspectRatio: "1/1" }}
                            width={50}
                            src="/images/profile.jpg"
                          />

                          <Image
                            style={{ objectFit: "cover", aspectRatio: "1/1" }}
                            width={50}
                            src="/images/profile.jpg"
                          />
                        </div>
                      </Col>

                      <Col>
                        <h6 className="text-light">Shea Body Oil, Suya...</h6>
                        <small>
                          2 items . Zara Skin Studio, Tunde's Kitchen
                        </small>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div>
                  <div className="p-4">
                    <Row className="align-items-center g-3">
                      <Col>
                        <button
                          className="d-inline-flex align-items-center gap-2  p-2"
                          style={{
                            background: "transparent",

                            color: "rgb(255, 251, 5)",
                          }}
                        >
                          <div
                            style={{
                              background: "rgb(255, 251, 5)",
                              borderRadius: "50%",
                              padding: "3px",
                            }}
                          ></div>
                          <div>TRACK</div>
                        </button>
                      </Col>

                      <Col>
                        <button
                          onClick={() => setViewDetails(true)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "rgb(255, 251, 5)",
                          }}
                        >
                          VIEW DETAILS...
                        </button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>

            <Col className="col-12 col-md-6 col-lg-4">
              <div
                className="mt-5 "
                style={{
                  border: "1px solid  rgba(255, 238, 0, 0.42)",
                  borderLeft: "5px solid #34d30d",
                  background: "#00000044",
                  height: "400px",
                }}
              >
                <div
                  className="py-3 py-md-0"
                  style={{
                    borderBottom: "1px solid  rgba(255, 238, 0, 0.12)",
                  }}
                >
                  <div className="px-3 py-2">
                    <div className="d-flex align-items-center p-2">
                      <div
                        style={{ color: "rgb(255, 251, 5)", letterSpacing: 1 }}
                      >
                        <span style={{ fontSize: "22px" }}>#ROA</span>
                        -2026-00881
                      </div>

                      <div className="mx-auto">12 Jun 2026</div>
                    </div>

                    <div className="d-flex align-items-center gap-5 p-2 ">
                      <div
                        className="d-inline-flex align-items-center gap-2 px-3 py-1"
                        style={{
                          background: "#35d30d1c",
                          border: "1px solid #34d30d",
                          color: "#34d30d",
                        }}
                      >
                        <div
                          style={{
                            background: " #34d30d",
                            borderRadius: "50%",
                            padding: "3px",
                          }}
                        ></div>

                        <div>DELIVERED</div>
                      </div>

                      <div
                        className="mx-auto"
                        style={{ color: "rgb(255, 251, 5)" }}
                      >
                        &#8358;14,300
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{ borderBottom: "1px solid  rgba(255, 238, 0, 0.42)" }}
                >
                  <div className="px-4 py-2">
                    <Row className="align-items-center">
                      <Col>
                        <div className="d-flex gap-2">
                          <Image
                            style={{ objectFit: "cover", aspectRatio: "1/1" }}
                            width={50}
                            src="/images/profile.jpg"
                          />

                          <Image
                            style={{ objectFit: "cover", aspectRatio: "1/1" }}
                            width={50}
                            src="/images/profile.jpg"
                          />
                        </div>
                      </Col>

                      <Col>
                        <h6 className="text-light">Shea Body Oil, Suya...</h6>
                        <small>
                          2 items . Zara Skin Studio, Tunde's Kitchen
                        </small>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div>
                  <div className="p-4">
                    <Row className="align-items-center g-3">
                      <Col>
                        <button
                          className=" d-inline-flex p-2"
                          style={{
                            background: "rgba(37, 37, 37, 0.06)",
                            color: "rgba(194, 194, 194, 0.83)",
                          }}
                        >
                          <div>REORDER</div>
                        </button>
                      </Col>

                      <Col>
                        <button
                          onClick={() => setViewDetails(true)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "rgb(255, 251, 5)",
                          }}
                        >
                          VIEW DETAILS...
                        </button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="my-5">
            <div>
              <h6>Showing 3 of 14 orders</h6>
            </div>

            <div className="d-flex gap-2 mt-3">
              <button
                style={{
                  background: "rgb(255, 251, 5)",
                  padding: "8px 12px",
                  border: "none",
                }}
              >
                1
              </button>

              <button
                style={{
                  background: "transparent",
                  padding: "8px 12px",
                  color: "rgba(194, 194, 194, 0.83)",
                }}
              >
                2
              </button>

              <button
                style={{
                  background: "transparent",
                  padding: "8px 12px",
                  color: "rgba(194, 194, 194, 0.83)",
                }}
              >
                3
              </button>

              <button
                style={{
                  background: "transparent",
                  padding: "8px 12px",
                  color: "rgba(194, 194, 194, 0.83)",
                }}
              >
                ...
              </button>
            </div>
          </div>
        </section>

        {/* Order Details */}

        {viewDetails && (
          <OrderDetails
            show={viewDetails}
            onHide={() => setViewDetails(false)}
          />
        )}
      </Container>

      {/* ── FOOTER ── */}

      <Footer />
    </>
  );
}

export default OrderPage;
