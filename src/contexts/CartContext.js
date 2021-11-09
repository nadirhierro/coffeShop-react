import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

let initialState = undefined;
let storageCart = JSON.parse(sessionStorage.getItem("cart"));
if (storageCart) {
  initialState = storageCart;
} else {
  initialState = { items: [], quantity: 0, total: 0 };
}

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(initialState);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const findItem = function (itemId) {
    return cart.items.find((item) => item.id === itemId);
  };

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
    let itemInCart = findItem(itemId);
    let itemQuantity = itemInCart.quantity;
    setCart({
      items: cart.items.filter((item) => item.id !== itemId),
      quantity: cart.quantity - itemQuantity,
      total: cart.total - itemQuantity * itemInCart.price,
    });
  };

  const clear = function () {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, findItem, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}
