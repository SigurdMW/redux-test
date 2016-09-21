import Axios from 'axios';
import store from '../store';
import { getUsersSuccess, deleteUserSuccess, userProfileSuccess } from '../actions/user-actions';

/*
 *	GITHUB DATA 
 */

 export function getUsers() {
   return Axios.get('https://api.github.com/users/sigurdmw')
   	.then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}