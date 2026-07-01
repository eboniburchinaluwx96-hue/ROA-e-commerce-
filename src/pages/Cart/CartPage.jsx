import { useState } from "react";
import CartPageHeader from "../../components/CartPageHeader";
import { Link, useNavigate } from "react-router";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const CartPage = () => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [checkout, setCheckout] = useState(false);
  const [cart, setCart] = useState(true);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  // const [deleteCart, setDeleteCart] = useState(null);

  return (
    <Container>
      <CartPageHeader />

      <div
        className="d-inline-flex mb-5 mt-3"
        onClick={() => navigate(-1)}
        style={{
          background: "#ffffff42",
          borderRadius: "100%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <FaArrowLeft size={20} />
      </div>

      {cart && (
        <div className="cart-items-section">
          <div>
            <Container>
              <Row>
                <Col className="col-12 col-md-7 p-0">
                  {/* cart Items Card */}

                  <div className="cart-col">
                    <Row className="py-4 px-3 ">
                      <Col className="col-3 col-sm-2 me-3">
                        <Image
                          style={{ objectFit: "cover" }}
                          roundedCircle
                          width={70}
                          height={80}
                          src="/images/profile.jpg"
                        />
                      </Col>
                      <Col>
                        <h5>Black and Gray Athletic Cotton Socks - 6 Pairs</h5>
                        <p
                          style={{
                            marginTop: "28px",
                            color: "rgb(21, 255, 0)",
                            fontSize: "20px",
                            fontWeight: "500",
                          }}
                        >
                          &#8358;10,900
                        </p>

                        <Row className="align-items-center mt-4">
                          <Col className="col-12 col-sm-9 mb-4 mb-sm-0">
                            <button
                              onClick={() => {
                                setQty(Math.max(1, qty - 1));
                              }}
                              className="increment-button"
                            >
                              -
                            </button>
                            <button className="qty-button">{qty}</button>
                            <button
                              onClick={() => {
                                setQty(qty + 1);
                              }}
                              className="increment-button"
                            >
                              +
                            </button>
                          </Col>
                          <Col className="mt-2">
                            <div className="delete-btn">Delete</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>

                  <div className="cart-col">
                    <Row className="py-4 px-3 ">
                      <Col className="col-3 col-sm-2 me-3">
                        <Image
                          style={{ objectFit: "cover" }}
                          roundedCircle
                          width={70}
                          height={80}
                          src="/images/profile.jpg"
                        />
                      </Col>
                      <Col>
                        <h5>Black and Gray Athletic Cotton Socks - 6 Pairs</h5>
                        <p
                          style={{
                            marginTop: "28px",
                            color: "rgb(21, 255, 0)",
                            fontSize: "20px",
                            fontWeight: "500",
                          }}
                        >
                          &#8358;10,900
                        </p>

                        <Row className="align-items-center mt-4">
                          <Col className="col-12 col-sm-9 mb-4 mb-sm-0">
                            <button
                              onClick={() => {
                                setQty(Math.max(1, qty - 1));
                              }}
                              className="increment-button"
                            >
                              -
                            </button>
                            <button className="qty-button">{qty}</button>
                            <button
                              onClick={() => {
                                setQty(qty + 1);
                              }}
                              className="increment-button"
                            >
                              +
                            </button>
                          </Col>
                          <Col className="mt-2">
                            <div className="delete-btn">Delete</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>

                  <div className="cart-col">
                    <Row className="py-4 px-3 ">
                      <Col className="col-3 col-sm-2 me-3">
                        <Image
                          style={{ objectFit: "cover" }}
                          roundedCircle
                          width={70}
                          height={80}
                          src="/images/profile.jpg"
                        />
                      </Col>
                      <Col>
                        <h5>Black and Gray Athletic Cotton Socks - 6 Pairs</h5>
                        <p
                          style={{
                            marginTop: "28px",
                            color: "rgb(21, 255, 0)",
                            fontSize: "20px",
                            fontWeight: "500",
                          }}
                        >
                          &#8358;10,900
                        </p>

                        <Row className="align-items-center mt-4">
                          <Col className="col-12 col-sm-9 mb-4 mb-sm-0">
                            <button
                              onClick={() => {
                                setQty(Math.max(1, qty - 1));
                              }}
                              className="increment-button"
                            >
                              -
                            </button>
                            <button className="qty-button">{qty}</button>
                            <button
                              onClick={() => {
                                setQty(qty + 1);
                              }}
                              className="increment-button"
                            >
                              +
                            </button>
                          </Col>
                          <Col className="mt-2">
                            <div className="delete-btn">Delete</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </Col>

                {/* Summary Checkout */}
                <Col className="col-12 col-md-5 mb-5">
                  <div className="summary-section p-4">
                    <h6
                      style={{
                        fontSize: "25px",
                        fontWeight: 600,
                      }}
                    >
                      Order Summary
                    </h6>

                    <Row
                      className="pt-4"
                      style={{
                        fontSize: "18px",
                      }}
                    >
                      <Col className="col-7">
                        <p>Items</p>
                      </Col>
                      <Col className="">2</Col>
                    </Row>

                    <Row
                      className="pt-2"
                      style={{
                        fontSize: "18px",
                      }}
                    >
                      <Col className="col-6 col-md-7">
                        <p>Total</p>
                      </Col>
                      <Col className="">&#8358;21,800</Col>
                    </Row>

                    <Row
                      className="pt-2 align-items-center"
                      style={{
                        fontSize: "18px",
                        lineHeight: 1,
                      }}
                    >
                      <Col className="col-6 col-md-7">
                        <p>Delivery fee:</p>
                      </Col>
                      <Col className="me-auto">&#8358;1,000</Col>
                    </Row>

                    <Row>
                      <Col className="col-6 col-md-7"></Col>
                      <Col className="me-auto col-5">
                        <div className="order-border"></div>
                      </Col>
                    </Row>

                    <Row
                      className="pt-3"
                      style={{
                        fontSize: "18px",
                        color: "rgb(241, 0, 0)",
                      }}
                    >
                      <Col className="col-6 col-md-7">
                        <p>Total Price</p>
                      </Col>
                      <Col className="me-auto">&#8358;22,800</Col>
                    </Row>

                    <div className="d-flex justify-content-end mt-4">
                      <button
                        onClick={() => {
                          setCheckout(!false);
                          setCart(!true);
                        }}
                        className="checkout-btn"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}

      {checkout && (
        <div className="checkout-pgn">
          <div className="checkout-form">
            <h6
              style={{
                fontSize: "23px",
                fontWeight: 600,
                padding: "35px 0px",
              }}
            >
              Shipping Information
            </h6>

            <Form className="px-3">
              <FloatingLabel controlId="floatingName" label=" FULL NAME">
                <Form.Control type="Name" placeholder="NAME" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label=" ADDRESS"
                className="my-4"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPhone" label="PHONE">
                <Form.Control type="Phone" placeholder="Phone" />
              </FloatingLabel>

              <Row className="pt-4">
                <Col>
                  <FloatingLabel controlId="floatingPhone" label="CITY">
                    <Form.Control type="City" placeholder="City" />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingPhone" label="STATE">
                    <Form.Control type="State" placeholder="State" />
                  </FloatingLabel>
                </Col>
              </Row>

              <Button
                onClick={() => {
                  setOrderConfirmation(true);
                  setCart(false);
                  setCheckout(false);
                }}
                type="submit"
                variant="outline-warning"
                className="my-4 d-block ms-auto"
              >
                Place Order
              </Button>
            </Form>
          </div>
        </div>
      )}

      {orderConfirmation && (
        <>
          <Container>
            <div className="order-pgn">
              <div className="order-confirmation">
                <div
                  className="d-flex p-5 d-flex flex-column align-items-center justify-content-center gap-4"
                  style={{
                    boxShadow: "0 0 25px -12px rgba(255, 238, 0, 0.575)",
                  }}
                >
                  <div className=" text-center d-flex flex-column gap-4 py-4">
                    <div
                      className="mx-auto"
                      style={{
                        fontWeight: "",
                        background: "rgba(99, 160, 1, 0.23)",
                        color: "#55ca08",
                        border: "2px solid #55ca08",
                        padding: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <FaCheck size={50} />
                    </div>

                    <h5 style={{ color: "#55ca08", letterSpacing: 1.4 }}>
                      ORDER CONFIRMED
                    </h5>

                    <h1 className="m-0">
                      <span className="text-light">Your order is </span>{" "}
                      <span style={{ color: "rgb(255, 238, 0)" }}>placed!</span>
                    </h1>

                    <p> A confirmation has been sent to a***@gmail.com.</p>
                  </div>

                  <div
                    className="d-flex flex-column justify-content-center p-3 px-4 gap-4"
                    style={{
                      border: "1px solid rgba(255, 238, 0, 0.275)",
                      backgroundColor: "rgba(255, 238, 0, 0.11)",
                      width: "100%",
                    }}
                  >
                    <div className="text-center">
                      <p>ORDER NUMBER</p>
                      <h5
                        style={{ color: "rgb(255, 238, 0)", letterSpacing: 2 }}
                      >
                        <span style={{ fontSize: "28px" }}>#ROA</span>{" "}
                        <span>-2026-00892</span>
                      </h5>
                    </div>

                    <div className="text-center">
                      <p>PLACED ON</p>
                      <h5
                        style={{ color: "rgb(255, 238, 0)", letterSpacing: 2 }}
                      >
                        <span>15 june 2026, 11:42</span>{" "}
                        <span style={{ fontSize: "28px" }}>AM</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <Row className="my-5 gy-5">
                <Col className=" col-auto col-12 col-lg-6">
                  <div
                    style={{
                      border: "1px solid rgba(255, 238, 0, 0.275)",
                      borderBottom: "0",
                    }}
                  >
                    <div
                      className="px-4 py-2 d-flex justify-content-between"
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
                        ITEMS ORDERED (3)
                      </h6>
                      <h6>VIEW ALL</h6>
                    </div>

                    {/* ORDER ITEMS */}

                    <div
                      className="p-4 item-order"
                      style={{
                        borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                      }}
                    >
                      <Row>
                        <Col className="col-3 col-sm-2 col-md-1 col-lg-2 d-flex align-items-center">
                          <Image
                            style={{
                              objectFit: "cover",
                            }}
                            src="/images/profile.jpg"
                          />
                        </Col>

                        <Col className="col-6 col-md-8 col-lg-7 d-flex align-items-center">
                          <div className="d-flex flex-column ">
                            <h5 className="text-light">
                              <b>Ankara Bomber Jacket</b>
                            </h5>
                            <p>
                              Adunola's Boutique{" "}
                              <span>
                                <b>.</b>
                              </span>{" "}
                              Qty 1
                            </p>
                          </div>
                        </Col>

                        <Col className="col-2 col-sm-4 col-md-3 d-flex align-items-center">
                          <p
                            className="ms-auto"
                            style={{
                              color: "rgb(255, 238, 0)",
                            }}
                          >
                            &#8358;31,000
                          </p>
                        </Col>
                      </Row>
                    </div>

                    <div
                      className="p-4 item-order"
                      style={{
                        borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                      }}
                    >
                      <Row>
                        <Col className="col-3 col-sm-2 col-md-1 col-lg-2 d-flex align-items-center">
                          <Image
                            style={{
                              objectFit: "cover",
                            }}
                            src="/images/profile.jpg"
                          />
                        </Col>

                        <Col className="col-6 col-md-8 col-lg-7 d-flex align-items-center">
                          <div className="d-flex flex-column ">
                            <h5 className="text-light">
                              <b>Moringa Glow Serum</b>
                            </h5>
                            <p>
                              Zara Skin Studio{" "}
                              <span>
                                <b>.</b>
                              </span>{" "}
                              Qty 2
                            </p>
                          </div>
                        </Col>

                        <Col className="col-2 col-sm-4 col-md-3 d-flex align-items-center">
                          <p
                            className="ms-auto"
                            style={{
                              color: "rgb(255, 238, 0)",
                            }}
                          >
                            &#8358;16,400
                          </p>
                        </Col>
                      </Row>
                    </div>

                    <div
                      className="p-4 item-order"
                      style={{
                        borderBottom: "1px solid rgba(255, 238, 0, 0.22)",
                      }}
                    >
                      <Row>
                        <Col className="col-3 col-sm-2 col-md-1 col-lg-2 d-flex align-items-center">
                          <Image
                            style={{
                              objectFit: "cover",
                            }}
                            src="/images/profile.jpg"
                          />
                        </Col>

                        <Col className="col-6 col-md-8 col-lg-7 d-flex align-items-center">
                          <div className="d-flex flex-column ">
                            <h5 className="text-light">
                              <b>Handwoven Kente Bag</b>
                            </h5>
                            <p>
                              Femi Krafts
                              <span>
                                <b>.</b>
                              </span>{" "}
                              Qty 1
                            </p>
                          </div>
                        </Col>

                        <Col className="col-2 col-sm-4 col-md-3 d-flex align-items-center">
                          <p
                            className="ms-auto"
                            style={{
                              color: "rgb(255, 238, 0)",
                            }}
                          >
                            &#8358;18,500
                          </p>
                        </Col>
                      </Row>
                    </div>

                    {/* ORDER TOTAL AMOUNT */}

                    <div
                      className="d-flex align-items-center justify-content-between px-4 py-2"
                      style={{
                        background: "#69686831",
                        borderBottom: "1px solid rgba(255, 238, 0, 0.575) ",
                      }}
                    >
                      <h6>Total Charged</h6>
                      <h5
                        style={{
                          color: "rgb(255, 238, 0)",
                        }}
                      >
                        &#8358;65,900
                      </h5>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div
                    style={{
                      border: "1px solid rgba(255, 238, 0, 0.575) ",
                      padding: "22px",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="text-center">DELIVERING TO</h6>
                        <p className="text-light mt-2">
                          Victoria Island, Lagos
                        </p>
                      </div>

                      <div>
                        <h6 className="text-center">PAYMENT</h6>
                        <p className="text-light mt-2">Visa *** 4821</p>
                      </div>
                    </div>
                  </div>

                  <button>CONTINUE SHOPPING</button>
                </Col>
              </Row>
            </div>
          </Container>

          <footer
            className="bg-black py-4"
            style={{ color: "rgba(194, 194, 194, 0.83)" }}
          >
            <Container>
              <p className="text-center">
                Full order details, tracking, and receipts are available anytime
                in{" "}
                <Link className="text-warning" to="/orders">
                  My Orders.
                </Link>
              </p>

              <p className="text-center my-3 mb-5">
                Questions?{""}
                <Link className="text-warning" to="/orders">
                  Contact Support
                </Link>
              </p>
            </Container>
          </footer>
        </>
      )}
    </Container>
  );
};

export default CartPage;
