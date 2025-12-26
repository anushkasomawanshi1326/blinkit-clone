import { useState, useEffect } from "react";

import Cart from "./Cart";
import Coupon from "./Coupon";
import Skeleton from "./Skeleton";

import { useCart } from "../hooks/useCart";
import products from "../data/products";

export default function OrderSummaryTest() {
  // ===============================
  // STATE
  // ===============================
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  // ===============================
  // CUSTOM HOOK
  // ===============================
  const { cartItems } = useCart();

  // ===============================
  // SIDE EFFECT
  // ===============================
  useEffect(() => {
    // simulate API / calculation delay
    setTimeout(() => {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price,
        0
      );
      setTotalPrice(total);
      setLoading(false);
    }, 500);
  }, [cartItems]);

  // ===============================
  // CONDITIONAL RENDERING
  // ===============================
  if (loading) {
    return <Skeleton />;
  }

  return (
    <div>
      <h2>🧾 Order Summary</h2>

      {/* LIST RENDERING */}
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <span>{product.name}</span>
          </div>
        ))
      )}

      {/* CHILD COMPONENTS */}
      <Cart />
      <Coupon />

      {/* USER INTERACTION */}
      <button onClick={() => alert("Order Placed!")}>
        Place Order ₹{totalPrice}
      </button>
    </div>
  );
}
