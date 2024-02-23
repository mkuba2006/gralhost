// img, amount price
import { useContext } from 'react';
import CartContext from '../logic/cart_context';
import OpenContext from '../logic/open_context';
import Element from './element';


import './cart.css'

function Cart_main() {
    const ctx = useContext(CartContext);
    const otx = useContext(OpenContext);
    return (
        <>
            {otx.seeCart &&
                <div id="main">
                    <ul id="cart_ul">
                        {ctx.items.map((item)=>(
                            <Element
                                key={item.id}
                                img={item.img}
                                amount = {item.amount}
                                price={item.cena}
                                producent ={item.producent}
                                model ={item.model}
                                main1={item.info1}
                                main2={item.info2}
                                jeden ={item.pierwszu}
                                dwa ={item.drugi}
                                trzy ={item.trzeci}
                                cztery ={item.czwarty}
                            />
                        ))}
                    </ul>
                    <div id='sum'>
                        <h2 id='pc'>
                        <div>Total price:</div>
                        <div>{ctx.totalAmount} zł</div>
                        </h2>
                        <button id='order_button' onClick={otx.setCart()}>Order now</button>
                    </div>
                </div>
            }
        </>
    );
  }
  
  export default Cart_main;