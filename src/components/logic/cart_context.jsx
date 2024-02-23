import React from 'react';
const CartContext = React.createContext({
  items: [],
  totalAmount: Number(0),
  addItem: (item) => {},
  removeItem: (id) => {},

  favourites: [],
  addToFav: (item) => {},
  removeFromFav: (item) => {},

});

export default CartContext;