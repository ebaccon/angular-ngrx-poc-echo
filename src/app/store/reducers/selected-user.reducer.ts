import { createReducer, on } from '@ngrx/store';
import { selectedUser } from '../actions/selected-user.actions';

export const initialState = {};

const _selectedUserReducer = createReducer(initialState,
  on(selectedUser, (state, user) => {
    console.log('_selectedUserReducer selectedUser with user : ', user);
    return user;
  })
);

export function selectedUserReducer(state, action) {
  return _selectedUserReducer(state, action);
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/