import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LoginPage } from "../pages/login/LoginPage";
import ProductDetails from "../pages/shop/ProductDetails";
import ProductDrawer from "../pages/shop/ProductDrawer";
import CartPage from "../pages/Cart/CartPage";
import HomePage from "../pages/Home/HomePage";
import Help_Support from "../pages/Help&support/Help&Support";

const ProfilePage = lazy(() => import("../pages/Profile/ProfilePage"));
const OrderPage = lazy(() => import("../pages/order/OrderPage"));
const Wishlist = lazy(() => import("../pages/wishlist/Wishlist"));
const ProductPage = lazy(() => import("../pages/shop/ProductPage"));
const PublicStore = lazy(() => import("../pages/Store/PublicStorePage"));
const Messages = lazy(() => import("../pages/Notification/Notification"));
const MenuSettings = lazy(() => import("../pages/Notification/Notification"));

function AppRoutes() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/shopping" element={<ProductPage />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/public-store" element={<PublicStore />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/notification" element={<Messages />} />
          <Route path="/settings" element={<MenuSettings />} />
          <Route path="/help_support" element={<Help_Support />} />
          <Route path="/withdraw/withdraw" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default AppRoutes;
