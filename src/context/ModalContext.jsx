import React, { createContext,useState,useEffect } from "react";

import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const[idreceta,setIdReceta]=useState(null);
    const[informacion,setRecta] = useState({});
    useEffect(()=>{
       const obtenerRceta = async()=>{
           if(!idreceta)return;
           const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
           const resultado=await axios.get(url);
           setRecta(resultado.data.drinks[0]);
       }
       obtenerRceta();
    },[idreceta]);
  return (
    <ModalContext.Provider value={{informacion,setRecta,setIdReceta}}>{props.children}</ModalContext.Provider>
  );
};

export default ModalProvider;
