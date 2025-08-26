import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalToPay, setTotalToPay] = useState(0);

  function addToCart(itemToAdd) {
    const existing = cartItems.find((item) => item.id === itemToAdd.id);
    if (existing) return;
    setCartItems((prev) => [...prev, { ...itemToAdd, quantity: 1 }]);
  }

  function removeToCart(itemId) {
    const newList = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newList);
  }

  function increaseQuantity(itemToIncrease) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemToIncrease
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(itemToIncrease) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemToIncrease
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  }

  useEffect(() => {
    const total = cartItems.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    setTotalToPay(total);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        addToCart,
        removeToCart,
        increaseQuantity,
        decreaseQuantity,
        totalToPay,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);

  return context;
}
