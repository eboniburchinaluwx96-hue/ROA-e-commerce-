import MainHeader from "../../components/MainHeader";
import { Container } from "react-bootstrap";
// import axios from "axios";
// import { useEffect, useState } from "react";
import ProductPage from "../../components/product/ProductPage";
import { PRODUCTS } from "../../dummyData";

export const ShoppingPage = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  // fetch from backend
  {
    /*  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []); */
  }

  return (
    <>
      <MainHeader
        showAuth={!true}
        showCart={true}
        showSearchbtn={true}
        showWishlist={true}
      />
      <Container>
        <div style={{ marginTop: "120px" }}>
          <ProductPage product={PRODUCTS} Store={false} />
        </div>
      </Container>
    </>
  );
};

export default ShoppingPage;
