import { createContext } from 'react';

const ListContext = createContext({
  group: '',
  getgroup: (newName) => {},
  name: '',
  getit: (newName) => {},
  sort: '',
  getsort: (s) => {},
  price: '5000',
  getprice: (s) => {},
  firmy: [],
  getfirmy : (f)=>{},
  
  filtry: [],
  getfiltry : (f,stan)=>{},

  jed: [],
  getjed : (f,stan)=>{},
  dwa: [],
  getdwa : (f,stan)=>{},
  trzy: [],
  gettrzy : (f,stan)=>{},
  cztery: [],
  getcztery : (f,stan)=>{},

});

export default ListContext;
