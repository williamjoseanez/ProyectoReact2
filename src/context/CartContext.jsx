import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newArr = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArr);
      localStorage.setItem("cart", JSON.stringify([newArr]));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  //funcion que nos permite saber la cantidad de productos
  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  //funcion para vaciar el carrito completo
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  //funcion para eliminar un producto del carrito
  //funcion para borrar un producto del carrito
  const deleteProductById = (id) => {
    let newArr = cart.filter((product) => product.id !== id);
    setCart(newArr);
    localStorage.setItem("cart", JSON.stringify(newArr));
  };

  //funcion que nos permite saber el total a pagar
  const calculateTotalPrice = () => {
    let total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProductById,
    calculateTotalPrice,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export default CartContextComponent;
