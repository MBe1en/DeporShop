import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";

import NavBar from "../NavBar";
import HomePage from "../../pages/HomePage";

import LoginPage from "../../pages/auth/LoginPage";
// import LoginPage2 from "../../pages/auth/LoginPage2";
import RegisterPage from "../../pages/auth/RegisterPage";
import ProductsPage from "../../pages/ProductsPage";
import MyAccountPage from "../../pages/MyAccountPage";
import ProfilePage from "../../pages/ProfilePage";
import CartPage from "../../pages/CartPage";
import { ProtectedRoute } from "../../ProtectedRoute";
import OrdersPage from "../../pages/OrdersPage";
import { ProductProvider } from "../../context/ProductContext";
import ProductForm from "../Products/ProductForm";
import ProductDetail from "../Products/ProductDetail";
// import ProductDetail from "../Products/ProductDetail";

export default function AppRouter() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/product/detail" element={<ProductDetail />} />
            <Route path="/product/create" element={<ProductForm />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/myAccount" element={<MyAccountPage />} />
              <Route path="/update/:id" element={<RegisterPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>
          </Route>
        </Routes>
      </ProductProvider>
    </AuthProvider>
  );
}
