import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../src/actions/ActionTypes';
import Moment from 'moment';


describe('kegListReducer', () => {

  let action;

  const kegData = {
    name: 'mannys',
    brand: 'georgetown',
    style: 'pale ale',
    price: 5,
    abv: '5.4%',
    pints: 124,
    timeOpen: 0,
    id: 1,
  }

  const currentState = {
    1: {
      name: 'mannys',
      brand: 'georgetown',
      style: 'pale ale',
      price: 5,
      abv: '5.4%',
      pints: 124,
      id: 1 
    },
    2: {
      name: 'rogers',
      brand: 'georgetown',
      style: 'pilsner',
      price: 5,
      abv: '4.9%',
      pints: 124,
      id: 2 
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  })

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, style, price, abv, pints, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      style: style,
      price: price,
      abv: abv,
      pints: pints,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        style: style,
        price: price,
        abv: abv,
        pints: pints,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'rogers',
        brand: 'georgetown',
        style: 'pilsner',
        price: 5,
        abv: '4.9%',
        pints: 124,
        id: 2 
      }
    });
  });

  test('Should add a formatted wait time to keg entry', () => {
    const { name, brand, style, price, abv, pints, timeOpen, id } = kegData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(kegListReducer({ [id] : kegData }, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        style: style,
        price: price,
        abv: abv,
        pints: pints,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });

  test('should successfully add a keg to the keg list that includes Moment-formatted wait times', () => {
    const { name, brand, style, price, abv, pints, timeOpen, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      style: style,
      price: price,
      abv: abv,
      pints: pints,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        style: style,
        price: price,
        abv: abv,
        pints: pints,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });


});
