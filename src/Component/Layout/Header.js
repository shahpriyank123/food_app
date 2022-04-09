import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
  
  
  //  const[filter,setFilter]=useState('')
  //  const searchText =(e)=>{
  //    setFilter(e.target.value)
  //  }
    
  const history = useHistory();

  const login = () => {
    history.push("/login");
  };
  console.log("props", props.us);

  return (
    <>
      <header className={classes.header}>
        <h1>The Imperial Spice</h1>
        {props.user && (
          <>
            <HeaderCartButton onClick={props.onShowCart} />
            
            <button onClick={props.logout}>logout</button>
            
          </>
        )}
 
        {!props.user && <button onClick={login}>login</button>}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </>
  );
};
export default Header;
