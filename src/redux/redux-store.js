import {combineReducers, createStore} from 'redux';
import porfileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  messages: messagesReducer,
  profilePage: porfileReducer,
  users: usersReducer,
  form: formReducer,
})

let store = createStore(reducers);

export default store;