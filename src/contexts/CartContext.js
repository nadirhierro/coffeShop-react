import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

let initialState = undefined;
if (JSON.parse(localStorage.getItem("cart"))) {
  initialState = JSON.parse(localStorage.getItem("cart"));
} else {
  initialState = { items: [], quantity: 0, total: 0 };
}

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = function (itemToAdd, quantityToAdd) {
    if (cart.items.some((item) => item.id === itemToAdd.id)) {
      return false;
    } else {
      setCart({
        items: [
          {
            id: itemToAdd.id,
            title: itemToAdd.title,
            price: itemToAdd.price,
            quantity: quantityToAdd,
          },
          ...cart.items,
        ],
        quantity: cart.quantity + quantityToAdd,
        total: cart.total + itemToAdd.price * quantityToAdd,
      });
      return true;
    }
  };

  const removeItem = function (itemId) {
    let itemInCart = cart.items.find((item) => item.id === itemId);
    let itemQuantity = itemInCart.quantity;
    setCart({
      items: cart.items.filter((item) => item.id !== itemId),
      quantity: cart.quantity - itemQuantity,
      total: cart.quantity - itemQuantity * itemInCart.price,
    });
  };

  const clear = function () {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}
