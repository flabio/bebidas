import React, { createContext, useState,useEffect } from "react";
import axios from 'axios';

//crea el context
export const CategoriasContext = createContext();

// provider es donde se encuentran las functiones y state

const CategoriasProvider = (props) => {

  const [categorias, setCategorias] = useState([]);
  
  useEffect(()=>{
    const getCategoriasApi=async()=>{
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const resultado = await axios.get(url);
        setCategorias(resultado.data.drinks);
    };
    getCategoriasApi();
  },[]);
  
  return (
    <CategoriasContext.Provider value={{ categorias}}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
