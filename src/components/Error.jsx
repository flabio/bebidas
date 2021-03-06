import React from 'react';
import PropTypes from 'prop-types';
const Error = ({mensaje}) => ( 
    <div className="alert alert-danger">{mensaje}</div>
 );

 Error.propTypes = {
     mensaje: PropTypes.string.isRequired
 }
export default Error;
