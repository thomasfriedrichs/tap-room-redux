import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import Moment from 'moment';


function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      style: event.target.style.value, 
      price: event.target.price.value, 
      abv: event.target.abv.value, 
      pints: parseInt(124),
      id: v4(),
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm; 