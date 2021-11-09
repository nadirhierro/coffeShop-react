import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// initialState recuperado del sessionStorage
let initialState = undefined;
let storageCart = JSON.parse(sessionStorage.getItem("cart"));
if (storageCart) {
  initialState = storageCart;
} else {
  initialState = { items: [], quantity: 0, total: 0 };
}

// CartProvider con state cart, guarda en el storage cada vez que hay un cambio en dicho state
// métodos: isInCart, devuelve true si el item está en carrito, false si no
// addItem: tiene lógica para no aceptar duplicados, aunque cuando se carga el ItemDetail, primero se fija si el producto está o no
// entonces ya desde el ItemDetail no va a dejar apretar el botón de agregar si es que el producto está
// removeItem: quita el producto del cart
// clear: deja el carrito en 0

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(initialState);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isInCart = function (itemId) {
    if (cart.items.find((item) => item.id === itemId)) {
      return true;
    } else {
      return false;
    }
  };

  const addItem = function (itemToAdd, quantityToAdd) {
    if (isInCart(itemToAdd.id)) {
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
      total: cart.total - itemQuantity * itemInCart.price,
    });
  };

  const clear = function () {
    setCart({ items: [], quantity: 0, total: 0 });
  };

  return (
    <CartContext.Provider
      value={{ cart, isInCart, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}
