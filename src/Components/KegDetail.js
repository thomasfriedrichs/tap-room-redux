import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.location} - {keg.names}</h3>
      <p><em>{keg.issue}</em></p>
      <h4>{keg.price}</h4>
      <h4>{keg.abv}</h4>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Close Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;