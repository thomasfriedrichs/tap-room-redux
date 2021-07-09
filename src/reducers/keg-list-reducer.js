import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {
  const { name, brand, style, price, abv, pints, id , formattedWaitTime, timeOpen} = action;
  switch (action.type) {
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        style: style,
        price: price,
        abv: abv,
        pints: pints,
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
