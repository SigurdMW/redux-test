import * as types from '../actions/action-types';

const initialState = {
  user: []
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });

    case types.DELETE_USER_SUCCESS:
/*
      // Use lodash to create a new user array without the user we want to remove
      const newUsers = _.filter(state.users, user => user.id != action.userId);
      return Object.assign({}, state, { users: newUsers });

      Removed since I don't use lodash here
*/
	return "";
  }

  return state;

}

export default userReducer;