import { combineReducers } from 'redux';

const ACTION_UPDATE_QUEUES_LIST = 'UPDATE_QUEUES_LIST';

const initialState = {
  queuesList: [],
};

export const namespace = 'availableQueues';

export class Actions {
  static updateAvailableQueues = (queuesList) => ({
    type: ACTION_UPDATE_QUEUES_LIST,
    queuesList,
  });
}

function reduce(state = initialState, action) {
  switch (action.type) {
    case ACTION_UPDATE_QUEUES_LIST: {
      return {
        ...state,
        queuesList: action.queuesList,
      };
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  list: reduce,
});
