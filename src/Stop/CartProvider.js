
import React, { useReducer } from "react";
import CartContext from "./Cart_Context";

const defaultcartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exstingCartItem = state.items[existingCartItemIndex];

    let UpdatedItems;

    if (exstingCartItem) {
      const UpdatedItem = {
        ...exstingCartItem,
        amount: exstingCartItem.amount + action.item.amount,
      };
      UpdatedItems = [...state.items];
      UpdatedItems[existingCartItemIndex] = UpdatedItem;
    } else {
      UpdatedItems = state.items.concat(action.item);
    }

    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: UpdatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const UpdatedTotalAmount = state.totalAmount - existingItem.price;
    let UpdatedItems;
    if (existingItem.amount === 1) {
      UpdatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const UpdatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      UpdatedItems = [...state.items];
      UpdatedItems[existingCartItemIndex] = UpdatedItem;
    }
    return {
      items: UpdatedItems,
      totalAmount: UpdatedTotalAmount,
    };
  }
  return defaultcartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultcartState
  );
  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemCartHanler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHanler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
