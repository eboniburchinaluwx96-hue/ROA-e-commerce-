import { useState } from "react";
import { Button } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const HeaderHamburger = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="hamburger-button">
        <div
        className="border-0 bg-transparent"
        onClick={() => setShow(true)}
      >
        <FiMenu size={34} />
      </div>
      </div>

      <MobileMenu show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default HeaderHamburger;