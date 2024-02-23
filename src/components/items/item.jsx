import Form from "./form";
import CartContext from "../logic/cart_context";
import classes from './item.module.css';
import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';




function Item(props) {
  const ctx = useContext(CartContext);
  const [isSelected, setIsSelected] = useState('solidHeart');

  
  const addtocart = (ilosc) => {

    ctx.addItem({
      key: props.id,
      id: props.id,
      model: props.model,
      amount: Number(ilosc),
      cena: props.cena,
      img: props.img,
      producent: props.producent,
      info1: props.info1,
      info2: props.info2,
      pierwszu: props.jed,
      drugi: props.dwa,
      trzeci: props.trzy,
      czwarty: props.cztery,
    });
    // console.log(props.id,props.model,Number(ilosc));
  }

  const setSelected = (item) => {
    if (isSelected === 'solidHeart') {
      setIsSelected('regularHeart');
      ctx.addToFav({
        key: props.id,
        id: props.id,
        model: props.model,
        cena: props.cena,
        img: props.img,
        producent: props.producent,
        info1: props.info1,
      });
    } else {
      setIsSelected('solidHeart');
      ctx.removeFromFav({
        key: props.id,
        id: props.id,
        model: props.model,
        // cena: props.cena,
        img: props.img,
        // producent: props.producent,
        // info1: props.info1,
      });
    }
  }

  return (
    <li className={classes.item}>
      <div className={classes.img_cont}>
        <img src={props.img} alt={props.model} className={classes.item_img}/>
      </div>
      <div id="opis">
        <h2>{props.producent} {props.model} {props.info1}</h2>
        <p>{props.jed} | {props.dwa} | {props.trzy}</p>
        <div className={classes.sum}>
          <h3>{props.cena} zł</h3>
        <div className={classes.sinfo}>
          <button type="submit" onClick={setSelected} className={classes.heart}>
            <FontAwesomeIcon icon={isSelected === 'solidHeart' ? regularHeart : solidHeart} className="fa-solid" />
          </button>
          <Form onAdd={addtocart}  />
        </div>

        </div>
      </div>
      <div id="underline"></div>
    </li>
  );
}

export default Item;

