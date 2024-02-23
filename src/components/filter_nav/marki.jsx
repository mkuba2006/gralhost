import React, { useContext, useState } from 'react';
import './filter.css';
import ListContext from '../logic/itemy'

function Sortuj() {
  const ltx = useContext(ListContext)
  
  return (
    <select id="sortowanie" >
      <option value="sortuj">Sortuj</option>

    </select>
  );
}

export default Sortuj;
