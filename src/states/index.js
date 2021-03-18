import { combineReducers } from 'redux';
import AvailableQueuesReducer from './AvailableQueuesListState';

// Register your redux store under a unique namespace
export const namespaceAvailableQueues = 'availableQueues';

// Combine the reducers
export default combineReducers({
  availableQueues: AvailableQueuesReducer,
});
