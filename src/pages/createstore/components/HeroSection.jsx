import { Container, Badge, Button } from "react-bootstrap";
import { BsArrowRight, BsPeople, BsShieldCheck, BsShop } from "react-icons/bs";

export function HeroSection({ scrollIntoView }) {
  return (
    <section className="hero_section py-5">
      <Container>
        <Badge className="hero-badge px-4 mb-5">
          <h6>Start selling on R.O.A</h6>
        </Badge>

        <div className="mb-5">
          <h1 className="text-white">Your store</h1>
          <h1 className="text-white my-4 my-sm-3">Your brand</h1>
          <h1 style={{ color: "#ffcc01" }}>Your earnings</h1>
        </div>

        <p>
          Join thousands of sellers already making money with us. Set up your
          store in minutes, list your products and start selling to buyers
          across Nigeria.
        </p>

        <Button onClick={scrollIntoView} className="hero-btn my-5" size="lg">
          Create Store
          <BsArrowRight className="ms-2" />{" "}
        </Button>

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
