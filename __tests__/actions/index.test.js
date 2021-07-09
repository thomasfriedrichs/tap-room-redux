import * as actions from './../../actions';
import * as c from '../../src/actions/ActionTypes';

describe('help queue actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('updateTime should create UPDATE_TIME action', () => {
    expect(actions.updateTime(1, "A few seconds")).toEqual({
      type: c.UPDATE_TIME,
      id: 1,
      formattedWaitTime: "A few seconds"
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({names: 'Jo and Jasmine', location: '3E', issue: 'Redux not working!', timeOpen: 0,
    formattedWaitTime: "A few seconds", id: 1})).toEqual({
      type: c.ADD_KEG,
      names: 'Jo and Jasmine',
      location: '3E',
      issue: 'Redux not working!',
      timeOpen: 0,
      formattedWaitTime: "A few seconds",
      id: 1
    });
  });
});