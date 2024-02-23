import ListContext from "./itemy";
import { useState, useEffect } from "react";

const ListProvider = ({ children }) => {
  const [name, sName] = useState('');
  const [group, sGroup] = useState('');
  const [sorts, ssort] = useState('');
  const [price, sprice] = useState(5000);
  const [filtry, gfiltry] = useState([]);
  const [jed, gjed] = useState([]);
  const [dwa, gdwa] = useState([]);
  const [trzy, gtrzy] = useState([]);
  const [cztery, gcztery] = useState([]);

  const getName = (newName) => {
    sName(newName);
    console.log(newName);
  };

  const getGroup = (group) => sGroup(group);
  const getsort = (s) => ssort(s);
  const getprice = (s) => sprice(s);

  const updateArray = (stateArray, filtr, stan) => {
    if (stan === "ADD") {
      stateArray(prevArray => [...prevArray, filtr]);
    } else if (stan === "REMOVE") {
      stateArray(prevArray => prevArray.filter(item => item !== filtr));
    }
  };

  const getf = (s) => {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
      let producent = s[i].producent;
      if (arr.indexOf(producent) === -1) {
        arr.push(producent);
      }
    }
  };

  const updateStateArray = (stateArray, filtr, stan) => {
    updateArray(stateArray, filtr, stan);
  };

  // useEffect(() => {
  //   console.log(filtry, jed, dwa, trzy, cztery);
  // }, [filtry, jed, dwa, trzy, cztery]);

  const values = {
    group,
    getgroup: getGroup,
    name,
    getit: getName,
    sort: sorts,
    getsort,
    price,
    getprice,
    firmy: [],
    getfirmy: getf,
    filtry,
    getfiltry: (filtr, stan) => updateStateArray(gfiltry, filtr, stan),
    jed,
    getjed: (filtr, stan) => updateStateArray(gjed, filtr, stan),
    dwa,
    getdwa: (filtr, stan) => updateStateArray(gdwa, filtr, stan),
    trzy,
    gettrzy: (filtr, stan) => updateStateArray(gtrzy, filtr, stan),
    cztery,
    getcztery: (filtr, stan) => updateStateArray(gcztery, filtr, stan),
  };

  return (
    <ListContext.Provider value={values}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
