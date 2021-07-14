import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from './../actions';
import Moment from 'moment';

class KegControl extends React.Component {
  
  handleClick = () => {
    if (this.props.selectedKeg != null) {
      const { dispatch } = this.props;
      const action = a.deselectKeg();
      dispatch(action);
      if(this.props.editing) {
        const action2 = a.toggleEdit();
        dispatch(action2);
      }
    } else {
      const { dispatch } = this.props;
      const action3 = a.toggleForm();
      dispatch(action3);
      };
    }

    handleDeletingKeg = (id) => {
      const { dispatch } = this.props;
      const action = a.deleteKeg(id);
      dispatch(action);
      const action2 = a.deselectKeg();
      dispatch(action2);
    }
  


  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => { 
    const selectedKeg = this.props.mainKegList[id];
    const { dispatch } = this.props;
    const action = a.selectKeg(selectedKeg);
    dispatch(action);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  }

  
  handleEditKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.deselectKeg();
    dispatch(action2); 
    if(this.props.editing) {
      const action3 = a.toggleEdit();
      dispatch(action3);
    }
  }


  handlePintsInKeg = (kegToPour) => {
    const { dispatch } = this.props;
    const action = a.pourPint(kegToPour);
    dispatch(action);
    const action2 = a.deselectKeg();
    dispatch(action2);
    if(this.props.editing) {
      const action3 = a.toggleEdit();
      dispatch(action3);
    }
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateKegElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateKegElapsedWaitTime = () => {
    const { dispatch } = this.props;
    Object.values(this.props.masterKegList).forEach(keg => {
    const newFormattedWaitTime = keg.timeOpen.fromNow(true);
    const action = a.updateTime(keg.id, newFormattedWaitTime);
    dispatch(action);
  });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = 
      <EditKegForm 
      keg = {this.state.selectedKeg} 
      onEditKeg = {this.handleEditingKegInList}
      />;
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg) {
      currentlyVisibleState = 
      <KegDetail
        keg = {this.state.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick}
        onClickingPour={ this.handlePintsInKeg}
      />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewKegForm 
      onNewKegCreation={this.handleAddingNewKegToList} 
      />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = 
      <KegList 
      kegList={this.state.masterKegList} 
      onKegSelection={this.handleChangingSelectedKeg} 
      />;
      buttonText = "Add Keg";  
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  mainKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object,
  editing: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editing: state.editing
  }
}

KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;