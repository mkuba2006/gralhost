import './element.css'
import OpenContext from '../logic/open_context';
import { useContext } from 'react';



function Test(props) {

    const Otx = useContext(OpenContext);
    const setopen = () =>{
        Otx.setOpen();
        Otx.setFavHover();
    }


    return (
        <div id="element" onClick={setopen}>
            <div id="img_container">
                <img src={props.img}/>
            </div>
            <div id="info">
                <h2>
                  <span id='sp1'>{props.model}<br></br></span>
                </h2>
            </div>
        </div>
    );
}
  
export default Test;