import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../src/actions/ActionTypes';
import Moment from 'moment';


describe('kegListReducer', () => {

  let action;

  const kegData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    timeOpen: 0,
    id: 1,
  }

  const currentState = {
    1: {names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 },
    2: {names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: 2 }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  })

  test('Should successfully add new keg data to masterKegList', () => {
    const { names, location, issue, id } = kegData;
    action = {
      type: c.ADD_KEG,
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
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
      2: {names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 }
    });
  });

  test('Should add a formatted wait time to keg entry', () => {
    const { names, location, issue, timeOpen, id } = kegData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(kegListReducer({ [id] : kegData }, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });

  test('should successfully add a keg to the keg list that includes Moment-formatted wait times', () => {
    const { names, location, issue, timeOpen, id } = kegData;
    action = {
      type: 'ADD_KEG',
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });


});
