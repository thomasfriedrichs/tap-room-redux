import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {
  const { names, location, issue, id , formattedWaitTime, timeOpen} = action;
  switch (action.type) {
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id,
        timeOpen: timeOpen,
        formattedWaitTime: formattedWaitTime
      }
    });
  case c.DELETE_KEG:
    let newState = { ...state };
    delete newState[id];
  // default:
    return newState;
    
    case c.UPDATE_TIME:
      const newKeg = Object.assign({}, state[id], {formattedWaitTime});
      const updatedState = Object.assign({}, state, {
        [id]: newKeg
      });
      return updatedState;
    default:
      return state;
  }
};
