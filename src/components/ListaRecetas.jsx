import React,{useContext,Fragment} from 'react';
import Recetas from './Recetas';
import {RecetasContext} from '../context/RecetasContext';
const ListaRecetas = () => {
   const{recetas} = useContext(RecetasContext)
    return ( 
<Fragment>
    {recetas.map(receta=>(
        <Recetas key={receta.idDrink} receta={receta}></Recetas>
    ))}
</Fragment>
     );
}
 
export default ListaRecetas;
