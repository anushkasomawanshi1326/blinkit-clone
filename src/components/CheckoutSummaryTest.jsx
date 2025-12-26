import React, { useMemo } from "react";

// Custom hooks
import useCart from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";

// Child components
import PriceFilter from "./PriceFilter";
import Coupon from "./Coupon";
import DeliverySlot from "./DeliverySlot";
import PeakTime from "./PeakTime";
import StockLabel from "./StockLabel";

/**
 * CheckoutSummaryTest
 * This component is ONLY for testing schema extraction (Step 1–3)
 */
export default function CheckoutSummaryTest({ showPeakTime = true }) {
  const { cartItems, totalPrice } = useCart();
  const { wishlist } = useWishlist();

  const itemCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  return (
    <div style={{ border: "1px solid #ddd", padding: "16px" }}>
      <h2>Checkout Summary</h2>

      <p>
        🛒 Items in Cart: <strong>{itemCount}</strong>
      </p>

      <p>
        💰 Total Price: <strong>₹{totalPrice}</strong>
      </p>

      <StockLabel inStock={cartItems.length > 0} />

      <PriceFilter />

      <Coupon />

      <DeliverySlot />

      {showPeakTime && <PeakTime />}

      <p>
        ❤️ Wishlist Items: <strong>{wishlist.length}</strong>
      </p>
    </div>
  );
}
