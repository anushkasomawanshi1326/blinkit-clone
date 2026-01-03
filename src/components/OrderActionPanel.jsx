import { useState, useEffect } from "react";
import Cart from "./Cart";
import Coupon from "./Coupon";
import DeliverySlot from "./DeliverySlot";
import useCart from "../hooks/useCart";

/**
 * OrderActionPanel
 * - Controls checkout actions
 * - Shows loader, error, conditional UI
 * - Uses custom hook + child components
 */

export default function OrderActionPanel({ userId }) {
  const { items, totalPrice } = useCart(userId);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    if (!userId) {
      setError("User not logged in");
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [userId]);

  if (loading) {
    return <div>Loading order actions...</div>;
  }

  if (error) {
    return <div role="alert">{error}</div>;
  }

  return (
    <section>
      <h2>Order Actions</h2>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <Cart />
          <Coupon />
          <DeliverySlot />

          <p>Total: ₹{totalPrice}</p>

          <button onClick={() => setShowSummary(true)}>
            Review Order
          </button>
        </>
      )}

      {showSummary && (
        <div>
          <h3>Order Summary</h3>
          <p>Items: {items.length}</p>
          <button onClick={() => setShowSummary(false)}>
            Close
          </button>
        </div>
      )}
    </section>
  );
}
