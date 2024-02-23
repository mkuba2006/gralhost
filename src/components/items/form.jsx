import React, { useState, useContext } from 'react';
import classes from './item.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import CartContext from "../logic/cart_context";

function Form(props) {
  const ctx = useContext(CartContext);


  const [isClicked, setIsClicked] = useState(false);
  const [isSelected, setIsSelected] = useState('solidHeart');

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);

    const val = 1;
    props.onAdd(val);
  }

  const setSelected = (item) => {
    if (isSelected === 'solidHeart') {
      setIsSelected('regularHeart');
    } else {
      setIsSelected('solidHeart');
    }
    const val = 1;
    props.onFav(val);
  }

  return (
    <form onSubmit={e => e.preventDefault()}>

      {/* <button type="submit" onClick={setSelected} className={classes.heart}>
        <FontAwesomeIcon icon={isSelected === 'solidHeart' ? regularHeart : solidHeart} className="fa-solid" />
      </button> */}
      <button type="submit" className={` ${isClicked ? `${classes.button_clicked}` : ''}`} onClick={handleButtonClick}>
        BUY
      </button>

    </form>
  );
}

export default Form;