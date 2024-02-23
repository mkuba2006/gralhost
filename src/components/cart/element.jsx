import './cart.css'
import './element.css'

function Element(props) {

    return (
        <div id="element">
            <div id="img_container">
                <img src={props.img}/>
            </div>
            <div id="info">
                <h2>
                  <span id='sp1'>{props.producent} {props.model}<br></br></span>
                  <span id='sp2'>{props.main1}  {props.main2}  {props.jeden}  |  {props.dwa}  |  {props.trzy}  |  {props.cztery}<br></br></span>
                </h2>
            </div>
            <div id="element_main">
                <span>{props.amount} szt</span>
                <span>{props.price},00zł</span>
            </div>
        </div>
    );
}
  
export default Element;