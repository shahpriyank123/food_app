import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import CartItem from "./CartItem";
import CartContext from "../../Stop/Cart_Context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalamount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  const cartItemRemoveHandler =id=>{
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler=(item)=>{
    cartCtx.addItem({...item,amount:1});
  }
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
       
       <CartItem key={item.id} 
       name={item.name}
       category
        amount={item.amount}
         price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}/>
      ))}
    </ul>
  );
  return (
    <Model onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
};

export default Cart;
