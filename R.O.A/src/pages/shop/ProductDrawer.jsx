import { Offcanvas } from "react-bootstrap";
import { motion } from "framer-motion";
import ProductDetails from "./ProductDetails";

export default function ProductDrawer({ show, onHide, product }) {

 if(!product) return null;

  return (

    <Offcanvas
      show={show}
      onHide={onHide}
      placement="bottom"
      className="product-drawer"
    >
      <Offcanvas.Body className="p-0">
        <motion.div
          key={product?.id}
          className="drawer-content"

          // 👇 Drag settings
          drag="y"
          dragConstraints={{ top: 0, bottom: 300 }}
          dragElastic={0.2}

          // 👇 Close when dragged down enough
          onDragEnd={(e, info) => {
            if (info.offset.y > 120) {
              onHide();
            }
          }}

          // 👇 Entry animation
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {/* Drag handle */}
          <div className="drag-handle" />

          <ProductDetails product={product} />
        </motion.div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}