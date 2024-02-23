import Price_range from "./price_range";
import Sortuj from "./sortuj";
import './filter.css'
import OpenContext from "../logic/open_context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faX} from '@fortawesome/free-solid-svg-icons'
import { memo, useContext } from "react";
import ListContext from "../logic/itemy";
import Checklist from "./checlist";
import { itemy } from "../items";

function Filter() {
    const Otx = useContext(OpenContext)
    const ltx = useContext(ListContext)
    const bef = itemy
    const changeVisibility = () => {
        Otx.setVisible();
        console.log(Otx.ELvisible);
    }
    const clc= ()=>{
        window.location.href = window.location.href;
    }
    return (
        <>
            {!Otx.seeCart && (
                <div id="filters">
                    <div id="filters_one">
                        <Sortuj />
                        <Price_range />
                        {ltx.group.trim() !== "" &&
                            <button id="checklist_button" onClick={changeVisibility}>Filters</button>
                        }
                        <p>Before any change search, unselect all filters</p>
                    </div>
                    <button id="reset_button" onClick={clc}><FontAwesomeIcon icon={faX} /><span>reset filters</span></button>
                </div>
            )}
            
            
            
            {(Otx.ELvisible && ltx.group.trim() !== "") ? <div style={{ display: 'block' }}> <Checklist  /></div> : <div style={{ display: 'none' }}> <Checklist  /></div> }







        </>
    );
}
  
export default memo(Filter);