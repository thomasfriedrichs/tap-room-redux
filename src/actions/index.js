import * as c from './actions/ActionTypes';


export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { names, location, issue, id , formattedWaitTime, timeOpen, pints} = keg;
  return {
    type: c.ADD_KEG,
    names: names,
    location: location,
    issue: issue,
    id: id,
    formattedWaitTime: formattedWaitTime,
    timeOpen: timeOpen,
    pints: pints
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});

export const pourPint = (keg) => {
  const { name, brand, price, abv, pints, id } = keg;
  return {
    type: c.ADD_KEG,
    name,
    brand,
    price,
    abv,
    pints: pints - 1,
    id
  }
};

export const selectKeg = (selectedKeg) => {
  const { name, brand, price, abv, pint, id } = selectedKeg;
  return {
    type: c.SELECT_KEG,
    name,
    brand,
    price,
    abv,
    pint,
    id
  };
}

export const deselectKeg = () => ({
  type: c.DESELECT_KEG
});