const ADD_FRIEND = 'ADD-FRIEND';
// const REVERSE_TOGGLE='REVERSE-TOGGLE';

const initialState = {
    users: [
      { name: 'Ilya', location: {city: 'Kiev', country: 'Ukraine'}, id: '1', followed: true },
      { name: 'Vlad', location: {city: 'Rostov', country: 'Russia'}, id: '2', followed: false },
      { name: 'Jenya', location: {city: 'Moskov', country: 'Russia'}, id: '3', followed: true },
      { name: 'Elya', location: {city: 'Rostov', country: 'Russia'}, id: '4', followed: false },
    ],
};

const usersRedusers = (state = initialState, action) => {
  debugger;
  if(action.type === ADD_FRIEND) {
    let stateUsers = [ ...state];
    let id = stateUsers.findIndex(i => i.id === action.id);
    if(stateUsers[id].followed === true) {
      stateUsers[id] = {...stateUsers[id], followed: false};
    } else {
      stateUsers[id] = {...stateUsers[id], followed: true};
    }
    return stateUsers;
  }

  return state.users;
}

export let toggleFollow = (id) => {
  return {
    type: ADD_FRIEND,
    id: id
  }
}
// export let followReverse = () => {
//   return {
//     type: REVERSE_TOGGLE
//   }
// }

export default usersRedusers;