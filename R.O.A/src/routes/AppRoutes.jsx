import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
import ProductPage from "../pages/shop/ProductPage";
import ProductDetails from "../pages/shop/ProductDetails";
import ProductDrawer from "../pages/shop/ProductDrawer";
import PublicStore from "../pages/Store/PublicStorePage";
import CartPage from "../pages/Cart/CartPage";
import ProfilePage from "../pages/Profile/ProfilePage";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shopping" element={<ProductPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/public-store" element={<PublicStore />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
