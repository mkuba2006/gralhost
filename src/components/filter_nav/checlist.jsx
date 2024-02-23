import OpenContext from "../logic/open_context";
import { useContext, useState, useEffect } from "react";
import ListContext from "../logic/itemy";
import { itemy } from "../items";
import './filter.css';

function Checklist() {
    //const Otx = useContext(OpenContext);
    const ltx = useContext(ListContext);
    const types = [];
    const producents = [];
    const Cards_F1 = [];
    const Cards_F2 = [];
    const Cards_F3 = [];
    const Cards_F4 = [];
    let F1_name = "Producents";
    let F2_name = "";
    let F3_name = "";
    let F4_name = "";
    let F5_name = "";

    function push(array, value) {
      if (!array.includes(value)) {
        array.push(value);
      }
    }
  
    itemy.forEach((item) => {
        if (item.type && !types.includes(item.type)) {
            push(types, item.type);
        }
        
    
        if (ltx.group === item.type && ['Graphics cards', 'Procesors', 'RAM', 'Hard drives', 'Motherboards'].includes(ltx.group)) {
            if (item.producent && !producents.includes(item.producent)) push(producents, item.producent);
            push(Cards_F1, item.szczegol.jeden);
            push(Cards_F2, item.szczegol.dwa);
            push(Cards_F3, item.szczegol.trzy);
            push(Cards_F4, item.szczegol.cztery);
        }
    
        if (ltx.group === "Graphics cards") {
            F2_name = "Screen resolution";
            F3_name = "Data transfer speed";
            F4_name = "Core clock";
            F5_name = "Core clock(boost)";
        } 
        else if (ltx.group === "Procesors") {
            F2_name = "Core clock";
            F3_name = "Number of cores";
            F4_name = "Processor socket";
            F5_name = "Type of memory";
        } 
        else if (ltx.group === "RAM") {
            F2_name = "Cycle latency";
            F3_name = "Number of modules";
            F4_name = "";
            F5_name = "";
        } 
        else if (ltx.group === "Hard drives") {
            F2_name = "UNKNOWN";
            F3_name = "UNKNOWN";
            F4_name = "UNKNOWN";
            F5_name = "UNKNOWN";
        } 
        else if (ltx.group === "Motherboards") {
            F2_name = "UNKNOWN";
            F3_name = "UNKNOWN";
            F4_name = "UNKNOWN";
            F5_name = "UNKNOWN";
        }
    });
    
    
  
    const handleCheckboxClick = (e) => {
        const { value, checked } = e.target;
    
        if (producents.includes(value)) {
            ltx.getfiltry(value, checked ? 'ADD' : 'REMOVE');
        }
        if (Cards_F1.includes(value)) {
            ltx.getjed(value, checked ? 'ADD' : 'REMOVE');
        }
        if (Cards_F2.includes(value)) {
            ltx.getdwa(value, checked ? 'ADD' : 'REMOVE');
        }
        if (Cards_F3.includes(value)) {
            ltx.gettrzy(value, checked ? 'ADD' : 'REMOVE');
        }
        if (Cards_F4.includes(value)) {
            ltx.getcztery(value, checked ? 'ADD' : 'REMOVE');
        }
    };

    return (
        <div id="checklist_elements">

            <div id="checklist_list_element">
                <h2>{F1_name}</h2>
                <div id="ul">
                    {producents.map((filt) => (
                        <div key={filt}>
                            <input type="checkbox" id={filt} name={filt} value={filt} onChange={handleCheckboxClick}/>
                            <label htmlFor="vehicle1"> {filt}</label>
                        </div>
                    ))}
                </div>
            </div>


            <div id="checklist_list_element">
                <h2>{F2_name}</h2>
                <div id="ul">
                    {Cards_F1.map((filt) => (
                        <div key={filt}>
                            <input type="checkbox" id={filt} name={filt} value={filt} onChange={handleCheckboxClick} />
                            <label htmlFor="vehicle1"> {filt}</label>
                        </div>
                    ))}
                </div>
            </div>


            <div id="checklist_list_element">
                <h2>{F3_name}</h2>
                <div id="ul">
                    {Cards_F2.map((filt) => (
                        <div key={filt}>
                            <input type="checkbox" id={filt} name={filt} value={filt} onChange={handleCheckboxClick} />
                            <label htmlFor="vehicle1"> {filt}</label>
                        </div>
                    ))}
                </div>
            </div>
            {ltx.group !=="RAM" && (
                <>
            <div id="checklist_list_element">
                <h2>{F4_name}</h2>
                <div id="ul">
                    {Cards_F3.map((filt) => (
                        <div key={filt}>
                            <input type="checkbox" id={filt} name={filt} value={filt} onChange={handleCheckboxClick} />
                            <label htmlFor="vehicle1"> {filt}</label>
                        </div>
                    ))}
                </div>
            </div>


            <div id="checklist_list_element">
                <h2>{F5_name}</h2>
                <div id="ul">
                    {Cards_F4.map((filt) => (
                        <div key={filt}>
                            <input type="checkbox" id={filt} name={filt} value={filt} onChange={handleCheckboxClick} />
                            <label htmlFor="vehicle1"> {filt}</label>
                        </div>
                    ))}
                </div>
            </div>
            </>
            )}
        </div>
    );
}
  
export default Checklist;