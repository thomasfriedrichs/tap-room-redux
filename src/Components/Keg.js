import React from "react";
import PropTypes from "prop-types";


function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
        <p><em>{props.style}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;