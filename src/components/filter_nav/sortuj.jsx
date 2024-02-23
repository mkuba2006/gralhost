import React, { useContext, useState } from 'react';
import './filter.css';
import ListContext from '../logic/itemy'

function Sortuj() {
  const ltx = useContext(ListContext)
  const handleSelectChange = (e) => {
    ltx.getsort(e.target.value);
  };
  
  return (
    <select id="sortowanie" onChange={handleSelectChange}>
      <option value="sortuj">Sortuj</option>
      <option value="cena-malejaco">Cena malejąco</option>
      <option value="cena-rosnaco">Cena rosnąco</option>
      <option value="nazwa-malejaco">Nazwa malejąco</option>
      <option value="nazwa-rosnaco">Nazwa rosnąco</option>
    </select>
  );
}

export default Sortuj;
