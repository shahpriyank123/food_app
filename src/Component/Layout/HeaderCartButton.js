 import React ,{useContext,useEffect,useState}from 'react';
import CartContext from '../../Stop/Cart_Context';
 import CartIcon from '../Cart/CartIcon';
 import classes from './HeaderCartButton.module.css'

 const HeaderCartButton = (props) => {
 const[btnIs,setbtnIs]=  useState(false)
   const cartCtx=useContext(CartContext);
   const {items}=cartCtx;
   const numberOfCartItem=items.reduce((Curnumber,item)=>{
     return Curnumber+item.amount;
   },0)
  
   
   const btnClasses=`${classes.button} ${btnIs ? classes.bump:" "}`
   useEffect(()=>{
     if(items.length===0){
       return;
     }
        setbtnIs(true); 
       const timer= setTimeout(() => {
          setbtnIs(false)
        }, 300);

        return()=>{
          clearTimeout(timer);
        }

   },[items])

   return (<button className={btnClasses} onClick={props.onClick}>

       <span className={classes.icon}>
          <CartIcon/> 
       </span>
        <span>Your Cart</span> 
       <span className={classes.badge}>{numberOfCartItem}</span>

   </button>
   );
 };
 
 export default HeaderCartButton;
 