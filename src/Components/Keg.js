import React from "react";
import PropTypes from "prop-types";



function Keg(props){
  
  const { keg, onClickingPour } = props;
  
  let sellButton; 
  let pintsLeft;
  if(keg.pints > 0) {
    pintsLeft = <h4>Pints: { keg.pints }</h4>;
    sellButton = <button onClick={ () => onClickingPour() }>Sell</button>
  } else {
      pintsLeft = <h4><strong>Keg is Empty</strong></h4>;
  };

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
        <p><em>{props.style}</em></p>
        <p>{pintsLeft}</p><button>{sellButton}</button>
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
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;