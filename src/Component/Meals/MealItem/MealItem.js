import React,{useContext} from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from '../../../Stop/Cart_Context'
const MealItem = (props) => {
  const cartCtx=useContext(CartContext)
  let price = `$${props.price.toFixed(2)}`;
    
  const addToCartHandler=amount=>{
    cartCtx.addItem({
      id:props.id,
      name:props.title,
      amount:amount,
      price:props.price
    })
  };

  return (
    <>
    
    <li className={classes.meal}>
      
      <div>
        <h3>{props.image}</h3>
        <h3>{props.title}</h3>
         <h3>{props.category}</h3>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>

    </>
  );
};

export default MealItem;
