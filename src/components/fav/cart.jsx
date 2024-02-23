import { useContext } from 'react';
import CartContext from '../logic/cart_context';
import Test from './test';
import './element.css';
import OpenContext from '../logic/open_context';


function Fav() {

    const Otx = useContext(OpenContext);
    const ctx = useContext(CartContext);
    // ctx.favourites.map((item)=>(
    //     console.log(ctx.favourites)
    // ))
    
    const setopen = () =>{
        Otx.setFavHover();
        console.log('sope');
    }

    return (
        <div id='bg'>
            <dialog id="favourites">
            <h2>Favourite</h2>
            <div id='elements'>
                {ctx.favourites.map((item)=>(
                    <Test
                        key={item.id}
                        img={item.img}
                        model ={item.model}
                    />
                ))}
            </div>
                <div id='buttons'>
                    <button onClick={setopen}>Close</button>
                </div>
            </dialog>
        </div>
    );
  }
  
  export default Fav;