import React, { useState } from 'react';

const OpenContext = React.createContext({
  open: false,
  setOpen: () => {},
  hover: false,
  setHover: () => {},

  Favhover: false,
  setFavHover: () => {},
  closeFavHover: () => {},
  openFavHover: () => {},


  seeCart: true,
  setCart: () => {},

  ELvisible: false,
  setVisible: () => {},

});

export default OpenContext;
