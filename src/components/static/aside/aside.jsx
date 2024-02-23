import { useContext, useState } from "react";
import cl from "./aside.module.css";
import Head from "./sidebar-header";
import NavItems from "./dane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OpenContext from "../../logic/open_context";
import ListContext from "../../logic/itemy";


const Aside = () => {
  const ltx = useContext(ListContext);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState(null);
  const Otx = useContext(OpenContext);

  const setIt = (i) => {
    change();
    setIsOpen(!isOpen);
  };

  const toggleGroup = (index) => {
    if (isOpen) {
      setExpandedGroup((prevGroup) => (prevGroup === index ? null : index));
    }
  };
  const change = () =>{Otx.setOpen()};
  const lst = (i) => {ltx.getit(i)};
  const group = (e) => ltx.getgroup(e);

  const rnd = (a,b,c,d) =>{
    setIsOpen(a); 
    setIt(b); 
    lst(c); 
    group(d);
  }

  return (
    <div>
      <aside  className={`${cl.sidebar} ${isOpen ? cl.open : ""}`}>
        <div className={cl.sidebar_inner}>
          <Head onClick={() => {setIsOpen(!isOpen); change(); }} />
          <nav className={cl.sidebar_menu}>
          {NavItems.map((item, index) => (
            <div key={index} className={cl.sidebar_button} >
                <ul>
                    <button onClick={() => {toggleGroup(index)}}>
                      <span className={cl.title}><FontAwesomeIcon icon={item.img} className={cl.icon} />{item.name}</span>
                      <p>
                      {expandedGroup === index &&
                          item.options.map((option, optionIndex) => (
                            <li key={option} onClick={() => { rnd(!isOpen, option, option, item.name)}} className={cl.sidebar_li}>{option}</li>
                      ))}
                      </p>
                    </button>
                </ul>
            </div>
          ))}
        </nav>
        </div>
      </aside>
    </div>
  );
};

export default Aside;