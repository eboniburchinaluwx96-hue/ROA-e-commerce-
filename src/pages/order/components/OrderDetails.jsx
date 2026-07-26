import { Container, Image, Row, Col, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaDownload,
  FaCheck,
  FaStar,
  FaStore,
  FaChevronRight,
} from "react-icons/fa";
import { Slider } from "./OrderDetailsSlider";

function OrderDetails({ show, onHide }) {
  return (
    <Offcanvas
      style={{
        background:
          "radial-gradient(circle,rgba(49, 49, 1, 0.993)20%, rgb(2, 44, 24))",
        width: "550px",
        color: "rgba(194, 194, 194, 0.83)",
      }}
      show={show}
      onHide={onHide}
      placement="start"
    >
      <Offcanvas.Body className="order-details">
        <Container>
          <button
            onClick={onHide}
            className="d-flex ms-auto"
            style={{
              color: "#fff",
              background: "none",
              border: "none",
            }}
          >
            X
          </button>

          <h3 className="mb-4">ORDER DETAIL</h3>
          <h5
            style={{
              color: "rgb(255, 251, 5)",
              marginTop: "12px",
              letterSpacing: 2,
            }}
          >
            <span style={{ color: "#fff", fontSize: "32px" }}>Order</span>{" "}
            <span style={{ fontSize: "32px" }}>#ROA</span> -2026-00892
          </h5>

          <div className="d-flex align-items-center gap-3 my-2">
            <h6>Placed 15 Jun 2026</h6>

            <div
              style={{
                borderRadius: "50%",
                background: "rgba(194, 194, 194, 0.83)",
                padding: "3px",
              }}
            ></div>

            <div className="d-flex align-items-center gap-1">
              <h6>3 items</h6>

              <div
                style={{
                  borderRadius: "50%",
                  background: "rgba(194, 194, 194, 0.83)",
                  padding: "2px",
                }}
              ></div>

              <h6>2 sellers</h6>
            </div>

            <div
              style={{
                borderRadius: "50%",
                background: "rgba(194, 194, 194, 0.83)",
                padding: "3px",
              }}
            ></div>
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
          </div>

          <Row g-5 className="my-4 align-items-center">
            <Col>
              <button
                style={{
                  background: "none",
                  color: "rgba(194, 194, 194, 0.83)",
                  padding: " 5px 10px",
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <FaDownload />
                  <h6>RECEIPT</h6>
                </div>
              </button>
            </Col>

            <Col>
              <button
                style={{
                  background: "none",
                  color: "rgba(194, 194, 194, 0.83)",
                  padding: " 5px 10px",
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <h6>TRACK</h6>
                </div>
              </button>
            </Col>

            <Col>
              <button
                style={{
                  background: "rgb(255, 251, 5)",
                  color: "#000",
                  padding: " 5px 10px",
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <h6>REORDER ALL</h6>
                </div>
              </button>
            </Col>
          </Row>

          {/* Order products info card */}

          <div
            className="my-5"
            style={{
              border: "1px solid rgba(255, 238, 0, 0.275)",
              borderBottom: "0",
            }}
          >
            <div
              className="px-4 py-2 "
              style={{
                borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
              }}
            >
              <h6
                style={{
                  color: "rgb(255, 238, 0)",
                  letterSpacing: 1.2,
                }}
              >
                ITEMS ORDERED (2)
              </h6>
            </div>

            {/* ORDER ITEMS */}

            <div
              className="p-4 item-order"
              style={{
                borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
              }}
            >
              <Row g-5>
                <Col className="col-3 col-sm-3 col-md-1 col-lg-2 ">
                  <Slider />
                </Col>

                <Col>
                  <div className="d-flex flex-column ">
                    <h5 className="text-light">
                      <b>Ankara Bomber Jacket</b>
                    </h5>
                    <h5 style={{ color: "rgb(255, 238, 0)" }}>&#8358;31,000</h5>
                    <p>
                      Navy Blue
                      <span>
                        <b>.</b>
                      </span>{" "}
                      Qty 1
                    </p>

                    <h6 className="my-2" style={{ color: "#33ff00" }}>
                      <FaCheck className="me-2" />
                      DELIVERED - MON 16 JUN
                    </h6>

                    <div
                      className="d-flex gap-2 pb-4"
                      style={{
                        borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                      }}
                    >
                      <button
                        style={{
                          background: "none",
                          padding: "7px",
                          color: "rgba(194, 194, 194, 0.83)",
                        }}
                      >
                        REORDER
                      </button>

                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                          background: "none",
                          borderColor: "rgb(255, 238, 0)",
                          padding: "7px",
                          color: "rgb(255, 238, 0)",
                        }}
                      >
                        <FaStar /> LEAVE A REVIEW
                      </button>
                    </div>

                    <div className="d-flex gap-5 my-3 align-items-center">
                      <div className="flex-column">
                        <a href="">
                          <h5 className="text-warning d-flex align-items-center">
                            {" "}
                            <FaStore className="me-2" size={19} /> Adunola's
                            Boutique
                          </h5>
                        </a>

                        <div className="d-flex align-items-center gap-1">
                          <small>Fashion</small>

                          <div
                            style={{
                              borderRadius: "50%",
                              background: "rgba(194, 194, 194, 0.83)",
                              padding: "2px",
                            }}
                          ></div>

                          <small>Lagos</small>
                        </div>
                      </div>

                      <button
                        style={{
                          background: "none",
                          color: "rgba(194, 194, 194, 0.83)",
                          padding: "8px",
                        }}
                      >
                        CHAT
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div
              className="p-4 item-order"
              style={{
                borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
              }}
            >
              <Row g-5>
                <Col className="col-3 col-sm-3 col-md-1 col-lg-2 ">
                  <Slider />
                </Col>

                <Col>
                  <div className="d-flex flex-column ">
                    <h5 className="text-light">
                      <b>Ankara Bomber Jacket</b>
                    </h5>
                    <h5 style={{ color: "rgb(255, 238, 0)" }}>&#8358;31,000</h5>
                    <p>
                      Navy Blue
                      <span>
                        <b>.</b>
                      </span>{" "}
                      Qty 1
                    </p>

                    <h6 className="my-2" style={{ color: "#33ff00" }}>
                      <FaCheck className="me-2" />
                      DELIVERED - MON 16 JUN
                    </h6>

                    <div
                      className="d-flex gap-2 pb-4"
                      style={{
                        borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                      }}
                    >
                      <button
                        style={{
                          background: "none",
                          padding: "7px",
                          color: "rgba(194, 194, 194, 0.83)",
                        }}
                      >
                        REORDER
                      </button>

                      <button
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                          background: "none",
                          borderColor: "rgb(255, 238, 0)",
                          padding: "7px",
                          color: "rgb(255, 238, 0)",
                        }}
                      >
                        <FaStar /> LEAVE A REVIEW
                      </button>
                    </div>

                    <div className="d-flex gap-5 my-3 align-items-center">
                      <div className="flex-column">
                        <a href="">
                          <h5 className="text-warning d-flex align-items-center">
                            {" "}
                            <FaStore className="me-2" size={19} /> Adunola's
                            Boutique
                          </h5>
                        </a>

                        <div className="d-flex align-items-center gap-1">
                          <small>Fashion</small>

                          <div
                            style={{
                              borderRadius: "50%",
                              background: "rgba(194, 194, 194, 0.83)",
                              padding: "2px",
                            }}
                          ></div>

                          <small>Lagos</small>
                        </div>
                      </div>

                      <button
                        style={{
                          background: "none",
                          color: "rgba(194, 194, 194, 0.83)",
                          padding: "8px",
                        }}
                      >
                        CHAT
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* items ordered info card */}

          <div
            style={{
              border: "1px solid rgba(255, 238, 0, 0.275)",
            }}
          >
            <div
              className=" d-flex justify-content-between px-4 py-2 "
              style={{
                borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
              }}
            >
              <h6
                style={{
                  color: "rgb(255, 238, 0)",
                  letterSpacing: 1.2,
                }}
              >
                ITEMS ORDERED (2)
              </h6>

              <a href="">
                <h6>REPORT ISSUE</h6>
              </a>
            </div>

            <div
              className="px-4"
              style={{
                borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
              }}
            >
              <div
                className="d-flex justify-content-between py-2"
                style={{
                  borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                }}
              >
                <h6>Recipient</h6>
                <p className="text-light">Amara Obi</p>
              </div>

              <div
                className="d-flex justify-content-between py-2"
                style={{
                  borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                }}
              >
                <h6>Address</h6>

                <p className="text-light">
                  {" "}
                  15, ifelodun St, Ijagemo Ikotun, <br />
                  lagos.
                </p>
              </div>

              <div
                className="d-flex justify-content-between py-2"
                style={{
                  borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                }}
              >
                <h6>Phone</h6>
                <p className="text-light">+234 813 *** ****</p>
              </div>

              <div className="d-flex justify-content-between py-2">
                <h6>Note</h6>
                <p style={{ fontStyle: "italic" }}>
                  Leave at gate if no answer
                </p>
              </div>
            </div>

            {/* Summary info */}

            <div
              className=" d-flex justify-content-between px-4 py-3 "
              style={{
                borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
              }}
            >
              <h6
                style={{
                  color: "rgb(255, 238, 0)",
                  letterSpacing: 1.2,
                }}
              >
                SUMMARY
              </h6>
            </div>

            <div className="px-4 ">
              <div
                className="d-flex justify-content-between py-2"
                style={{
                  borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                }}
              >
                <h6>Subtotal</h6>
                <p className="text-light"> &#8358;71,400</p>
              </div>

              <div className="d-flex justify-content-between py-2">
                <h6>Discount</h6>
                <p style={{ color: "rgb(51, 255, 0)" }}>&#8358;5,500</p>
              </div>

              <div className="d-flex justify-content-between py-2">
                <h6>Delivery</h6>
                <p style={{ color: "rgb(51, 255, 0)" }}> Free</p>
              </div>

              <div
                className="d-flex justify-content-between py-2"
                style={{
                  borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                }}
              >
                <h6>VAT(75%)</h6>
                <p className="text-light"> &#8358;4,943</p>
              </div>

              <div className="d-flex justify-content-between py-3">
                <h6>Total</h6>
                <p style={{ color: "rgb(255, 238, 0)" }}> &#8358;65,900</p>
              </div>
            </div>
          </div>

          {/* payment info card */}

          <div
            className="my-5"
            style={{
              border: "1px solid rgba(255, 238, 0, 0.275)",
            }}
          >
            <div
              className="  px-4 py-2 "
              style={{
                borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
              }}
            >
              <h6
                style={{
                  color: "rgb(255, 238, 0)",
                  letterSpacing: 1.2,
                }}
              >
                PAYMENT
              </h6>
            </div>

            <div className="px-4">
              <div
                className="d-flex justify-content-between py-2"
                style={{
                  borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                }}
              >
                <h6>Method</h6>
                <h6 className="text-light">Visa **** 4821</h6>
              </div>

              <div
                className="d-flex justify-content-between py-2"
                style={{
                  borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                }}
              >
                <h6>Status</h6>
                <p style={{ color: "rgb(51, 255, 0)" }}>
                  <FaCheck /> Successful{" "}
                </p>
              </div>

              <div
                className="d-flex justify-content-between py-2"
                style={{
                  borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                }}
              >
                <h6>Transaction ID</h6>
                <p style={{ color: "#5e5c5c" }}>
                  <FaCheck /> TXN-ROA-20260615- <br className="me-auto" />{" "}
                  44821X
                </p>
              </div>

              <div
                className="d-flex justify-content-between py-2"
                style={{
                  borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                }}
              >
                <h6>Date</h6>
                <div className="text-light d-flex align-items-center gap-1">
                  <p>15 jun 2026</p>
                  <div
                    style={{
                      background: "#fff",
                      padding: "2px",
                      borderRadius: "50%",
                    }}
                  />
                  <p>11:43 AM</p>
                </div>
              </div>

              <div className="d-flex justify-content-between py-4">
                <h6>Total</h6>
                <p style={{ color: "rgb(255, 238, 0)" }}>&#8358;65,900</p>
              </div>
            </div>
          </div>

          {/* help */}

          <div
            className="my-5"
            style={{
              border: "1px solid rgba(255, 238, 0, 0.275)",
            }}
          >
            <div
              className="  px-4 py-2 "
              style={{
                borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
              }}
            >
              <h6
                style={{
                  color: "rgb(255, 238, 0)",
                  letterSpacing: 1.2,
                }}
              >
                NEED HELP?
              </h6>
            </div>

            <Link
              to=""
              className="d-flex gap-4 py-3 px-4 justify-content-between"
              style={{
                borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
              }}
            >
              Report a problem
              <FaChevronRight className=" d-flex ms-auto" />
            </Link>

            <Link
              to=""
              className="d-flex gap-4 py-3 px-4 justify-content-between"
              style={{
                borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
              }}
            >
              Request a return
              <FaChevronRight className=" d-flex ms-auto" />
            </Link>

            <Link
              to=""
              className="d-flex gap-4 py-3 px-4 justify-content-between"
              style={{
                borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
              }}
            >
              Request a refund
              <FaChevronRight className=" d-flex ms-auto" />
            </Link>

            <Link
              to=""
              className="d-flex gap-4 py-3 px-4 justify-content-between"
              style={{}}
            >
              contact support
              <FaChevronRight className=" d-flex ms-auto" />
            </Link>
          </div>
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OrderDetails;
