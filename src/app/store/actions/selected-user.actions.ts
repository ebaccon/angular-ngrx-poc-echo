import { createAction, props } from '@ngrx/store';

export const selectedUser = createAction(
  '[User Component] SelectedUser',
  props<{ selectedUser: any }>()
);

