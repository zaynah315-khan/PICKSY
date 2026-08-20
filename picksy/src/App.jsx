 import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import AuthModal from "./components/AuthModal";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AdminPortal from "./pages/AdminPortal";

import { useCart } from "./hooks/useCart";
import { useProducts } from "./hooks/useProducts";
import { useAuth } from "./hooks/useAuth";

function App() {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartTotal
  } = useCart();

  const {
    products,
    loading
  } = useProducts();

  const {
    user
  } = useAuth();

  const [showAuth, setShowAuth] =
    useState(false);

  const [toast, setToast] =
    useState({
      visible: false,
      message: ""
    });

  function handleAddToCart(product) {
    addToCart(product);

    setToast({
      visible: true,
      message: `${product.name} added to your cart ♡`
    });

    setTimeout(() => {
      setToast({
        visible: false,
        message: ""
      });
    }, 2500);
  }

  return (
    <BrowserRouter>

      <Header
        cartCount={cartCount}
        user={user}
        onAuthClick={() =>
          setShowAuth(true)
        }
      />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              products={products}
              loading={loading}
              onAddToCart={handleAddToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              cartTotal={cartTotal}
              onRemove={removeFromCart}
              onUpdate={updateQuantity}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <AdminPortal
              products={products}
            />
          }
        />

      </Routes>

      <Footer />

      {showAuth && (
        <AuthModal
          onClose={() =>
            setShowAuth(false)
          }
        />
      )}

      <Toast
        visible={toast.visible}
        message={toast.message}
      />

    </BrowserRouter>
  );
}

export default App;