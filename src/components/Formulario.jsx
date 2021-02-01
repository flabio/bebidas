import React, { useState, Fragment,useContext } from "react";
import Error from "./Error";
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {


  const [busqueda,setBusqueda] = useState({
    nombre:'',
    categoria:''
  });
  
  const {categorias} = useContext(CategoriasContext);
  
  const{buscarRecetas,setConsultar} = useContext(RecetasContext);

  const [error, setError] = useState(false);

  const {nombre,categoria}=busqueda;

  const handlerChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]:e.target.value
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    
    //validar los campos
    if(nombre.trim()==='' || categoria.trim()===''){
      setError(true)
      return;
    }
    setConsultar(true)
    buscarRecetas(busqueda)
   
    setError(false);
  };
  return (
    <Fragment>
      {error ? <Error mensaje="Los campos son requeridos." /> : null}
      <form className="col-12" onSubmit={handlerSubmit}>
        <fieldset className="text-center">
          <legend>Busca bebidas por Categoria o Ingrediente </legend>
        </fieldset>
        <div className="row mt-4">
          <div className="col-md-4">
            <input
              name="nombre"
              className="form-control"
              type="text"
              placeholder="Buscar por ingrediente"
              onChange={handlerChange}
            />
          </div>
          <div className="col-md-4">
            <select className="form-control" name="categoria" onChange={handlerChange}>
              <option value="">--Selecciona Categoria --</option>
              {categorias.map(categoria=>(
                <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
              <button type="submit" className="btn btn-block btn-primary">
                  Buscar Bebibas
              </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
