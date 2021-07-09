import * as c from './actions/ActionTypes';


export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { names, location, issue, id , formattedWaitTime, timeOpen} = keg;
  return {
    type: c.ADD_KEG,
    names: names,
    location: location,
    issue: issue,
    id: id,
    formattedWaitTime: formattedWaitTime,
    timeOpen: timeOpen
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});