import { createContext, useState, useContext } from "react";

const OpenContext = createContext();

const OpenProvider = (props) => {
  const [isOpen, change] = useState(false);
  const [isHover, changeH] = useState(false);
  const [isFavhover, changeFavH] = useState(false);
  const [isCart, changeC] = useState(false);
  const [isELVisible, changeVisible] = useState(false);

  const toggle = (setter) => () => setter({ type: "TOGGLE" });
  const close = (setter) => () => setter({ type: "CLOSE" });
  const open = (setter) => () => setter({ type: "OPEN" });

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

export default OpenProvider; // Add this line to export the OpenProvider component as the default export