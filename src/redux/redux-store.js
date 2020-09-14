import {combineReducers, createStore} from 'redux';
import porfileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';

let reducers = combineReducers({
  messages: messagesReducer,
  profilePage: porfileReducer,
})

let store = createStore(reducers);

export default store;