import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Login from "./Login";
import CartProvider from "./Stop/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(true);
  const [user, setuser] = useState(null);

  let showCardHandler = () => {
    setCartIsShown(true);
  };
  const hiderCartHandler = () => {
    setCartIsShown(false);
  };
  const logout = () => {
    setuser(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCardHandler} user={user} logout={logout} />
      {cartIsShown && <Cart onClose={hiderCartHandler} />}
      <Switch>
        {user && <Route path="/meals" component={Meals}></Route>}
        {!user && (
          <Route path="/login">
            <Login data={() => setuser(true)} />
          </Route>
        )}

        {/* <main>
        <Meals />
      </main> */}
      </Switch>
    </CartProvider>
  );
};

export default App;
