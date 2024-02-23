import React, { createContext, useReducer } from 'react';
import OpenContext from './open_context';

const reducer = (state, action) => !state;
const favreducer=(state,action)=>{
  console.log(action);
  if(action = "TOGGLE"){
    return !state;
  }
  else if(action = "OPEN"){
    return true;
  }
  else if(action = "CLOSE"){
    return false;
  }
}


const OpenProvider = (props) => {
  const [isOpen, change] = useReducer(reducer, false);
  const [isHover, changeH] = useReducer(reducer, false);
  const [isCart, changeC] = useReducer(reducer, false);
  const [isELVisible, changeVisible] = useReducer(reducer, false);
  const [isFavhover, changeFavH] = useReducer(favreducer, false);


  const toggle = (setter) => () => setter({ type: 'TOGGLE' });
  const close = (setter) => () => setter({ type: 'CLOSE' });
  const open = (setter) => () => setter({ type: 'OPEN' });

  const OpenCTX = {
    open: isOpen,
    setOpen: toggle(change),
    hover: isHover,
    setHover: toggle(changeH),

    Favhover: isFavhover,
    setFavHover: toggle(changeFavH),
    closeFavHover: close(changeFavH),
    openFavHover: open(changeFavH),


    seeCart: isCart,
    setCart: toggle(changeC),
    ELvisible: isELVisible,
    setVisible: toggle(changeVisible),
  };

  return (
    <OpenContext.Provider value={OpenCTX}>
      {props.children}
    </OpenContext.Provider>
  );
};

export default OpenProvider;