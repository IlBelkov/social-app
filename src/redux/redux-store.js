import {combineReducers, createStore} from 'redux';
import porfileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
  messages: messagesReducer,
  profilePage: porfileReducer,
  users: usersReducer,
})

let store = createStore(reducers);

export default store;