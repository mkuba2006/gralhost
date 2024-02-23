import React, { useContext, useEffect } from "react";
import './header.css';
import Cart from './cart';
import OpenContext from '../../logic/open_context';
import Element from './element';
import FavList from './favlist';
import classes from './button.module.css'
import Fav from '../../fav/cart';
import CartContext from '../../logic/cart_context';

function Header() {
  const Otx = useContext(OpenContext);
  const ctx = useContext(CartContext);
  
  const changeH = () => {
    Otx.setHover();
  };

  const changeC = () => {
    Otx.setCart();
    console.log('cart: ', Otx.seeCart);
  };

  const changeFavH = () => {
    Otx.setFavHover();
  };

  const { items } = ctx; 
  const length = items.reduce((cur, el) => cur + Number(el.amount), 0);


  return (
    <div className="header">
      <img id='mainhead' src='https://www.gral.pl/images/logo-h2.gif' alt="Main Logo"/>
      <div>
        <div id='buttons'>
          <button className={classes.button} onClick={changeFavH}>
            <FavList/>
            Favourite
          </button>
          <button className={Otx.hover ? classes.activebutton : classes.button} onClick={changeH} >
            <Cart/>
            <span>{length}</span>
            Cart
          </button>
        </div>
        {Otx.Favhover && <Fav/>} 
        {Otx.hover &&
          <div id="mainl" onMouseLeave={changeH}>
            <h2 id='Cart_title'>Cart</h2>
            <div id="elements">
              {ctx.items.map((item) => (
                <Element
                  key={item.id}
                  img={item.img}
                  model={item.model}
                  amount={item.amount}
                  price={item.cena}
                />
              ))}
            </div>
            <div id='under'>
              <div id='sumH'>
                Total price: {ctx.totalAmount} zł
              </div>
              <button id='see_button' onClick={changeC}>SEE CART</button>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Header;
