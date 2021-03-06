import React from "react";
import PropTypes from "prop-types";

function Soda(props) {
  return (
    
    <React.Fragment>
        <p><strong>Soda:</strong> {props.name}</p>
        <p><strong>Total Pints:</strong> {props.pints} pints</p>
        <p><strong>Price:</strong> ${props.price}/pint</p>
        <button onClick = {() => props.whenSodaClicked(props.id)}>Detials</button>
        <hr/>
    </React.Fragment>
  )
}

Soda.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  sugarContent: PropTypes.string,
  pints: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  whenSodaClicked: PropTypes.func
}

export default Soda;