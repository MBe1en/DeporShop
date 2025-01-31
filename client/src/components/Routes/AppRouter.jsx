import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../../context/AuthContext";
import { ProductProvider } from "../../context/ProductContext";

import NavBar from "../NavBar";
import HomePage from "../../pages/HomePage";

import LoginPage from "../../pages/auth/LoginPage";
import RegisterPage from "../../pages/auth/RegisterPage";
import ProductsPage from "../../pages/ProductsPage";
import MyAccountPage from "../../pages/MyAccountPage";
import ProfilePage from "../../pages/ProfilePage";
import CartPage from "../../pages/CartPage";
import { ProtectedRoute } from "../../ProtectedRoute";
import OrdersPage from "../../pages/OrdersPage";

import ProductForm from "../Products/ProductForm";
import ProductDetail from "../Products/ProductDetail";

export default function AppRouter() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchIntervalInBackground: false,
        cacheTime: 10_000,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<HomePage />} />

              <Route path="/product" element={<ProductsPage />} />
              <Route path="/product/detail" element={<ProductDetail />} />

              <Route path="/product/create" element={<ProductForm />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/myAccount" element={<MyAccountPage />} />
                <Route path="/update/:id" element={<ProfilePage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Route>

            </Route>

          </Routes>
        </ProductProvider>
      </AuthProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
