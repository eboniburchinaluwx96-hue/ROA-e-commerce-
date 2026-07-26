import { Container, Badge, Button, Nav } from "react-bootstrap";
import { BsArrowRight, BsPeople, BsShieldCheck, BsShop } from "react-icons/bs";

export function HeroSection({ setCreate, create }) {
  return (
    <section className="hero_section">
      <Container>
        <Badge className="hero-badge px-4 mb-5">
          <h6>Start selling on R.O.A</h6>
        </Badge>

        <div
          className="mb-5"
          style={{ fontSize: "clamp(45px, 8vw, 300px)", fontWeight: 800 }}
        >
          <div className="text-white">Your store</div>
          <div className="text-white my-4 my-sm-3">Your brand</div>
          <div style={{ color: "#ffcc01" }}>Your earnings</div>
        </div>

        <p>
          Join thousands of sellers already making money with us. Set up your
          store in minutes, list your products and start selling to buyers
          across Nigeria.
        </p>

        <div
          onClick={() => setCreate(!false)}
          className="hero-btn my-5 p-3 fs-4 d-inline-block ms-2"
          style={{ cursor: "pointer" }}
        >
          <Nav.Link
            className={`text-dark ${create ? "d-none" : "d-block"}`}
            href="#store_open"
          >
            Create Store
            <BsArrowRight className="ms-2" />{" "}
          </Nav.Link>
        </div>

        <div className="hero-stat justify-content-center ">
          <div className="d-flex flex-column  ">
            <BsShop size={30} className="mx-auto mb-2" />
            <h3>10K+</h3>
            <span>Products</span>
          </div>

          <div className="d-flex flex-column ">
            <BsPeople size={30} className="mx-auto mb-2" />
            <h3>50+</h3>
            <span>Stores</span>
          </div>

          <div className="d-flex flex-column ">
            <BsShieldCheck size={30} className="mx-auto mb-2" />
            <h3>100%</h3>
            <span>Secure</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
