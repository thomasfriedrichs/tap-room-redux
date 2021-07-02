import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingPour } = props;
  
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
      <h1>Keg Details</h1>
      <h3>{keg.name} by {keg.brand}</h3>
      <p><em>{keg.style}</em></p>
      <h4>{keg.price}</h4>
      <h4>{keg.abv}</h4>
      <p>{pintsLeft}</p><button>{sellButton}Sell</button>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Finish Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPour: PropTypes.func
};

export default KegDetail;