import { useReducer } from "react";
import CartContext from "./cart_context";
import { faV } from "@fortawesome/free-solid-svg-icons";

const basic = { items: [], totalAmount: 0 };
const zero = { items: [], totalAmount: 0};
const arr =[];


const reducer = (stan, obecny) =>{

  let items = [...stan.items];

  if(obecny.type === "add"){
    const index = stan.items.findIndex((item)=> item.id === obecny.item.id);
    const ilosc = stan.totalAmount + obecny.item.cena * obecny.item.amount;
    const citem = stan.items[index];
    if(citem){
      const am = citem.amount + obecny.item.amount;
      const updatedItem = {...citem, amount: am,};
      items[index] = updatedItem;
    }else{
      items = stan.items.concat(obecny.item);
    }
    console.clear();
    console.log(items);
    // console.log(stan.totalAmount);
    // console.log(obecny.item.cena);
    // console.log(obecny.item.amount);
    return{
      items: items,
      totalAmount: ilosc 
    }
  }
  if(obecny.type === "remove"){
  }
}



const reduc = (stan, obecny) => {
  let itemss = [...stan.items];

  if (obecny.type === "push") {
    const index = stan.items.findIndex((item) => item.id === obecny.item.id);
    if (index !== -1) {
      itemss[index] = obecny.item;
    } else {
      itemss = [...itemss, obecny.item];
    }
  }

  if (obecny.type === "pop") {
    const index = itemss.findIndex((item) => item.id === obecny.item.id);
    if (index !== -1) {
      itemss.splice(index, 1);
    }
  }

  return {
    items: itemss,
    totalAmount: 0,
  };
};





const Provider = (props) =>{
    const [state, action] = useReducer(reducer,basic)

    const add = (item) =>{
      action({type:"add", item:item})
    }
    const remove = (item) =>{
      action({type:"remove", item:item})
    }


    const [fav, act] = useReducer(reduc,zero)

    const push = (item) =>{
      act({type:"push", item:item})
    }
    const pop = (item) =>{
      act({type:"pop", item:item})
    }


    const cartContext = {
      items: state.items,
      totalAmount: state.totalAmount,
      addItem: add,
      removeItem: remove,

      favourites: fav.items,
      addToFav: push,
      removeFromFav: pop,

    }
    return(
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    )
}
export default Provider;
