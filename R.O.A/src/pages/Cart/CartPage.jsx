import CartPageHeader from "../../components/CartPageHeader";
import { Container, Row, Col } from "react-bootstrap";

const CartPage = () => {
  return (
    <>
      <CartPageHeader />

      <Container fluid>
        <Row>
          <Col className="col-8 cart-item">
            <div className="d-flex align-items-start">
              <div>
                <img />
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;
