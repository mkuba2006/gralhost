import './element.css'
import CartContext from '../../logic/cart_context';
import { useContext } from 'react';



function Element(props) {
    const ctx = useContext(CartContext);
    return (
        <div id="elementt">
            <div id="img_container">
                <img src={props.img}/>
            </div>
            <div id="element_main">
                <div id='FST'>
                    <h3>{props.model}</h3>
                </div>
                <div id='SEC'>
                    <span>{props.amount} szt</span>
                    <span>{props.price} zł</span>
                </div>
            </div>
        </div>
    );
}
  
export default Element;